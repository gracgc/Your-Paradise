import React from "react";
import c from './User.module.css'
import userPhoto from '../../../assets/images/user.jpg';
import classNames from 'classnames';
import {NavLink} from "react-router-dom";
import {followAPI, unfollowAPI} from "../../../api/api";

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
                        ? <button onClick={(e) => {
                            followAPI.isFollow(u.id).then(response => {
                                if (response.resultCode == 0) {
                                    this.props.unfollow
                                }
                            })
                        }}>Unfollow</button>
                        : <button onClick={(e) => {
                            unfollowAPI.isFollow(u.id).then(response => {
                                if (response.resultCode == 0) {
                                    this.props.follow
                                }
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


