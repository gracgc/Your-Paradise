import React from "react";
import c from './ProfileInfo.module.css'
import userPhoto from './../../../assets/images/user.jpg'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileDescription from "./ProfileDescription";




const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={c.infoBlock}>
            <div>
                <img
                    src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                    alt="" className={c.avatar}/>
            </div>
            <div>
                <ProfileDescription profile={props.profile}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
