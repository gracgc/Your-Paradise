import React from "react";
import {connect} from "react-redux";
import Profile1 from "./Profile1";
import {withRouter} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus, savePhoto, saveProfile} from "../../redux/profile_reducer";
import {compose} from "redux";
import Preloader from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class Profile1Component extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <>
            {this.props.isFetchingProfile ? <Preloader/> :
            <Profile1 {...this.props} isFetching={this.props.isFetching} saveProfile={this.props.saveProfile}
                      isOwner={!this.props.match.params.userId} profile={this.props.profile}
                      posts={this.props.posts} status={this.props.status} updateStatus={this.props.updateStatus}
                      savePhoto={this.props.savePhoto}/>}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isFetching: state.profilePage.isFetching,
        isFetchingProfile: state.profilePage.isFetchingProfile
    }
};

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile
    }),
    withRouter,
    withAuthRedirect,
)
(Profile1Component);

