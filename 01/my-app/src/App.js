import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Profile1Container from "./components/Profile/Profile1Container";
import HeaderContainer from "./components/Header/HeaderContainer";


let App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <div className='header'><HeaderContainer/></div>
                <div className='app-wrapper-content-navbar'>
                    <div className='navbar'><Navbar/></div>
                    <div className='content'>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <Profile1Container/>}/>
                        <Route path='/users' render={() => <Users/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
