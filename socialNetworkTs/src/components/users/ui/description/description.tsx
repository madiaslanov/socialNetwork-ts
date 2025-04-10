import { UserData } from "../../model/usersTypes.ts";
import {NavLink} from "react-router-dom";
import style from "./description.module.css"

interface DescriptionProps {
    user: UserData;
    handleFollow: () => void;
    handleUnfollow: () => void;
    followingInProgress: number[];
}

const Description: React.FC<DescriptionProps> = ({ user, handleFollow, handleUnfollow, followingInProgress }) => {
    const isFollowingInProgress = followingInProgress.includes(Number(user.id));

    return (
        <div className={style.container}>
            <div className={style.leftSide}>
                <NavLink to={`/profile/${user.id}`}>
                    <img
                        className={style.smileImg}
                        src={user.photos.large || "https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg"}
                        alt="User"
                    />
                </NavLink>
                {user.followed ? (
                    <button className={style.unFollowBtn} onClick={handleUnfollow} disabled={isFollowingInProgress}>
                        Unfollow
                    </button>
                ) : (
                    <button className={style.followBtn} onClick={handleFollow} disabled={isFollowingInProgress}>
                        Follow
                    </button>
                )}
            </div>
            <div className={style.rightSide}>
                <div className={style.description}>
                    <h1>{user.name}</h1>
                    <p>{user.status}</p>
                </div>
            </div>
        </div>
    );
};

export default Description;