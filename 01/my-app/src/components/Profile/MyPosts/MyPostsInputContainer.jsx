import React from "react";
import {addPost} from "../../../redux/profile_reducer";
import {connect} from "react-redux";
import MyPostsInput from "./MyPostsInput";

class MyPostsInputComponent extends React.Component {

    render() {
        return <>
            <MyPostsInput {...this.props}
                          addPost={this.props.addPost}
            />
        </>
    }
}

const MapStateToProps = (state) => {
    return {

    }
};

export default connect(MapStateToProps, {addPost})(MyPostsInputComponent);

