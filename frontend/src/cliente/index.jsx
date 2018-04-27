import React, { Component } from 'react'
import axios from 'axios'

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'
import Form from './Form'
import List from './List'


const URL = 'http://35.231.93.88:3003/api/oftalclinic/cliente'

export default class Usuario extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: '', email: '', telefone1: '', hideFormulario : true, list: [] }
        this.handleChangeNome = this.handleChangeNome.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeTelefone1 = this.handleChangeTelefone1.bind(this)

        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleAddFormulario = this.handleAddFormulario.bind(this)

        
        this.atualizarTela()
    }

    atualizarTela(add = true) {
        axios.get(`${URL}?sort=-dataatualizacao`)
            .then(resp => this.setState({
                ...this.state, list: resp.data, hideFormulario : add
            }))
    }

    handleChangeNome(e) {
        this.setState({ ...this.state, nome: e.target.value })
    }

    handleChangeEmail(e) {
        this.setState({ ...this.state, email: e.target.value })
    }

    handleChangeTelefone1(e) {
        this.setState({ ...this.state, telefone1: e.target.value })
    }

    handleAdd() {
        const json = {
            nome: this.state.nome,
            email: this.state.email,
            telefone1: this.state.telefone1
        }

        axios.post(URL, json)
            .then(resp => this.atualizarTela(true))
    }

    handleRemove(obj) {
        axios.delete(`${URL}/${obj._id}`)
            .then(resp =>  this.atualizarTela() )
    }


    handleCancel () {
        this.setState({ ...this.state, hideFormulario : true })
    }

    handleAddFormulario() {
        this.setState({ ...this.state, hideFormulario : false })
    }
    render() {
        return (
            <div>
                <Menu />
                <PageHeader name='Cliente' small='Verifique as informações dos clientes'></PageHeader>
                <Form 
                    handleChangeNome={this.handleChangeNome}
                    handleChangeEmail={this.handleChangeEmail}
                    handleChangeTelefone1={this.handleChangeTelefone1}
                    handleAdd={this.handleAdd} 
                    handleAddFormulario={this.handleAddFormulario}
                    hideFormulario={this.state.hideFormulario}
                    handleCancel={this.handleCancel}
                    />
                <List list={this.state.list}
                    handleRemove={this.handleRemove} 
                     />
            </div>
        )
    }
}
