import {
    FOLLOW_USER,
    UNFOLLOW_USER,
    SET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT,
    IS_FETCHING,
    FOLLOWING_IN_PROGRESS,
    UsersStateType,
    UsersActionTypes
} from "./usersTypes";

const initialState: UsersStateType = {
    usersData: [],
    pageSize: null,
    totalCount: null,
    currentPage: null,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action: UsersActionTypes): UsersStateType => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                usersData: state.usersData.map(user =>
                    user.id === action.userId ? { ...user, followed: true } : user
                ),
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                usersData: state.usersData.map(user =>
                    user.id === action.userId ? { ...user, followed: false } : user
                ),
            };
        case SET_USERS:
            return {
                ...state,
                usersData: action.items,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount,
            };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.status,
            };
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId),
            };
        default:
            return state;
    }
};

export default usersReducer;
