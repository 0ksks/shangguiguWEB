interface LoginData{
    token:string
}

interface UserData{
    User: {
        userID: string,
        avatar: string,
        username: string,
        password: string,
        desc: string,
        roles: string[],
        buttons: string[],
        routes: string[],
        token: string
    }
}

export interface LoginForm{
    username: string,
    password: string
}

export interface LoginResponse{
    code: number,
    data: LoginData
}

export interface UserResponse{
    code: number,
    data: UserData
}