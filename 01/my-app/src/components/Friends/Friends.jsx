import React from "react";
import Friend from "./Friend/Friend";


const Friends = (props) => {

    return (
            <div style={{overflowY: "scroll", maxHeight: "75vh"}}>
                <div style={{fontWeight: "bold", fontSize: "34px", marginBottom: "25px"}}>
                    Friends
                </div>
                {props.friends.map(u => <Friend user={u} key={u.id} followingInProgress={props.followingInProgress}
                                          unfollow={props.unfollow} follow={props.follow}/>)}
            </div>
    )
};


export default Friends;


