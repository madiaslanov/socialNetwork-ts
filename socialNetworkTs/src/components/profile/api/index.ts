import {instance} from "../../../services/api";
import {AboutMeType} from "../model/profileTypes.ts";

export const getProfileApi = (userId: number) => {
    return instance.get(`profile/${userId}`).then(res => {
        return res.data
    })
}

export const getProfileStatusApi = (userId: number) => {
    return instance.get(`profile/status/${userId}`).then(res => {
        return res.data
    })
}


export const putProfileStatusApi = (status:string) => {
    return instance.put(`profile/status`, {status}).then(res => res.data);
};

export const putPhotoApi = (photo: File) => {
    const formData = new FormData();
    formData.append("image", photo);

    return instance.put(`/profile/photo`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(res => res.data);
};

export const putAboutMeApi = (me: AboutMeType) => {
    return instance.put(`/profile`, me).then(res => res.data);
}
