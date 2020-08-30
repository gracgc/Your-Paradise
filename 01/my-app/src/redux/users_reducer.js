import {userAPI} from "../api/api";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_FRIENDS = 'users/SET_FRIENDS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT';
const TOOGLE_FETCH = 'users/TOOGLE_FETCH';
const TOOGLE_FOLLOWING = 'users/TOOGLE_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 10,
    totalPageCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    friends: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        case SET_FRIENDS:
            return {
                ...state,
                friends: action.friends.filter(f => (f.followed == true))
            };

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalPageCount: action.totalPageCount
            };

        case TOOGLE_FETCH:
            return {
                ...state,
                isFetching: action.isFetching
            };

        case TOOGLE_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id != action.userId)]
            };

        default:
            return state;
    }
};

export const accessFollow = (userId) => ({type: FOLLOW, userId});
export const accessUnfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setFriends = (friends) => ({type: SET_FRIENDS, friends});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalPageCount) => ({type: SET_TOTAL_COUNT, totalPageCount});
export const toogleFetch = (isFetching) => ({type: TOOGLE_FETCH, isFetching});
export const toogleFollowing = (isFetching, userId) => ({type: TOOGLE_FOLLOWING, isFetching, userId});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toogleFetch(true));
    dispatch(setCurrentPage(currentPage));
    let data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toogleFetch(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

export const getFriends = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    let data = await userAPI.getUsers(currentPage, pageSize=100);
    dispatch(setFriends(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFunc = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toogleFollowing(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toogleFollowing(false, userId));
    dispatch(getFriends());
};

export const follow = (userId) => (dispatch) => {
    followUnfollowFunc(dispatch, userId, userAPI.follow.bind(userAPI), accessFollow);
};

export const unfollow = (userId) => (dispatch) => {
    followUnfollowFunc(dispatch, userId, userAPI.unfollow.bind(userAPI), accessUnfollow);
};


export default usersReducer;
