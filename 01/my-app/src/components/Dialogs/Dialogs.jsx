import React from "react";
import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import classNames from 'classnames';


const DialogItem = (props) => {
    return (
        <div className={classNames(c.dialog, c.active)}>
            <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={c.message}>
            {props.message}
        </div>
    )
};




const Dialogs = (props) => {
    let dialogElement = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = props.messages.map((m) => <Message massage={m.message} id={m.id}/>);

    return (
        <div className={c.dialogs}>
            <div className={c.usersColumn}>
                {dialogElement}
            </div>
            <div className={c.messages}>
                {messageElement}
            </div>
        </div>
    )
}


export default Dialogs;
