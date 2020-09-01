import React from 'react';
import c from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators";
import {Input} from "../../common/FormsControls/FormsControls";
import Redirect from "react-router-dom/es/Redirect";
import {login} from "../../redux/auth_reducer";
import {connect} from "react-redux";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div style={{marginTop: "10px"}}>
                <Field placeholder={'Password'} name={'password'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div  style={{marginTop: "10px", display: "inline-flex"}}>
                <Field name={'rememberMe'} component={Input}
                       type={'checkbox'}/>
                Don't forget me...
            </div>
            <div>
                { props.captchaUrl && <img src={props.captchaUrl} style={{width: "100px", height: "50px", marginTop: "10px"}}/>}
                { props.captchaUrl &&
                <div style={{marginTop: "10px", marginBottom: "20px"}}>
                    <Field placeholder={'Symbols from image'} name={'captcha'}
                           component={Input}/>
                </div>}
            </div>
            <div style={{marginTop: "10px", position: "relative", right: "-200px", bottom: "10px"}}>
                <button className={c.loginButton}>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <div className={c.loginForm}>
                <div className={c.topLoginForm}>Is it a dream?</div>
                <div className={c.mainLoginForm}>
                    <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}
                                    initialValues={{email: "free@samuraijs.com", password: "free"}}/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login})(Login);
