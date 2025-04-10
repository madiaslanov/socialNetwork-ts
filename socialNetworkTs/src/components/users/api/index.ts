import {instance} from "../../../services/api";

export const getUsersApi = (currentPage:number, pageSize:number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`
    ).then(res => {
        return res.data
    });
}


export const followUserApi = (userId:number) => {
    return instance.post(`follow/${userId}`).then(res => res.data);
};

export const unfollowUserApi = (userId:number) => {
    return instance.delete(`follow/${userId}`).then(res => res.data);
};
