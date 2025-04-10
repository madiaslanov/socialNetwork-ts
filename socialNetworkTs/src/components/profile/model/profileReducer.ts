import {
    ProfileStateType, AboutMeType
} from "./profileTypes.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getProfileStatusApi, putAboutMeApi, putPhotoApi, putProfileStatusApi} from "../api";

const initialState: ProfileStateType = {
    postsData: [],
    profileId: null,
    status: "",
    photos: null,
    aboutMe: null,
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


const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setStatus(state, action: PayloadAction<string>) {
            state.status = action.payload;
        },
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
                state.aboutMe = action.payload;
            });
    },
});

export const {setStatus} = profileSlice.actions;
export default profileSlice.reducer;


