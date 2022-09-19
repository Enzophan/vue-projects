import axios from "axios";
// import authHeader from "./auth-header";
import { generateId } from '@/utils/url-manipilation';

export type User = { user: { _id: string, name: string; email: string, role: string }, token: string, refreshToken: string };
export type UserList = Array<User>

export type GuestUser = { _id: string, name: string };

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

export async function register(name: string, email: string, password: string): Promise<User> {
    const requestBody = {
        name,
        email,
        password
    }
    const { data } = await axios.post('/v1/auth/register', requestBody, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return data
}

export async function createGuestUser(): Promise<GuestUser> {
    const guestInfo = JSON.parse(localStorage.getItem('guestInfo') || '{}');
    console.log("guestInfo ", guestInfo)
    if (guestInfo && guestInfo._id) {
        return guestInfo
    } else {
        const data = {
            _id: generateId(),
            name: ""
        }
        localStorage.setItem('guestInfo', JSON.stringify(data));
        return data
    }
}