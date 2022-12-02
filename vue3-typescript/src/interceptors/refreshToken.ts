import axios from 'axios';

type CallApiType = () => Promise<string>;

const refreshTokenFn = async () => {
    const localstoregeUser = localStorage.getItem('user') || undefined;
    const user = localstoregeUser ? JSON.parse(localstoregeUser) : undefined;
    try {
        const response = await axios.post("/v1/auth/refresh_token", {
            "email": user.user.email,
            "refreshToken": user.refreshToken
        });
        const { token } = response.data;

        if (!token) {
            localStorage.removeItem("user");
        };
        const newUserToken = { ...user, token }
        localStorage.setItem('user', JSON.stringify(newUserToken));
        return token;
    } catch (error) {
        localStorage.removeItem("user");
    }
}

const memoizeRateLimit = (func: CallApiType, maxAge: number = 1000) => {
    let cache = new Map();
    let startTime = Date.now();

    const cached = function (this: any, val: string = 'refresh') {
        const endTime = Date.now();
        const requestTime = endTime - startTime;
        const delayTime = maxAge - requestTime;

        if (delayTime <= 0) {
            cache = new Map();
            startTime = Date.now();
        };
        return cache.has(val)
            ? cache.get(val)
            : cache.set(val, func.call(this)) && cache.get(val);
    };
    cached.cache = cache;
    return cached
}

export const memoizeApi = memoizeRateLimit(refreshTokenFn, 5000);
