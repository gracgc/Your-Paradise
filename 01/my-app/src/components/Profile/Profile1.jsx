import React from "react";
import c from './Profile1.module.css'
import MyPostsInputContainer from "./MyPosts/MyPostsInputContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsList from "./MyPosts/MyPostsList";


const Profile1 = (props) => {
    return (
        <div className={c.profile}>
            <div>
                <div style={{display: "block", height: "250px"}}>
                    <ProfileInfo isFetching={props.isFetching} savePhoto={props.savePhoto} saveProfile={props.saveProfile}
                                 isOwner={props.isOwner} profile={props.profile}
                                 status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <MyPostsInputContainer/>
            </div>
            <div>
                <MyPostsList profile={props.profile} posts={props.posts}/>
            </div>
        </div>
    );
};

export default Profile1;
