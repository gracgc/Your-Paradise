import React from "react";
import c from './MyPostsInput.module.css'
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {Field, reduxForm, reset} from "redux-form";
import {required} from "../../../utils/validators";


let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={c.textAreaPost} name="newPostText"
                       placeholder={"New post..."}
                       component={Textarea}
                />
            </div>
            <button className={c.postButton}>Add post</button>
        </form>
    );
};

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);


const MyPostsInput = (props) => {

    let onAddPost = (values, dispatch) => {
        values.newPostText != null &&
        props.addPost(values.newPostText);
        dispatch(reset("ProfileAddNewPostForm"));
    };

    return (
        <div className={c.myPosts}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
        </div>
    )
};

export default MyPostsInput;
