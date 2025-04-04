export type AboutMeType = {
    fullName: string | null,
    aboutMe: string | null,
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    contacts: string | null
};
export type PhotosType = {
    large: string | null ,
    small: string | null
}

export type NewPost = {
    message: string,
    id: number,
    count : number;
}

export type ProfileStateType = {
    postsData: NewPost[];
    newTextValue: string;
    profileId: number | null;
    status: string | null;
    photos: PhotosType | null;
    aboutMe: AboutMeType | null;
};



export const ADD_POST = 'ADD_POST';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_STATUS = 'SET_STATUS';
export const DELETE_POST = 'DELETE_POST';
export const SAVE_PHOTO = 'SAVE_PHOTO';
export const ABOUT_ME = 'ABOUT_ME';


type AddPostAction = { type: typeof ADD_POST, message: string };
type SetUserProfileAction = {
    type: typeof SET_USER_PROFILE,
    profileId: number,
    photos: PhotosType,
    aboutMe: AboutMeType
};
type SetStatusAction = { type: typeof SET_STATUS, status: string };
type DeletePostAction = { type: typeof DELETE_POST, id: number };
type SavePhotoAction = { type: typeof SAVE_PHOTO, photos: PhotosType };
type AboutMeAction = { type: typeof ABOUT_ME, profileId: number, aboutMe: AboutMeType };


export type ProfileActionTypes =
    | AddPostAction
    | SetUserProfileAction
    | SetStatusAction
    | DeletePostAction
    | SavePhotoAction
    | AboutMeAction;
