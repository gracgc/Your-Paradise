import React from "react";
import {addPost, updatePostText} from "../../../redux/profile_reducer";
import {connect} from "react-redux";
import MyPostsInput from "./MyPostsInput";

class MyPostsComponent extends React.Component {


    render() {
        return <>
            <MyPostsInput {...this.props} posts={this.props.posts}
                          newPostText={this.props.newPostText}
                          updatePostText={this.props.updatePostText}
                          addPost={this.props.addPost}
            />
        </>
    }
}

const MapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

export default connect(MapStateToProps, {
    updatePostText, addPost
})(MyPostsComponent);

