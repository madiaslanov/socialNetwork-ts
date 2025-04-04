import {
    ABOUT_ME,
    ADD_POST, DELETE_POST, SAVE_PHOTO, SET_STATUS, SET_USER_PROFILE
} from "./profileTypes.ts";

export const addPost = (message: string) => ({
    type: ADD_POST,
    message,
} as const);

export const setUserProfile = (profileId: number) => ({
    type: SET_USER_PROFILE,
    profileId
} as const)

export const setStatus = (status: string) => ({
    type: SET_STATUS,
    status
} as const)

export const deletePost = (id: number) => ({
    type: DELETE_POST,
    id: Number(id)
} as const)

export const savePhoto = (photos: string) => ({
    type: SAVE_PHOTO,
    photos,
} as const)


export const aboutMe = (fullName: string, lookingForAJob: boolean, lookingForAJobDescription: string, contacts: string) => ({
    type: ABOUT_ME,
    payload: {
        fullName,
        lookingForAJob,
        lookingForAJobDescription,
        contacts
    }
} as const)