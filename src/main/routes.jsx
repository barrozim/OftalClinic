import React from 'react'

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Sobre from '../sobre/sobre'
import Login from '../login/login'
import Home from '../home/home'

export default props => (
    <main>
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/home' component={Home} />
    </Switch>
    </main>
)
