import request from "@/utils/request";
import type { LoginForm, LoginResponse, UserResponse } from "./type";
enum API{
    LOGIN_URL = "/user/login",
    USERINFO_URL = "/user/info"
}
export const reqLogin = (data: LoginForm) => request.post<any, LoginResponse>(API.LOGIN_URL, data);
export const reqUesrInfo = () => request.get<any, UserResponse>(API.USERINFO_URL);