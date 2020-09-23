import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setUsers, toogleFollowing,
    unfollow, getUsers
} from "../../redux/users_reducer";
import Users from "./Users";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UserComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render() {
        return <>
            <Users {...this.props} totalPageCount={this.props.totalPageCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
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
        users: state.usersPage.users,
        friends: state.usersPage.friends,
        pageSize: state.usersPage.pageSize,
        totalPageCount: state.usersPage.totalPageCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setUsers, toogleFollowing, getUsers
    }),
    withAuthRedirect
)
(UserComponent);





