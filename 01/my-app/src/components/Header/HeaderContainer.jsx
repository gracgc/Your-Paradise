import React from "react";
import {connect} from "react-redux";
import * as axios from 'axios';
import Header from "./Header";
import {getUserDataActionCreator} from "../../redux/auth_reducer";

class HeaderComponent extends React.Component {


    componentDidMount() {
        this.props.getUserData()
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
        getUserData: (id, email, login) => {
            dispatch(getUserDataActionCreator(id, email, login))
        }
    }
};

const Profile1Container = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

export default Profile1Container;
