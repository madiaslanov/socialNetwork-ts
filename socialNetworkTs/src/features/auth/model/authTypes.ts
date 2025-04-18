export interface UserAuthState {
    userId: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
}

export interface AuthState{
    userState: UserAuthState;
    messages: Array<string>;
    captcha: string | null;
}
export interface AuthUserApiResponse {
    resultCode: number;
    messages: string[];
    data: {
        id: number;
        email: string;
        login: string;
    };
}

export interface LoginResponse {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string
}

export interface LoginFormFields{
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string
}