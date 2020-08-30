import React from "react";
import c from './../Friends.module.css'
import userPhoto from '../../../assets/images/user.jpg';
import {NavLink} from "react-router-dom";

const Friend = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div>
            <div style={{display: "block"}}>
                <div style={{display: "block", height: "140px"}}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={c.avatar}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>
                    }
                </div>
                <div>
                    {user.name}
                </div>
            </div>
        </div>
    )
};


export default Friend;


