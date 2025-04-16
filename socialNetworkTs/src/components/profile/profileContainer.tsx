
import {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {UseParamType} from "../music/model/musicTypes.ts";
import {UseAppDispatch, UseAppSelector} from "../../services/reactHooks/reactHooks.ts";
import Profile from "./ui/profile.tsx";
import {getProfile, getProfileStatus, updateProfilePhoto} from "./model/profileReducer.ts";

const ProfileContainer = () => {
    const dispatch = UseAppDispatch();
    const {userID} = useParams<UseParamType>();
    const navigate = useNavigate();
    const isAuthState = UseAppSelector((state) => state.auth.userState.isAuth);
    const myId = UseAppSelector((state) => state.auth.userState.userId);

    useEffect(() => {
        if (!isAuthState) {
            navigate(`/login`, {replace: true});
            return;
        }

        const profileId = userID || myId;

        if (!profileId) {
            console.error("Нет userID и myId для загрузки профиля!");
            return;
        }

        if (!userID && profileId !== myId) {
            navigate(`/profile/${profileId}`, {replace: true});
            return;
        }

        if (profileId != null) {
            dispatch(getProfileStatus(Number(profileId)));
            dispatch(getProfile(Number(profileId)));
        }
    }, [userID, myId, dispatch, navigate, isAuthState]);


    const savePhoto = (file: File) => {
        if (file) {
            dispatch(updateProfilePhoto(file));
        }
    };

    const isOwner = !userID || myId?.toString() === userID.toString();
    const profileData = UseAppSelector((state) => state.profilePages.profileId);
    const profileStatus = UseAppSelector((state) => state.profilePages.status);
    const profilePhoto = UseAppSelector((state) => state.profilePages.photos);


    return <Profile isOwner={isOwner} profileData={profileData} profileStatus={profileStatus}
                    profilePhoto={profilePhoto} savePhoto={savePhoto}/>;
};

export default ProfileContainer;
