import React from "react";
import c from './Post.module.css'



const Post = (props) => {


    return (
        <div className={c.postBody}>
            <div className={c.postAvatar}>
                <img src={props.img} alt=""/>
            </div>
            <pre className={c.post}>
                {props.text}
            </pre>
        </div>
    );
}



export default Post;