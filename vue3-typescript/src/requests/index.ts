import axios from "axios";
// import authHeader from "./auth-header";

export type User = { user: { _id: string, name: string; email: string }, token: string, refreshToken: string }
export type UserList = Array<User>

export async function login(email: string, password: string): Promise<User> {
    const requestBody = {
        email,
        password
    }
    const { data } = await axios.post('/v1/auth/login', requestBody, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (data.token) {
        axios.defaults.headers.common['Authorization'] = data.token;
        localStorage.setItem('user', JSON.stringify(data));
    }
    return data
}

export async function getUser(): Promise<User> {
    // await authHeader();
    const { data } = await axios.get('/v1/auth/me');
    return data
}

export async function logOut(): Promise<void> {
    axios.defaults.headers.common['Authorization'] = ''
    localStorage.removeItem('user');
}