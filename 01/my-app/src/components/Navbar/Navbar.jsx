import React from "react";
import c from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import mailIMG from '../../assets/images/u_got_mail.png'
import settingsIMG from '../../assets/images/settings_icon.png'
import profileIMG from '../../assets/images/profile_icon.png'
import musicIMG from '../../assets/images/music_icon.png'
import newsIMG from '../../assets/images/news_icon.png'
import usersIMG from '../../assets/images/users_icon.png'


const Navbar = () => {

    return (
        <div className={c.nav}>
            <NavLink to="/profile" className={c.hov} activeClassName={c.activeLink}>
                <div className={c.navButton}>
                    <img src={profileIMG} className={c.iconImg}/>
                </div>
            </NavLink>

            <NavLink to="/dialogs" className={c.hov} activeClassName={c.activeLink}>
                <div className={c.navButton}>
                    <img src={mailIMG} className={c.iconImg}/>
                </div>
            </NavLink>

            <div>
                <NavLink to="/users" className={c.hov} activeClassName={c.activeLink}>
                    <div className={c.navButton}>
                        <img src={usersIMG} className={c.iconImg}/>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/news" className={c.hov} activeClassName={c.activeLink}>
                    <div className={c.navButton}>
                        <img src={newsIMG} className={c.iconImg}/>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/music" className={c.hov} activeClassName={c.activeLink}>
                    <div className={c.navButton}>
                        <img src={musicIMG} className={c.iconImg}/>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={c.hov} activeClassName={c.activeLink}>
                    <div className={c.navButton}>
                        <img src={settingsIMG} className={c.iconImg}/>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
