import React from 'react'

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Sobre from '../sobre/sobre'
import Login from '../login/login'
import Home from '../home/home'
import Cliente from '../cliente/index'
import Consulta from '../consulta/index'
import Relatorio from '../relatorio/index'

export default props => (
    <main>
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/home' component={Home} />
        <Route path='/cliente' component={Cliente} />
        <Route path='/consulta' component={Consulta} />
        <Route path='/relatorio' component={Relatorio} />
    </Switch>
    </main>
)
