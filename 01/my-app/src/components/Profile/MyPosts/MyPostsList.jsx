import React from "react";
import c from './MyPostsList.module.css'
import Post from "./Post1/Post";


const MyPostsList = (props) => {

    let postElement = props.posts.map((p) => <Post text={p.text} img={p.img} key={p.id}/>);

    return (
        <div className={c.myPosts}>
            <div className={c.posts}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPostsList;