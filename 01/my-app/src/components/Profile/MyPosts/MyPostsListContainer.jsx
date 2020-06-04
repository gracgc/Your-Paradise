import React from "react";
import {connect} from "react-redux";
import MyPostsList from "./MyPostsList";

class MyPostsListComponent extends React.Component {


    render() {
        return <>
            <MyPostsList {...this.props} posts={this.props.posts}
            />
        </>
    }
}

const MapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
};

export default connect(MapStateToProps, {})(MyPostsListComponent);

