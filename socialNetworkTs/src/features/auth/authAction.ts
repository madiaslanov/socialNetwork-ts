import {CAPTCHA_MESSAGE, SET_AUTH_USER_DATA} from "./authTypes.ts";

export const setAuthUserData = (userId:number, email:string, login:string, isAuth:boolean, messages:Array<string>) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth, messages},
} as const);

export const captchaMessage = (url:string) => ({
    type: CAPTCHA_MESSAGE,
    payload: url
} as const);
