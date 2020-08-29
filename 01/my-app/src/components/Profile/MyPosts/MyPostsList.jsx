import React from "react";
import c from './MyPostsList.module.css'
import Post from "./Post1/Post";


const MyPostsList = (props) => {
    return (
        <div className={c.myPosts}>
            <div className={c.posts}>
                {
                    props.posts.map((p) => <Post text={p.text} key={p.id}/>)
                }
            </div>
        </div>
    );
};

export default MyPostsList;
