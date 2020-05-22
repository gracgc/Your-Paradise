import React from "react";
import c from './Profile1.module.css'
import MyPostsInputContainer from "./MyPosts/MyPostsInputContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile1 = (props) => {
    return (
        <div className={c.profile}>
            <div>
                <ProfileInfo profile={props.profile}/>
                <MyPostsInputContainer/>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Profile1;