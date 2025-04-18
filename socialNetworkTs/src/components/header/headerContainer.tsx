import Header from "./ui/header";
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAuthUser, logout } from "../../features/auth/model/authReducer.ts";
import { UseAppDispatch, UseAppSelector } from "../../services/reactHooks/reactHooks.ts";

const HeaderContainer = () => {
    const dispatch = UseAppDispatch();
    const navigate = useNavigate();
    const userData = UseAppSelector((state) => state.auth.userState);
    const isAuth = userData.isAuth;

    const logOutUser = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        if (!isAuth) {
            dispatch(fetchAuthUser()).unwrap().catch(() => {
                navigate("/login");
            });
        }
    }, [isAuth, dispatch, navigate]);



    return <Header userData={userData} logOutUser={logOutUser} isAuth={isAuth} />;
};

export default HeaderContainer;
