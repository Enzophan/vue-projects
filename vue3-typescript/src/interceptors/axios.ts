import axios from 'axios';
import { memoizeApi } from './refreshToken'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? "https://authen-api-1.herokuapp.com/api" : "http://localhost:5000/api";

// refer: https://www.youtube.com/watch?v=Bbx0CyPf4c4&t=127s
// https://dev.to/franciscomendes10866/how-to-use-axios-interceptors-b7d

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
    if (error?.response?.status === 401 && !originalRequest?.sent) {
        originalRequest.sent = true;
        const token = await memoizeApi();
        if(token) {
            axios.defaults.headers.common['Authorization'] = token;
        }
        return axios(originalRequest)
    }
    return Promise.reject(error);
})