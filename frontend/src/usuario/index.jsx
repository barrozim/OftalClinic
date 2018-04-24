import React, { Component } from 'react'
import axios from 'axios'

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'
import Form from './Form'
import List from './List'


const URL = 'http://localhost:3003/api/todos'

export default class Usuario extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => console.log('Funcionou!'))
    }

    render() {
        return (
            <div>
                <Menu />
                <PageHeader name='Usário' small='Administre os usuários da aplicação'></PageHeader>
                <Form description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <List />
            </div>
        )
    }
}
