import React from "react";
import c from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={c.header}>
            <div className={c.logo}>
                <div className={c.logoText}>YOUR PARADISE</div>
            </div>
            <div className={c.login}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;