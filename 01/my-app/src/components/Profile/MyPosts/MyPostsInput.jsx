import React from "react";
import c from './MyPostsInput.module.css'


const MyPostsInput = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        if (props.newPostText == '') {
            return
        } else {
            props.addPost();
        }

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text);

    };


    return (
        <div className={c.myPosts}>
            <h3>My posts</h3>
            <div className={c.newPost}>
                <textarea className={c.textAreaPost} placeholder={'New post...'} onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}></textarea>
            </div>
            <button onClick={onAddPost}>Add post</button>
        </div>
    )
};

export default MyPostsInput;