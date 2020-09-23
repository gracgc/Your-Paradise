import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";
import Preloader from "../../common/Preloader/Preloader";


const Users = (props) => {

    return (
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "50px"}}>
            <div style={{overflowY: "scroll", maxHeight: "75vh"}}>
                <div style={{fontWeight: "bold", fontSize: "34px", marginBottom: "25px"}}>
                    Users
                </div>
                <Paginator totalItemCount={props.totalPageCount} pageSize={props.pageSize}
                           currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
                {props.isFetching ? <Preloader/> :

                    props.users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                                               unfollow={props.unfollow} follow={props.follow}/>)
                }
            </div>
            <div style={{overflowY: "scroll", maxHeight: "75vh"}}>
                <div style={{fontWeight: "bold", fontSize: "34px", marginBottom: "25px"}}>
                    Friends
                </div>
                {props.friends.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                                              unfollow={props.unfollow} follow={props.follow}/>)}
            </div>

        </div>
    )
};


export default Users;


