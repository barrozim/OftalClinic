import React, { Component } from 'react'

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'


class Relatorio extends Component {
    render() {
        return (
            <div>
                <Menu />
                <PageHeader name='Relatórios' small='Selecione o relatório que você deseja utilizar na listagem'></PageHeader>
            </div>
        )
    }
}


export default Relatorio