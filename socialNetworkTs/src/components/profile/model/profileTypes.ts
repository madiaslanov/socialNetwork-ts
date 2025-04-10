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
    profileId: number | null;
    status: string | null;
    photos: PhotosType | null | File;
    aboutMe: AboutMeType | null;
};
