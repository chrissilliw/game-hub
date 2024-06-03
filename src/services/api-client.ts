import axios from "axios";

export default axios.create({
    baseURL: 'http://api.rawg.io/api',
    params: {
        key: import.meta.env.VITE_RAW_SECRET_KEY
        // key: 'dc81bf53f0f44f8d93c9f29c2102536a'
    }
});