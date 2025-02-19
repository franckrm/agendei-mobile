import axios from "axios";

const api = axios.create({
    baseURL: "http://172.25.51.249:3001"
});

export default api;