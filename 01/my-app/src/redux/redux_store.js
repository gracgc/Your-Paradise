import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialog_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app_reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
