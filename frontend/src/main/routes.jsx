import React from 'react'

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Sobre from '../sobre/sobre'
import Login from '../login/login'
import Home from '../home/home'
import Cliente from '../cliente/cliente'
import Consulta from '../consulta/consulta'
import Relatorio from '../relatorio/relatorio'
import Usuario from '../usuario/usuario'
import Medico from '../medico/medico'


export default props => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/home' component={Home} />
        <Route path='/cliente' component={Cliente} />
        <Route path='/consulta' component={Consulta} />
        <Route path='/relatorio' component={Relatorio} />
        <Route path='/medico' component={Medico} />
        <Route path='/usuario' component={Usuario} />
        {/* <Route path='/usuario' component={Usuario} /><Route path='/medico' component={Medico} /> */}
    </Switch>
)
