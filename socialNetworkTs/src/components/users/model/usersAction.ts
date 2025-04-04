import {
    FOLLOW_USER,
    UNFOLLOW_USER,
    SET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT,
    IS_FETCHING,
    FOLLOWING_IN_PROGRESS,
    UserDataType
} from "./usersTypes";

export const followUser = (userId: number) => ({
    type: FOLLOW_USER,
    userId,
} as const);

export const unfollowUser = (userId: number) => ({
    type: UNFOLLOW_USER,
    userId,
} as const);

export const setUsers = (items: UserDataType[]) => ({
    type: SET_USERS,
    items,
} as const);

export const setCurrentPage = (page: number) => ({
    type: SET_CURRENT_PAGE,
    page,
} as const);

export const setTotalCount = (totalCount: number) => ({
    type: SET_TOTAL_COUNT,
    totalCount,
} as const);

export const isFetching = (status: boolean) => ({
    type: IS_FETCHING,
    status,
} as const);

export const followingInProgress = (followingInProgress: boolean, userId: number) => ({
    type: FOLLOWING_IN_PROGRESS,
    followingInProgress,
    userId,
} as const);
