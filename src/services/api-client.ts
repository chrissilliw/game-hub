import axios from "axios";

export default axios.create({
    // baseURL: '/api',
    baseURL: '/api',
    params: {
        key: import.meta.env.VITE_RAW_SECRET_KEY
    }
});