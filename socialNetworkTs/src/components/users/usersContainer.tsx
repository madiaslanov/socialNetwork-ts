import { useEffect } from "react";
import {UseAppDispatch, UseAppSelector} from "../../services/reactHooks/reactHooks.ts";
import Preloader from "../../features/preloader/preloader.tsx";
import {fetchUsers} from "./model/usersReducer.ts";
import Users from "./ui/users.tsx";



const UsersApi = () => {
    const dispatch = UseAppDispatch();
    const totalUsersCount = UseAppSelector(state => state.usersPages.totalCount);
    const currentPage = UseAppSelector(state => state.usersPages.currentPage);
    const pageSize = UseAppSelector(state => state.usersPages.pageSize);
    const followingInProgress = UseAppSelector(state => state.usersPages.followingInProgress);
    const isFetchingState = UseAppSelector(state => state.usersPages.isFetching);
    const usersList = UseAppSelector((state) => state.usersPages.usersData);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [currentPage, pageSize, dispatch]);



    return isFetchingState ? (
        <Preloader />
    ) : (
        <Users
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            followingInProgress={followingInProgress}
            usersList={usersList}
        />
    );
};

export default UsersApi;
