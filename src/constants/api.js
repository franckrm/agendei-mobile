import axios from "axios";

const api = axios.create({
    baseURL: "http://172.30.170.77:3001"
});

export default api;