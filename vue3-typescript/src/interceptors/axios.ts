import axios from 'axios';

let refresh = false;

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.response.use(resp => resp, async error => {
    console.log("error.response ", error.response)
    if (error.response.status === 401 && !refresh) {
        refresh = true;
        const localstoregeUser = localStorage.getItem('user') || '';
        const user = JSON.parse(localstoregeUser);
        console.log("user ", user)

        const { status, data } = await axios.post('/v1/auth/refresh_token', {
            "email": user.user.email,
            "refreshToken": user.refreshToken
        }, {
            withCredentials: true
        });
        console.log("status ", status)

        if (status === 200) {

            console.log("AAA ", data)

            const newUserToken = { ...user, token: data.token }
            localStorage.setItem('user', JSON.stringify(newUserToken));
            axios.defaults.headers.common['Authorization'] = data.token;
            return axios(error.config)
        }
    }

    refresh = false;
    return error
})