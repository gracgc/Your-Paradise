import React from "react";
import c from './MyPosts.module.css'
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile_reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


const MapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
           dispatch(updatePostTextActionCreator(text))
        },
        addPost: () => {
           dispatch(addPostActionCreator())
        }

    }
};

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;