import {useRef, useState} from "react";
import st from './profileInfo.module.css';
import ProfileData from "./profileData/profileData.js";
import ProfileForm from "./profileForm/profileForm.js";
import ProfileStatus from "./profileStatus";
import Preloader from "../../../../features/preloader/preloader.tsx";
import {AboutMeType, PhotosType} from "../../model/profileTypes.ts";


interface ProfileInfoProps {
    profileData: AboutMeType | null;
    profileStatus: string | null;
    profilePhoto: PhotosType | null | File;
    isOwner: boolean;
    savePhoto: (file: File) => void;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
                                                     profileData,
                                                     profileStatus,
                                                     profilePhoto,
                                                     isOwner,
                                                     savePhoto
                                                 }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const formRef  = useRef<HTMLFormElement | null>(null);
    const [editMode, setEditMode] = useState(false);

    if (!profileData) return <Preloader/>;

    const onPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };


    const handlePhotoClick = () => {
        if (isOwner) fileInputRef.current?.click();
    };

    const onDataChange = () => {
        if (editMode) {
            formRef.current?.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}));
        } else {
            setEditMode(true);
        }
    };

    const onSubmitSuccess = () => {
        setEditMode(false);
    };

    return (
        <div className={st.main}>
            <div className={st.description}>
                <div className={st.imageHolder} onClick={handlePhotoClick}>
                    <img
                        className={st.image}
                        src={(profilePhoto && "large" in profilePhoto && profilePhoto.large) || "https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg"}
                        alt="Profile"
                    />
                    {isOwner && (
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={onPhotoChange}
                            style={{display: "none"}}
                        />
                    )}
                </div>
                <div className={st.rightSide}>
                    <div className={st.spanHolder}>
                        <span>
                            <ProfileStatus isOwner={isOwner} profileData={profileData} profileStatus={profileStatus}/>
                        </span>
                    </div>
                    <div className={st.aboutMe}>
                        {editMode ? (
                            <ProfileForm profileData={profileData} formRef={formRef} onSubmitSuccess={onSubmitSuccess}/>
                        ) : (
                            <ProfileData  profileData={profileData}/>
                        )}
                        {isOwner && (
                            <button onClick={onDataChange} className={st.editBtn}>
                                {editMode ? "Save info" : "Edit info"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
