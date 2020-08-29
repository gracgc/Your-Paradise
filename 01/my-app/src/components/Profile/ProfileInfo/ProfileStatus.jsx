import React, {useState, useEffect} from 'react';
import edit_pencil from "../../../assets/images/edit_pencil.png";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activatedEditMode = () => {
        setEditMode(true)
    };

    const deactivatedEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode &&
            <div style={{width: "200px", display: "inline-flex"}}>
                {props.status || (props.isOwner && 'How are you?')}
                {props.isOwner && <img onClick={activatedEditMode} src={edit_pencil}
                     style={{
                         width: "13%",
                         height: "13%",
                         cursor: "pointer"
                     }}></img>}
            </div>
            }
            {editMode &&
            <div>
                <input style={{width: "200px"}} onChange={onStatusChange} autoFocus={true} onBlur={deactivatedEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
};


export default ProfileStatus;
