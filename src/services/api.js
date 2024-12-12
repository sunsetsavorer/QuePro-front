import axios from "axios";

const ApiClient = axios.create({
    baseURL: 'http://192.168.198.220:47545/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default ApiClient;