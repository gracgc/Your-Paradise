import React from "react";
import {connect} from "react-redux";
import Profile1 from "./Profile1";
import * as axios from 'axios';
import {withRouter} from "react-router-dom";
import {setUserProfileActionCreator} from "../../redux/profile_reducer";

class Profile1Component extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 3;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileActionCreator(profile))
        }
    }
};

let WithUrlDataContainer = withRouter(Profile1Component);

const Profile1Container = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer);

export default Profile1Container;
