import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {
    getUsersApi,
    followUserApi,
    unfollowUserApi
} from '../api';
import {UserData, UsersState} from './usersTypes';

const initialState: UsersState = {
    usersData: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

export const fetchUsers = createAsyncThunk<{ items: UserData[]; totalCount: number },
    undefined,
    { rejectValue: string }>(
    'users/fetchUsers',
    async (_, {getState, rejectWithValue}) => {
        const state: any = getState();
        const { currentPage, pageSize } = state.usersPages;
        try {
            const response = await getUsersApi(currentPage, pageSize);
            return response;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);


export const follow = createAsyncThunk<number, number, { rejectValue: string }>(
    'users/follow',
    async (userId, {rejectWithValue}) => {
        try {
            const response = await followUserApi(userId);
            if (response.resultCode === 0) return userId;
            return rejectWithValue('Follow failed');
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);

export const unfollow = createAsyncThunk<number, number, { rejectValue: string }>(
    'users/unfollow',
    async (userId, {rejectWithValue}) => {
        try {
            const response = await unfollowUserApi(userId);
            if (response.resultCode === 0) return userId;
            return rejectWithValue('Unfollow failed');
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);

export const handleFollowClick = createAsyncThunk<number, number, { rejectValue: string }>(
    'users/handleFollowClick',
    async (userId, {rejectWithValue}) => {
        try {
            const data = await followUserApi(userId);
            return data
        }
        catch (err:any){
            return rejectWithValue(err.message)
        }
    }
)

export const handleUnfollowClick = createAsyncThunk<number, number, { rejectValue: string }>(
    'users/handleUnFollowClick',
    async (userId, {rejectWithValue}) => {
        try {
            const data = await unfollowUserApi(userId);
            return data
        }
        catch (err:any){
            return rejectWithValue(err.message)
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setFollowingInProgress(state, action: PayloadAction<{ userId: number; isFetching: boolean }>) {
            const {userId, isFetching} = action.payload;
            if (isFetching) {
                state.followingInProgress.push(userId);
            } else {
                state.followingInProgress = state.followingInProgress.filter(id => id !== userId);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isFetching = false;
                state.usersData = action.payload.items;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.isFetching = false;
            })

            .addCase(follow.fulfilled, (state, action) => {
                state.usersData = state.usersData.map(user =>
                    user.id === action.payload ? {...user, followed: true} : user
                );
            })

            .addCase(unfollow.fulfilled, (state, action) => {
                state.usersData = state.usersData.map(user =>
                    user.id === action.payload ? {...user, followed: false} : user
                );
            });
    },
});

export const {setCurrentPage, setFollowingInProgress} = usersSlice.actions;
export default usersSlice.reducer;
