import axios from 'axios';
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? "https://authen-api-1.herokuapp.com/api" : "http://localhost:5000/api";

// refer: https://www.youtube.com/watch?v=Bbx0CyPf4c4&t=127s
// https://dev.to/franciscomendes10866/how-to-use-axios-interceptors-b7d
let refresh = false;

axios.interceptors.request.use(
    async (config) => {
        const localstoregeUser = localStorage.getItem('user') || undefined;
        const user = localstoregeUser ? JSON.parse(localstoregeUser) : undefined;
        if (user?.token) {
            config.headers = {
                ...config.headers,
                "Authorization": user.token
            }
        }
        return config
    }, (error) => {
        return error
    })

axios.interceptors.response.use(resp => resp, async error => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !refresh) {
        refresh = true;
        const localstoregeUser = localStorage.getItem('user') || '';
        const user = JSON.parse(localstoregeUser);
        const { status, data } = await axios.post('/v1/auth/refresh_token', {
            "email": user.user.email,
            "refreshToken": user.refreshToken
        }, {
            withCredentials: true
        });
        if (status === 200) {
            if (data.token) {
                axios.defaults.headers.common['Authorization'] = data.token;
                const newUserToken = { ...user, token: data.token }
                localStorage.setItem('user', JSON.stringify(newUserToken));
                return axios(originalRequest)
            } else if (data.error) {
                localStorage.removeItem('user');
                return data.error
            } else if (!data.token) {
                localStorage.removeItem('user');
                return data
            }
        }
    }

    refresh = false;
    return error
})