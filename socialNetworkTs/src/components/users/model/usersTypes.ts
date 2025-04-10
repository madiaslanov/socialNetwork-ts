export interface UserData {
    id: number | null;
    followed: boolean;
    name: string | null;
    status: string | null;
    photos: {
        small: string | null;
        large: string | null;
    };
};

export interface UsersState  {
    usersData: UserData[];
    pageSize: number;
    totalCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[];
};
