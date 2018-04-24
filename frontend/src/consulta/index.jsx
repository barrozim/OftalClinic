import React, {Component} from 'react'

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'

export default class Consulta extends Component {
      render() {
      return (
        <div>
            <Menu />
            <PageHeader name='Consulta' small='Agende sua consulta'></PageHeader>
        </div>
      )
      }
    }
