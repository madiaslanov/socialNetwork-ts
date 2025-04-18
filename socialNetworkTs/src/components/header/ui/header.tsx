import { NavLink } from "react-router-dom";
import st from "../style/header.module.css";
import { UserAuthState } from "../../../features/auth/model/authTypes.ts";

interface HeaderProps {
    userData: UserAuthState;
    logOutUser?: () => void;
    isAuth: boolean;
}

const Header: React.FC<HeaderProps> = ({ userData, logOutUser, isAuth }) => {
    return (
        <header className={st.header}>
            <span className={st.title}>Social Network</span>
            <div className={st.loginBlock}>
                {isAuth ? (
                    <div>
                        <span className={st.span}>{userData.login}</span>
                        <button onClick={logOutUser}>Log Out</button>
                    </div>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
