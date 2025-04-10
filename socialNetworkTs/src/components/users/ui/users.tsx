import style from "./users.module.css";
import Description from "./description/description";
import {handleFollowClick, handleUnfollowClick, setCurrentPage} from "../model/usersReducer.ts";
import {UserData} from "../model/usersTypes.ts";
import {UseAppDispatch} from "../../../services/reactHooks/reactHooks.ts";


export interface UsersProps {
    totalUsersCount: number ;
    pageSize: number ;
    currentPage: number ;
    followingInProgress: number[];
    usersList: UserData[];
}

const Users: React.FC<UsersProps> = ({ totalUsersCount, pageSize, currentPage, followingInProgress ,usersList}) => {
    const dispatch = UseAppDispatch();
    const usersCount = Math.ceil(totalUsersCount / pageSize);
    const handlePageChange = (pageNum:number) => {
        dispatch(setCurrentPage(pageNum));
    };

    return (
        <div className={style.container}>
            <div className={style.pagination}>
                {Array.from({ length: usersCount }, (_, i) => i + 1).map((p) =>
                    (p === 1 || p === usersCount || (p >= currentPage - 2 && p <= currentPage + 2)) ? (
                        <span
                            key={p}
                            className={currentPage === p ? style.selectedPage : ""}
                            onClick={() => handlePageChange(p)}
                        >
                            {p}{" "}
                        </span>
                    ) : (p === currentPage - 3 || p === currentPage + 3) ? (
                        <span key={p}>... </span>
                    ) : null
                )}
            </div>
            {usersList.map((user: UserData) => (
                <Description
                    key={user.id}
                    user={user}
                    handleFollow={() => dispatch(handleFollowClick(Number(user.id)))}
                    handleUnfollow={() => dispatch(handleUnfollowClick(Number(user.id)))}
                    followingInProgress={followingInProgress}
                />
            ))}
        </div>
    );
};

export default Users;
