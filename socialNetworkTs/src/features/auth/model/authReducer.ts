import {AuthState, UserAuthState} from "./authTypes.ts";
import {getAuthUserApi, getSecurityApi, loginUserApi, logoutUserApi} from "../api";
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState: AuthState = {
    userState: {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    },
    messages: [],
    captcha: null
};

export const fetchAuthUser = createAsyncThunk<UserAuthState, undefined, { rejectValue: string[] }>(
    "auth/fetchAuthUser",
    async (_, {rejectWithValue}) => {
        try {
            const data = await getAuthUserApi();
            if (data.resultCode === 0) {
                return {
                    userId: data.data.id,
                    email: data.data.email,
                    login: data.data.login,
                    isAuth: true,
                };
            } else {
                return rejectWithValue(data.messages);
            }
        } catch (error:any) {
            return rejectWithValue([error.message]);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (
        {
            email,
            password,
            rememberMe,
            captcha,
        }: { email: string; password: string; rememberMe: boolean; captcha: string },
        {dispatch, rejectWithValue}
    ) => {
        try {
            const data = await loginUserApi(email, password, rememberMe, captcha);

            if (data.resultCode === 0) {
                dispatch(fetchAuthUser());
                return;
            } else {
                if (data.resultCode === 10) {
                    dispatch(fetchCaptcha());
                }
                return rejectWithValue(data.messages);
            }
        } catch (error) {
            return rejectWithValue("Ошибка авторизации");
        }
    }
)


export const logout = createAsyncThunk<UserAuthState, undefined, { rejectValue: string }>(
    "auth/logout",
    async (_, {rejectWithValue}) => {
        try {
            const response = await logoutUserApi();

            if (response.resultCode === 0) {
                return {
                    userId: null,
                    email: null,
                    login: null,
                    isAuth: false,
                };
            } else {
                return rejectWithValue("Ошибка при выходе");
            }
        } catch (error) {
            return rejectWithValue("Серверная ошибка при выходе");
        }
    }
);


export const fetchCaptcha = createAsyncThunk<string, undefined, { rejectValue: string }>(
    "auth/fetchCaptcha",
    async (_, {rejectWithValue}) => {
        try {
            const response = await getSecurityApi();
            return response.url;
        } catch (err: any) {
            console.error(err.message);
            return rejectWithValue("Ошибка при получении капчи");
        }
    }
);


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthUser.fulfilled, (state, action) => {
                state.userState = action.payload;
                state.messages = [];
            })
            .addCase(fetchAuthUser.rejected, (state, action) => {
                state.messages = action.payload as string[];
            })

            .addCase(login.rejected, (state, action) => {
                state.messages = action.payload as string[];
            })

            .addCase(logout.fulfilled, (state, action) => {
                state.userState = action.payload;
                state.messages = [];
                state.captcha = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.messages = [action.payload as string];
            })

            .addCase(fetchCaptcha.fulfilled, (state, action) => {
                state.captcha = action.payload;
            })
            .addCase(fetchCaptcha.rejected, (state, action) => {
                state.messages = [action.payload as string];
            });
    },
});


export default authSlice.reducer;