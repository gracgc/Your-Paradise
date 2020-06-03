import React from "react";
import {addPost, updatePostText} from "../../../redux/profile_reducer";
import {connect} from "react-redux";
import MyPostsInput from "./MyPostsInput";

class MyPostsInputComponent extends React.Component {


    render() {
        return <>
            <MyPostsInput {...this.props}
                          newPostText={this.props.newPostText}
                          updatePostText={this.props.updatePostText}
                          addPost={this.props.addPost}
            />
        </>
    }
}

const MapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
};

export default connect(MapStateToProps, {
    updatePostText, addPost
})(MyPostsInputComponent);

