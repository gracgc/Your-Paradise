import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator, toogleFetchActionCreator,
    unfollowActionCreator
} from "../../../redux/users_reducer";
import * as axios from 'axios';
import User from "./User";
import Preloader from "../../../common/Preloader/Preloader";


class UserComponent extends React.Component {
    componentDidMount() {
        this.props.toogleFetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toogleFetch(false);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleFetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toogleFetch(false);
            })
    };


    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
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

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUsersCount: (totalPageCount) => {
            dispatch(setTotalUsersCountActionCreator(totalPageCount))
        },
        toogleFetch: (isFetching) => {
            dispatch(toogleFetchActionCreator(isFetching))
        }
    }
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserComponent);

export default UserContainer;