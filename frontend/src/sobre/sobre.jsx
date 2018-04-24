import React , { Component } from 'react'

import Menu from '../template/menu'
import PageHeader from '../template/pageHeader'

export default class Sobre extends Component {
      render() {
      return (
        <div>
            <Menu />
            <PageHeader name='Sobre' small='Informações sobre a aplicação'></PageHeader>
        </div>
      )
      }
    }