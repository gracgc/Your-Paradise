import React from "react";
import {connect} from "react-redux";
import * as axios from 'axios';
import Header from "./Header";
import {setUserDataActionCreator} from "../../redux/auth_reducer";

class HeaderComponent extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login);
                }
            })
    }

    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (id, email, login) => {
            dispatch(setUserDataActionCreator(id, email, login))
        }
    }
};

const Profile1Container = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

export default Profile1Container;