import React from "react";
import c from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg';
import classNames from 'classnames';
import {NavLink} from "react-router-dom";

const Users = (props) => {

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
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={c.avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id)
                                          }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id)
                                          }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div>
                        {u.name}
                    </div>
                </div>)
            }
        </div>
    )
};


export default Users;


