import React from "react";
import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
        </div>
    )
}

const Massage = (props) => {
    return (
        <div className={c.massage}>
            {props.massage}
        </div>
    )
}




const Dialogs = (props) => {
    let dialogElement = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let massageElement = props.massages.map((m) => <Massage massage={m.massage} id={m.id}/>);

    return (
        <div className={c.dialogs}>
            <div className={c.usersColumn}>
                {dialogElement}
            </div>
            <div className={c.massages}>
                {massageElement}
            </div>
        </div>
    )
}


export default Dialogs;