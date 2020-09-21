import React from "react";
import c from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/auth_reducer";

const Header = (props) => {
    return (
        <header className={c.header}>
            <div className={c.logo}>
                YOUR PARADISE
            </div>
            <div className={c.loginBar}>
                {props.isAuth
                    ? <div className={c.loginButtons}>
                        <div>{props.login}</div>
                        <div onClick={props.logout} className={c.logout}>Log out</div>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

export default connect(mapStateToProps, {logout})(Header);
