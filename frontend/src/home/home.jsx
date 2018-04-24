import React, {Component} from 'react'

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'

export default class Home extends Component {
      render() {
      return (
        <div>
            <Menu />
            <PageHeader name='Home' small=''></PageHeader>
        </div>
      )
      }
    }