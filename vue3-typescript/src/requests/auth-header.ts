import axios from "axios";

// Get Item from LocalStorage
const highScore = localStorage.getItem('user') || '';

export default function authHeader(): void {
    const user = JSON.parse(highScore);
    if (user && user.token) {
        axios.defaults.headers.common['Authorization'] = user.token;
    }
}
