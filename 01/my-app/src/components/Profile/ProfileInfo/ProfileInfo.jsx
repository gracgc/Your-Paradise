import React, {useState} from "react";
import c from './ProfileInfo.module.css'
import userPhoto from './../../../assets/images/user.jpg'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileDescription from "./ProfileDescription";
import ProfileStatus from "./ProfileStatus";
import ProfileDescriptionData from "./ProfileDescriptionData";
import edit_pencil from './../../../assets/images/edit_pencil.png'


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const activatedEditMode = () => {
        setEditMode(true)
    };

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={c.infoBlock}>
            <div className={c.avaAndStatus}>
                <div className={c.avaAndChangeAva}>
                    {props.isFetching ? <Preloader/> : <img
                        src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                        alt="" className={c.avatar}/>}
                    {props.isOwner &&
                    <div className={c.changePhotoButton} inputMode={'file'} onChange={onMainPhotoSelected}>
                        Change Photo
                        <input type={"file"} onChange={onMainPhotoSelected}/>
                    </div>}
                </div>
                <div style={{marginTop: "3px"}}>
                    <ProfileStatus isOwner={props.isOwner} profile={props.profile} updateStatus={props.updateStatus} status={props.status}/>
                </div>
            </div>
            <div>
                {editMode
                    ? <ProfileDescriptionData onSubmit={onSubmit} profile={props.profile} initialValues={props.profile}/>
                    : <ProfileDescription profile={props.profile}/>}
            </div>
            {props.isOwner && !editMode && <img onClick={activatedEditMode} src={edit_pencil}
                 style={{width: "5%", height: "5%", cursor: "pointer", paddingTop:"28px"}}></img>}
        </div>
    );
};

export default ProfileInfo;
