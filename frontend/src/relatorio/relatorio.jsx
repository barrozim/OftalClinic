import React, { Component } from 'react'

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'
import {Route, Link} from 'react-router-dom'

//Relatórios
import RelAtendimentosRealizados from '../relatorio/relatendimentosrealizados'
import RelHorariosLivres from '../relatorio/relhorarioslivres'
import RelConsultaDoDia from '../relatorio/relconsultadodia'


class Relatorio extends Component {
    render() {
        return (
            <div>
                <Menu />
                <PageHeader name='Relatórios' small='Selecione o relatório que você deseja utilizar na listagem'></PageHeader>
                <ul>
                    <li><Link to='/relatorio/relconsultadodia'>Consultas do dia</Link></li>
                    <li><Link to='/relatorio/relhorarioslivres'>Horários livres</Link></li>
                    <li><Link to='/relatorio/relatendimentosrealizados'>Atendimentos realizados</Link></li>
                </ul>
                <Route path='/relatorio/relatendimentosrealizados' component={RelAtendimentosRealizados} />
                <Route path='/relatorio/relhorarioslivres' component={RelHorariosLivres} />
                <Route path='/relatorio/relconsultadodia' component={RelConsultaDoDia} />
            </div>
            
        )
    }
}


export default Relatorio