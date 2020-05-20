import React from "react";
import c from './Post.module.css'



const Post = (props) => {
    return (
        <div className={c.post}>
            <img src={props.img} alt=""/>
            <span>
                {props.text}
            </span>
        </div>
    );
}



export default Post;