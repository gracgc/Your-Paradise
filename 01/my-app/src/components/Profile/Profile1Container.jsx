import React from "react";
import {connect} from "react-redux";
import Profile1 from "./Profile1";
import {withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profile_reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class Profile1Component extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 3;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <>
            <Profile1 {...this.props} profile={this.props.profile} posts={this.props.posts}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts
    }
};

export default compose(
    connect(mapStateToProps, {
        getUserProfile
    }),
    withRouter,
    withAuthRedirect,
)
(Profile1Component);

