export type UserDataType = {
    id: number;
    followed: boolean;
    userId: number;
};

export type UsersStateType = {
    usersData: UserDataType[];
    pageSize: number | null;
    totalCount: number | null;
    currentPage: number | null;
    isFetching: boolean;
    followingInProgress: number[];
};

export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
export const IS_FETCHING = 'IS_FETCHING';
export const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

type FollowUserAction = { type: typeof FOLLOW_USER; userId: number };
type UnfollowUserAction = { type: typeof UNFOLLOW_USER; userId: number };
type SetUsersAction = { type: typeof SET_USERS; items: UserDataType[] };
type SetCurrentPageAction = { type: typeof SET_CURRENT_PAGE; page: number };
type SetTotalCountAction = { type: typeof SET_TOTAL_COUNT; totalCount: number };
type IsFetchingAction = { type: typeof IS_FETCHING; status: boolean };
type FollowingInProgressAction = { type: typeof FOLLOWING_IN_PROGRESS; followingInProgress: boolean; userId: number };

export type UsersActionTypes =
    | FollowUserAction
    | UnfollowUserAction
    | SetUsersAction
    | SetCurrentPageAction
    | SetTotalCountAction
    | IsFetchingAction
    | FollowingInProgressAction;
