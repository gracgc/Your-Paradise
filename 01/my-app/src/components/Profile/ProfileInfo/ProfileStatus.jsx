import React, {useState, useEffect} from 'react';

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
        setEditMode(false)
        props.updateStatus(status)
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div onClick={activatedEditMode}>
                {props.status || 'How are you?(edit)'}
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivatedEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
};


export default ProfileStatus;
