import {useCallback, useEffect} from "react";
import {useForm} from "react-hook-form";
import style from "./login.module.css";
import {useNavigate} from "react-router-dom";
import {UseAppDispatch, UseAppSelector} from "../../../services/reactHooks/reactHooks.ts";
import {login} from "../model/authReducer.ts";
import { LoginFormFields} from "../model/authTypes.ts";

export interface LoginFormProps {
    captcha: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({captcha}) => {
    const dispatch = UseAppDispatch();
    const formData = UseAppSelector((state) => state.auth.userState)
    const auth = UseAppSelector((state) => state.auth.userState.isAuth)
    const messages = UseAppSelector((state) => state.auth.messages);

    const {register, handleSubmit, formState: {errors}} =
        useForm<LoginFormFields>(
            {
                mode: "onChange",
                defaultValues: {
                    email: formData.email || "",
                    password: "",
                    rememberMe: false,
                    captcha: "",
                }
            });

    const onSubmit = (values: LoginFormFields) => {
        dispatch(login(values));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <div>
                <input
                    className={style.input}
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[\w-\.]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/i,
                            message: "Invalid email format",
                        },
                    })}
                />

                {errors.email && <p className={style.error}>{errors.email.message}</p>}
            </div>

            <div>
                <input
                    className={style.input}
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {value: 4, message: "Password must be at least 4 characters"}
                    })}
                />
                {errors.password ? (
                    <p className={style.error}>{errors.password.message}</p>
                ) : auth && (
                    <p className={style.error}>{messages[0]}</p>
                )}
            </div>

            <div>
                <label className={style.remember}>
                    <input type="checkbox" {...register("rememberMe")} /> Remember me!
                </label>
            </div>

            <div>
                <button type="submit" className={style.button}>Login</button>
            </div>
            {captcha && <img src={captcha}/>}
            {captcha &&
                <label>
                    <input type="text" {...register("captcha",{
                        required: "Captcha is required",
                    }) }
                    />
                </label>
            }
        </form>
    );
};

const Login = () => {
    const isAuthState = UseAppSelector((state) => state.auth.userState.isAuth);
    const captcha = UseAppSelector((state) => state.auth.captcha);
    const navigate = useNavigate();
    const redirectToProfile = useCallback(() => {
        if (isAuthState) {
            return navigate("/profile");
        }
    }, [navigate, isAuthState]);

    useEffect(() => {
        redirectToProfile();
    }, [redirectToProfile]);

    return (
        <div>
            <h1 className={style.title}>Login</h1>
            <LoginForm captcha={captcha}/>
            <div className={style.freeAccount}>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>
        </div>
    );
};

export default Login;
