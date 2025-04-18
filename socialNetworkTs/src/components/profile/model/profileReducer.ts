import {
    ProfileStateType, AboutMeType, NewPost, PhotosType
} from "./profileTypes.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getProfileApi, getProfileStatusApi, putAboutMeApi, putPhotoApi, putProfileStatusApi} from "../api";

const initialState: ProfileStateType = {
    postsData: [],
    profileId: null,
    status: "",
    photos: null,
    aboutProfile: null,
};

export const getProfileStatus = createAsyncThunk<
    string,
    number,
    { rejectValue: string }
>(
    "profile/getStatus",
    async (userId, {rejectWithValue}) => {
        try {
            const response = await getProfileStatusApi(userId);
            return response;
        } catch (err: any) {
            return rejectWithValue("Error");
        }
    }
)

export const putProfileStatus = createAsyncThunk<string, string, { rejectValue: string }>(
    "profile/putProfileStatus",
    async (status, {rejectWithValue}) => {
        try {
            const response = await putProfileStatusApi(status);
            if (response.resultCode === 0) return status
            return rejectWithValue('Failed')
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
)

export const updateProfilePhoto = createAsyncThunk<File, File, { rejectValue: string }>(
    "profile/updateProfilePhoto",
    async (photo, {rejectWithValue}) => {
        try {
            const response = await putPhotoApi(photo)
            if (response.resultCode === 0) return photo
            return rejectWithValue("Failed")
        } catch (err: any) {
            return rejectWithValue(err.message)
        }
    }
)

export const profileAboutMe = createAsyncThunk<AboutMeType, AboutMeType, {rejectValue: string}>(
    "profile/profileAboutMe",
    async (aboutMe, {rejectWithValue}) => {
        try {
            const response = await putAboutMeApi(aboutMe)
            if (response.resultCode === 0) return aboutMe
            return rejectWithValue("Failed")
        } catch (err: any) {
            return rejectWithValue(err.message)
        }
    }
)

export const getProfile = createAsyncThunk<{
    profileId: number,
    aboutProfile: AboutMeType,
    photos: PhotosType,
}, number, { rejectValue: string }>(
    "profile/getProfile",
    async (userId, { rejectWithValue }) => {
        try {
            const response = await getProfileApi(userId);
            return {
                profileId: userId,
                aboutProfile: response,
                photos: response.photos,
            };
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);



const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setStatus(state, action: PayloadAction<string>) {
            state.status = action.payload;
        },
        addPost(state, action: PayloadAction<NewPost>) {
            state.postsData.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfileStatus.fulfilled, (state, action) => {
                state.status = action.payload;
            })
            .addCase(putProfileStatus.fulfilled, (state, action) => {
                state.status = action.payload;
            })
            .addCase(updateProfilePhoto.fulfilled, (state, action) => {
                state.photos = action.payload;
            })
            .addCase(profileAboutMe.fulfilled, (state, action) => {
                state.aboutProfile = action.payload;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.profileId = action.payload.profileId;
                state.aboutProfile = action.payload.aboutProfile;
                state.photos = action.payload.photos;
            });

        ;
    },
});

export const {setStatus, addPost} = profileSlice.actions;
export default profileSlice.reducer;


