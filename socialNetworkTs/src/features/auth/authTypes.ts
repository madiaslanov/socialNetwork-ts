export interface AuthState {
    userId: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
    messages: Array<string>;
    captcha: string | null;
}


export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
export const CAPTCHA_MESSAGE = 'CAPTCHA_MESSAGE';


type SetAuthUser_DataAction = {
    type: typeof SET_AUTH_USER_DATA;
    payload: { userId: number, email: string, login: string, isAuth: boolean, messages: Array<string> };
};
type CaptchaMessageAction = { type: typeof CAPTCHA_MESSAGE; payload: string };


export type AuthActionTypes =
    | SetAuthUser_DataAction
    | CaptchaMessageAction



