import {AuthActionTypes, AuthState, CAPTCHA_MESSAGE, SET_AUTH_USER_DATA} from "./authTypes.ts";

const initialState: AuthState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    messages: [],
    captcha: null
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case CAPTCHA_MESSAGE:
            return {
                ...state,
                captcha: action.payload,
            }
        default:
            return state;
    }
};

export default authReducer;