let ADD_POST = 'ADD_POST';
let UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
let SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, text: 'Bla bla', img: 'https://o2label.ru/data/muzcat/authors/auth_img_590b5c59c74e8.jpg'},
        {
            id: 2,
            text: 'Hi, Mark',
            img: 'https://o2label.ru/data/muzcat/authors/auth_img_590b5c59c74e8.jpg'
        }
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                text: state.newPostText,
                img: 'https://o2label.ru/data/muzcat/authors/auth_img_590b5c59c74e8.jpg'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});
export const setUserProfileActionCreator = (profile) => ({type: SET_USER_PROFILE, profile});


export default profileReducer;