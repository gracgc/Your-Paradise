import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";



const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        massages: state.dialogPage.massages
    }
};



const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;