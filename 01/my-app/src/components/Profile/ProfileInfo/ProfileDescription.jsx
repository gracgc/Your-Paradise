import React from "react";
import c from './ProfileDescription.module.css'


const ProfileDescription = (props) => {

    return (
        <div className={c.description}>
            <div style={{fontSize:"24px",fontWeight:"bold"}}>{props.profile.fullName}</div>
            <div style={{marginTop: "10px"}}> <b>About Me: </b>{props.profile.aboutMe}</div>
            <div style={{marginTop: "10px"}}><b>Looking for a job</b>:
                {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div style={{marginTop: "10px"}}> <b>My professional skills: </b> {props.profile.lookingForAJobDescription}</div>
        </div>
    );
};

export default ProfileDescription;
