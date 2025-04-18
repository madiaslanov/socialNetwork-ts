import {instance} from "../../../services/api";
import {AuthUserApiResponse} from "../model/authTypes.ts";

export const loginUserApi = (email:string, password:string, rememberMe:boolean, captcha:string) => {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data);
};

export const logoutUserApi = async () => {
    const response = await instance.delete(`auth/login`);
    return response.data;
};

export const getSecurityApi = async () => {
    return instance.get('security/get-captcha-url').then(res => res.data);
}

export const getAuthUserApi = async (): Promise<AuthUserApiResponse> => {
    try {
        const response = await instance.get<AuthUserApiResponse>('auth/me');
        return response.data;
    } catch (error: any) {
        console.error("getAuthUserApi error:", error);
        throw error;
    }
};
