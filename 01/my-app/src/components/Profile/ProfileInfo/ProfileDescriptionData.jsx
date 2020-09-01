import React from "react";
import c from './ProfileDescription.module.css'
import {Field} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Input} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const maxLength20 = maxLengthCreator(20);

const ProfileDescriptionData = (props) => {

    return (
        <div className={c.description}>
            <div style={{fontSize: "24px", fontWeight: "bold"}}>Edit</div>
            <form onSubmit={props.handleSubmit}>
                <div style={{marginTop: "10px"}}>
                    <Field placeholder={'Full Name'} name={'fullName'}
                           validate={[required, maxLength20]}
                           component={Input}/>
                </div>
                <div style={{marginTop: "10px"}}>
                    <Field placeholder={'About me'} name={'aboutMe'}
                           validate={[required, maxLength20]}
                           component={Input}/>
                </div>
                <div style={{marginTop: "10px"}}>
                    <Field placeholder={'My professional skills'} name={'lookingForAJobDescription'}
                           validate={[required, maxLength20]} component={Input}/>
                </div>
                <div style={{display: "inline-flex", marginTop: "10px"}}>
                    Looking For A Job?
                    <Field name={'lookingForAJob'}
                           component={Input} type={'checkbox'}/>
                </div>
                <div>
                    <button className={c.saveButton}>Save</button>
                </div>
            </form>
        </div>
    );
};

const ProfileDescriptionDataForm = reduxForm({form: 'edit-profile'})(ProfileDescriptionData);

export default ProfileDescriptionDataForm;
