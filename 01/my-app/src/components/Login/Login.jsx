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
            <div>
                <Field placeholder={'Password'} name={'password'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={Input}
                       type={'checkbox'}/>
                Don't forget me...
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <div className={c.loginForm}>
                <div className={c.topLoginForm}>Is it a dream?</div>
                <div className={c.mainLoginForm}>
                    <LoginReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
