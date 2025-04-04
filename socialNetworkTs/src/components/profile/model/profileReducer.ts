import {
    ADD_POST,
    SET_USER_PROFILE,
    SET_STATUS,
    DELETE_POST,
    SAVE_PHOTO,
    ABOUT_ME,
    ProfileStateType,
    ProfileActionTypes
} from "./profileTypes.ts";

const initialState: ProfileStateType = {
    postsData: [],
    newTextValue: "",
    profileId: null,
    status: null,
    photos: null,
    aboutMe: null,
};

const profileReducer = (state = initialState, action: ProfileActionTypes): ProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: Date.now(),
                    message: action.message,
                    count: 0
                }],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profileId: action.profileId,
                photos: action.photos ?? state.photos,
                aboutMe: action.aboutMe ?? state.aboutMe,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.id),
            };
        case SAVE_PHOTO:
            return {
                ...state,
                photos: action.photos,
            };
        case ABOUT_ME:
            return {
                ...state,
                aboutMe: action.aboutMe,
            };
        default:
            return state;
    }
};

export default profileReducer;
