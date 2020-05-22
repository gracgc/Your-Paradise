import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toogleFetch,
    unfollow
} from "../../../redux/users_reducer";
import User from "./User";
import Preloader from "../../../common/Preloader/Preloader";
import {userAPI} from "./../../../api/api";


class UserComponent extends React.Component {
    componentDidMount() {
        this.props.toogleFetch(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toogleFetch(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleFetch(true);
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.toogleFetch(false);
        })
    };


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <User totalPageCount={this.props.totalPageCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  users={this.props.users}
            />
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalPageCount: state.usersPage.totalPageCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toogleFetch
})(UserComponent);


