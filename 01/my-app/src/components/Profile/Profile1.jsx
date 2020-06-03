import React from "react";
import c from './Profile1.module.css'
import MyPostsInputContainer from "./MyPosts/MyPostsInputContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsListContainer from "./MyPosts/MyPostsListContainer";




const Profile1 = (props) => {
    return (
        <div className={c.profile}>
            <div>
                <ProfileInfo profile={props.profile}/>
                <MyPostsInputContainer/>
            </div>
            <div>
                <MyPostsListContainer/>
            </div>
        </div>
    );
};

export default Profile1;