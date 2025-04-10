import axios from "axios";

export const instance = axios.create({
        withCredentials: true,
        headers: {
            "API-KEY": "115035e9-7031-4bfd-9b30-39b2a23ede3b"
        },
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
    }
)