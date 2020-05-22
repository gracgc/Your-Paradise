import React from "react";
import {connect} from "react-redux";
import Profile1 from "./Profile1";
import {withRouter} from "react-router-dom";
import {setUserProfile} from "../../redux/profile_reducer";
import {profileAPI} from "../../api/api";

class Profile1Component extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 3;
        }
        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return <>
            <Profile1 {...this.props} profile={this.props.profile}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let WithUrlDataContainer = withRouter(Profile1Component);

const Profile1Container = connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainer);

export default Profile1Container;
