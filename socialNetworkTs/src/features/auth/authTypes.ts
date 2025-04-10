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
