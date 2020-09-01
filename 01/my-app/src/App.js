import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter, Switch, Redirect } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Profile1Container from "./components/Profile/Profile1Container";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Preloader from "./common/Preloader/Preloader";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import {connect} from "react-redux";



class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
                <div className='app-wrapper'>
                    <div className='header'><Header/></div>
                    <div className='app-wrapper-content-navbar'>
                        <div className='navbar'><Navbar/></div>
                        <div className='content'>
                            <Switch>
                            <Route exact path='/'
                                   render={() => <Redirect to={"/profile"}/>}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?'
                                   render={() => <Profile1Container/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            </Switch>
                        </div>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
