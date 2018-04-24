import React, {Component} from 'react'

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'

export default class Relatorios extends Component {
      render() {
      return (
        <div>
            <Menu />
            <PageHeader name='Relatórios' small='Selecione o relatório que você deseja utilizar na listagem'></PageHeader>
        </div>
      )
      }
    }