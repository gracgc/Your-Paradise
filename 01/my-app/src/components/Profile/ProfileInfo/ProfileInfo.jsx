import React from "react";
import c from './ProfileInfo.module.css'
import userPhoto from './../../../assets/images/user.jpg'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileDescription from "./ProfileDescription";
import ProfileStatus from "./ProfileStatus";




const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={c.infoBlock}>
            <div className={c.avaAndStatus}>
                <img
                    src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                    alt="" className={c.avatar}/>
                <div className={c.status}>
                    <ProfileStatus profile={props.profile} updateStatus={props.updateStatus} status={props.status}/>
                </div>
            </div>
            <div>
                <ProfileDescription profile={props.profile}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
