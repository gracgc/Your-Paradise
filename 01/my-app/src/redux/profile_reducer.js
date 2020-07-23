import {profileAPI, userAPI} from "../api/api";

let ADD_POST = 'ADD_POST';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
let SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, text: 'Bla bla', img: 'https://o2label.ru/data/muzcat/authors/auth_img_590b5c59c74e8.jpg'},
        {
            id: 2,
            text: 'Hi, Mark',
            img: 'https://o2label.ru/data/muzcat/authors/auth_img_590b5c59c74e8.jpg'
        }
    ],
    profile: null,
    status: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                text: action.newPostText,
                img: 'https://o2label.ru/data/muzcat/authors/auth_img_590b5c59c74e8.jpg'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        })
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
};

export default profileReducer;
