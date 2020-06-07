import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Preloader from "../../common/Preloader/Preloader";


class DialogsComponent extends React.Component {

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Dialogs {...this.props} dialogs={this.props.dialogs} massages={this.props.massages}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        massages: state.dialogPage.massages
    }
};

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)
(DialogsComponent);

