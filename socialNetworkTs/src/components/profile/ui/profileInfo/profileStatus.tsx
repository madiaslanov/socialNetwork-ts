import {useState, useEffect} from "react";
import styles from "./profileInfo.module.css";
import {putProfileStatus} from "../../model/profileReducer.ts";
import {UseAppDispatch} from "../../../../services/reactHooks/reactHooks.ts";
import {AboutMeType} from "../../model/profileTypes.ts";

interface ProfileStatusProps {
    profileStatus: string | null;
    isOwner: boolean | null;
    profileData: AboutMeType | null;
}


const ProfileStatus: React.FC<ProfileStatusProps> = ({profileStatus, isOwner}) => {
    const dispatch = UseAppDispatch();
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(profileStatus || "No status");

    useEffect(() => {
        if (profileStatus !== status) {
            setStatus(profileStatus || "No status");
        }
    }, [profileStatus]);

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    const handleBlur = () => {
        setEditMode(false);
        if (status.trim() !== profileStatus) {
            dispatch(putProfileStatus(status.trim()));
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleBlur();
        }
    };

    return (
        <>
            <div className={styles.statusSpan}>
                <span onDoubleClick={() => setEditMode(true)}>Status:</span>
                {isOwner ? (
                    !editMode ? (
                        <div>
            <span onDoubleClick={() => setEditMode(true)}>
                {status || "No status"}
            </span>
                        </div>
                    ) : (
                        <div>
                            <input
                                onBlur={handleBlur}
                                autoFocus
                                value={status}
                                onChange={onStatusChange}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                    )
                ) : (
                    <div>{status || "No status"}</div>
                )}
            </div>
        </>
    )
};


export default ProfileStatus;
