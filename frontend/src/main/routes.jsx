import React from 'react'

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Sobre from '../sobre/sobre'
import Login from '../login/login'
import Home from '../home/home'
import Cliente from '../cliente/cliente'
import Consulta from '../consulta/index'
import Relatorio from '../relatorio/index'
//import Usuario from '../usuario/index'
import Medico from '../medico/index'


export default props => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/home' component={Home} />
        <Route path='/cliente' component={Cliente} />
        <Route path='/consulta' component={Consulta} />
        <Route path='/relatorio' component={Relatorio} />
        {/* <Route path='/usuario' component={Usuario} /><Route path='/medico' component={Medico} /> */}
    </Switch>
)
