type AboutMeType = {
    fullName: string | null,
    aboutMe: string | null,
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    contacts: string | null
};
type photosType = {
    large : string | null | undefined,
    small : string | null | undefined,
}

const initialState = {
    postsData: [] as Array<{ message: string, id: number, count: number }>,
    newTextValue: '' as string,
    profile: null as number | null,
    status: null as string | null,
    photos: null as photosType | null,
    aboutMe: null as AboutMeType | null,
};

type ActionType =
    | { type: 'ADD_POST', message: string }
    | { type: 'SET_USER_PROFILE', profile: any }
    | { type: 'SET_STATUS', status: string }
    | { type: 'DELETE_POST', id: number }
    | { type: 'SAVE_PHOTO', photos: photosType }
    | { type: 'ABOUT_ME', payload: AboutMeType };

const ProfileReducer = (state = initialState, action: ActionType): typeof initialState => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                message: action.message,
                id: Date.now(),
                count: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile,
                photos: action.profile?.photos || state.photos,
                aboutMe: action.profile?.aboutMe || state.aboutMe
            };
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            };
        case 'DELETE_POST':
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.id)
            };
        case 'SAVE_PHOTO':
            return {
                ...state,
                photos: {
                    ...state.photos,
                    large: action.photos?.large || state.photos?.large,
                    small: action.photos?.small || state.photos?.small,
                }
            };
        case 'ABOUT_ME':
            return {
                ...state,
                aboutMe: {
                    ...state.aboutMe,
                    ...action.payload
                }
            };

        default:
            return state;
    }
};

export default ProfileReducer;
