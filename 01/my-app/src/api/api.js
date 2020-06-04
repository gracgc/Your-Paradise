import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '17beab04-bea0-4800-9197-9649a0ce98d3'
    }
});

const instance2 = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '17beab04-bea0-4800-9197-9649a0ce98d3'
    }
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data
            })
    }
};

<<<<<<< Updated upstream
=======
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(responce => {
                return responce.data
            })
    }
};

export const followAPI = {
    isFollow(userId) {
        return instance2.post(`follow/${userId}`)
    }
};

export const unfollowAPI = {
    isFollow(userId) {
        return instance2.delete(`follow/${userId}`)
    }
};

>>>>>>> Stashed changes

