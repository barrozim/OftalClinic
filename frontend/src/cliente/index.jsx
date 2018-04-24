import React, {Component} from 'react'

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'

export default class Cliente extends Component {
      render() {
      return (
        <div>
            <Menu />
            <PageHeader name='Cliente' small='Verifique as informações dos clientes'></PageHeader>
        </div>
      )
      }
    }
