import {instance} from "../../../services/api";

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

export const getAuthUserApi = () => {
    return instance.get(`auth/me`).then(res => {
        return res.data
    })
}
