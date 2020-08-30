import React from "react";
import {connect} from "react-redux";
import {
    follow, toogleFollowing,
    unfollow, getFriends, setFriends
} from "../../redux/users_reducer";
import Friends from "./Friends";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class FriendComponent extends React.Component {
    componentDidMount() {
        this.props.getFriends(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return <>
            <Friends {...this.props} totalPageCount={this.props.totalPageCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}
                     friends={this.props.friends}
                     toogleFollowing={this.props.toogleFollowing}
                     followingInProgress={this.props.followingInProgress}
                     isFetching={this.props.isFetching}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.usersPage.friends,
        pageSize: state.usersPage.pageSize,
        totalPageCount: state.usersPage.totalPageCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setFriends, toogleFollowing, getFriends
    }),
    withAuthRedirect
)
(FriendComponent);





