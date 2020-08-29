import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";
import Preloader from "../../common/Preloader/Preloader";

const Users = (props) => {
    return (
        <div>
            <Paginator totalItemCount={props.totalPageCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            {props.isFetching ? <Preloader/> :

                    props.users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                                               unfollow={props.unfollow} follow={props.follow}/>)

            }
        </div>
    )
};


export default Users;


