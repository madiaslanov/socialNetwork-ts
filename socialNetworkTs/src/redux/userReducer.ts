type UserDataType = {
    id: number;
    followed: boolean;
    userId: number;
};

type ActionType =
    | { type: "FOLLOW_USER", userId: number }
    | { type: "UNFOLLOW_USER", userId: number }
    | { type: "SET_USER", usersData: Array<UserDataType> }
    | { type: "SET_CURRENT_PAGE", currentPage: number }
    | { type: "SET_TOTAL_COUNT", totalCount: number }
    | { type: "IS_FETCHING", isFetching: boolean }
    | { type: "FOLLOWING_IN_PROGRESS", userId: number, isFollowing: boolean };

const initialState = {
    usersData: [] as Array<UserDataType>,
    pageSize: null as number | null,
    totalCount: null as number | null,
    currentPage: null as number | null,
    isFetching: null as boolean | null,
    followingInProgress: [] as Array<number>,
};

type InitialStateType = typeof initialState;

const UsersReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW_USER":
            return {
                ...state,
                usersData: state.usersData.map(user =>
                    user.id === action.userId ? {...user, followed: true} : user
                ),
            };
        case "UNFOLLOW_USER":
            return {
                ...state,
                usersData: state.usersData.map(user =>
                    user.id === action.userId ? {...user, followed: false} : user
                ),
            };
        case "SET_USER":
            return {
                ...state,
                usersData: action.usersData,
            };
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case "SET_TOTAL_COUNT":
            return {
                ...state,
                totalCount: action.totalCount,
            };
        case "IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case "FOLLOWING_IN_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export default UsersReducer;
