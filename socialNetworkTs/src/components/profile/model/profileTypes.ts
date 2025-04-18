export type AboutMeType = {
    fullName: string | null,
    aboutMe: string | null,
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    contacts: {
        [key: string]: string;
    }
};
export type PhotosType = {
    large: string | null ,
    small: string | null
}

export interface NewPost  {
    message: string;
    id: number;
    count : number ;
}

export type ProfileStateType = {
    postsData: NewPost[];
    profileId: number | null;
    status: string | null;
    photos: PhotosType | null | File;
    aboutProfile: AboutMeType | null;
};


export interface ProfileFormFields {
    fullName: string;
    aboutProfile: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    contactsGithub: string;
}