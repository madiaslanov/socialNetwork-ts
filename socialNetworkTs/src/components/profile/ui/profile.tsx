import ProfileInfo from "./profileInfo/profileInfo";
import style from "./profile.module.css"
import MyPosts from "./myPost/myPosts.tsx";
import {AboutMeType, PhotosType} from "../model/profileTypes.ts";

interface ProfileProps {
    profileData: AboutMeType | null;
    profileStatus: string | null;
    profilePhoto: PhotosType | null | File;
    isOwner: boolean;
    savePhoto: (file: File) => void;
}

const Profile: React.FC<ProfileProps> = ({profileData, profileStatus, profilePhoto, isOwner, savePhoto}) => {
    return (
        <div className={style.main}>
            <ProfileInfo isOwner={isOwner} profileStatus={profileStatus} profilePhoto={profilePhoto}
                         profileData={profileData} savePhoto={savePhoto}/>
            <MyPosts/>
        </div>
    );
};

export default Profile;
