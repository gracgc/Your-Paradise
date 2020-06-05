import React from "react";
import c from './User.module.css'
import userPhoto from '../../../assets/images/user.jpg';
import classNames from 'classnames';
import {NavLink} from "react-router-dom";
import {userAPI} from "../../../api/api";

const User = (props) => {

    let pagesCount = Math.ceil(props.totalPageCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <div className={classNames(props.currentPage === p && c.selectedPage, c.pageNumber)}
                                onClick={(e) => {
                                    props.onPageChanged(p);
                                }}>
                        {p}
                    </div>
                })}


            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={c.avatar}/>
                    </NavLink>
                </div>

                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.toogleFollowing(true, u.id);
                                      userAPI.unfollow(u.id).then(response => {
                                          if (response.data.resultCode == 0) {
                                              props.unfollow(u.id)
                                          }
                                          props.toogleFollowing(false, u.id);
                                      })
                                  }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.toogleFollowing(true, u.id);
                                      userAPI.follow(u.id).then(response => {
                                          if (response.data.resultCode == 0) {
                                              props.follow(u.id);
                                          }
                                          props.toogleFollowing(false, u.id);
                                      })
                                  }}>Follow</button>
                    }
                </div>
            </span>
                    <span>
                <div>
                    {u.status}
                    {u.name}
                </div>
            </span>
                </div>)
            }
        </div>
    )
};


export default User;


