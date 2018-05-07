import React, { Component } from 'react'
import axios from 'axios'

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'
import Form from './Form'
import List from './List'


const URL = 'http://localhost:3003/api/oftalclinic/usuario'

export default class Usuario extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: '', email: '', senha: '', hideFormulario : true, list: [] }
        this.handleChangeNome = this.handleChangeNome.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeSenha = this.handleChangeSenha.bind(this)

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

    handleChangeSenha(e) {
        this.setState({ ...this.state, senha: e.target.value })
    }

    handleAdd() {
        const json = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
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
                <PageHeader name='Usário' small='Administre os usuários da aplicação'></PageHeader>
                <Form 
                    handleChangeNome={this.handleChangeNome}
                    handleChangeEmail={this.handleChangeEmail}
                    handleChangeSenha={this.handleChangeSenha}
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
