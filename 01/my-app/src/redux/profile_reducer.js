import {profileAPI} from "../api/api";

let ADD_POST = 'profile/ADD_POST';
let SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
let SET_STATUS = 'profile/SET_STATUS';
let SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const TOOGLE_FETCH = 'profile/TOOGLE_FETCH';
const TOOGLE_FETCH_PROFILE = 'profile/TOOGLE_FETCH_PROFILE';

let initialState = {
    posts: [
        {
            id: 1,
            text: 'Bla bla'
        },
        {
            id: 2,
            text: 'Hi, Mark'
        }
    ],
    profile: null,
    status: null,
    isFetching: false,
    isFetchingProfile: false,
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                text: action.newPostText,
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
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

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profile: {...state.profile, photos: action.photoFile}
            };
        case TOOGLE_FETCH:
            return {
                ...state,
                isFetching: action.isFetching
            };

        case TOOGLE_FETCH_PROFILE:
            return {
                ...state,
                isFetchingProfile: action.isFetchingProfile
            };

        default:
            return state;
    }
};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photoFile) => ({type: SAVE_PHOTO_SUCCESS, photoFile});
export const toogleFetch = (isFetching) => ({type: TOOGLE_FETCH, isFetching});
export const toogleFetchProfile = (isFetchingProfile) => ({type: TOOGLE_FETCH_PROFILE, isFetchingProfile});


export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(toogleFetchProfile(true));
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
    dispatch(toogleFetchProfile(false));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (photoFile) => async (dispatch) => {
    dispatch(toogleFetch(true));
    let response = await profileAPI.savePhoto(photoFile);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
    dispatch(toogleFetch(false));
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
}

export default profileReducer;
