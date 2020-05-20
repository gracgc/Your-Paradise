import React from "react";
import c from './MyPosts.module.css'
import Post from "./Post1/Post";



const MyPosts = (props) => {

    let postElement = props.posts.map((p) => <Post text={p.text} img={p.img} key={p.id}/>);

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

    }


    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea className={c.textAreaPost} placeholder={'New post...'} onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}></textarea>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={c.posts}>
                {postElement}
            </div>
        </div>


    );
}

export default MyPosts;