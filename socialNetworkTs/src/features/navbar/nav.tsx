import st from './nav.module.css';
import { NavLink } from 'react-router-dom';
import RecomendFriends from "./recomendFriends/recomendFriends";
import {UseAppSelector} from "../../services/reactHooks/reactHooks.ts";


const Nav = () => {
    const userState = UseAppSelector((user) => user.auth.userState);
    const isAuth = userState.isAuth;
    return (
        (isAuth) ? (
            <nav className={st.nav}>
                <NavLink to="/profile" className={({ isActive }:any) => isActive ? st.active : ''}>Profile</NavLink>
                <NavLink to="/users" className={({ isActive }:any) => isActive ? st.active : ''}>Friends</NavLink>
                <NavLink to="/dialogs" className={({ isActive }:any) => isActive ? st.active : ''}>Dialogs</NavLink>
                <NavLink to="/news/general" className={({ isActive }:any) => isActive ? st.active : ''}>News</NavLink>
                <NavLink to="/music" className={({ isActive }:any) => isActive ? st.active : ''}>Music</NavLink>
                <NavLink to="/settings" className={({ isActive }:any) => isActive ? st.active : ''}>Settings</NavLink>
                <div>
                    <RecomendFriends />
                </div>
            </nav>) : ''
    );
};

export default Nav;
