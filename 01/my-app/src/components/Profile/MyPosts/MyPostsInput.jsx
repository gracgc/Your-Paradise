import React from "react";
import c from './MyPostsInput.module.css'
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {Field, reduxForm, reset} from "redux-form";



let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={c.textAreaPost} name="newPostText"
                       placeholder={"New post..."}
                       component={Textarea}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);


const MyPostsInput = (props) => {

    let onAddPost = (values, dispatch) => {
            props.addPost(values.newPostText);
            dispatch(reset("ProfileAddNewPostForm"));
    };

    return (
        <div className={c.myPosts}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
        </div>
    )
};

export default MyPostsInput;
