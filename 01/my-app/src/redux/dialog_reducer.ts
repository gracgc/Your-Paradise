type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Lina'},
        {id: 3, name: 'Anton'}
    ] as Array<DialogType>,
    massages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Nice!'},
    ] as Array<MessageType>
};

const dialogReducer = (state = initialState, action: any) => {

    return state;

};

export default dialogReducer;

