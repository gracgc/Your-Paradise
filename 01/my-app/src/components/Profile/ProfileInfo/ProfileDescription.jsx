import React from "react";
import c from './ProfileDescription.module.css'


const ProfileDescription = (props) => {

    return (
        <div className={c.description}>
            <div>{props.profile.fullName}</div>
            <div>About Me: {props.profile.aboutMe}</div>
        </div>
    );
};

export default ProfileDescription;
