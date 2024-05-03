import axios from "axios"
import { ElMessage } from "element-plus";

let request = axios.create({
    baseURL: '/api',
    timeout: 5000,
});

request.interceptors.request.use((config) => {
    return config;
});

request.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        let msg = "";
        let status = error.response.status;
        switch (status) {
            case 401:
                msg = "token expired";
                break;
            case 403:
                msg = "unauthorized";
                break;
            case 404:
                msg = "page not found";
                break;
            case 500:
                msg = "server broke";
                break;
            default:
                msg = "network error";
                break;
        }
        ElMessage({
            type: 'error',
            message: msg
        })
        return Promise.reject(error);
    }
);

export default request;