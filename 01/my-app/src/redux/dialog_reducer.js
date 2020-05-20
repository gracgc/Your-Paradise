let initialState = {
    dialogs: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Lina'},
        {id: 3, name: 'Anton'}
    ],
    massages: [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'Yo'},
        {id: 3, massage: 'Nice!'},
    ]
};

const dialogReducer = (state = initialState, action) => {

    return state;

};

export default dialogReducer;

