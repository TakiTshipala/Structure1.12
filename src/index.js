import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store/Store'
import App from './containers/app'
import './theme/App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/login/login.js';
import Register from './components/register/register.js';
import Logingoogle from './components/logingoogle/logingoogle.js';
import Profile from './components/profile/profile.js';



const target = document.querySelector('#root')
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
            <Router>
                <div>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logingoogle" component={Logingoogle} />
            <Route path="/profile" component={Profile} />
            </div>
            </Router>
            </div>
           </ConnectedRouter>
    </Provider>,
    target
)