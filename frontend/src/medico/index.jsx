import React, { Component } from 'react'
import axios from 'axios'

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'
import Form from './Form'
import List from './List'


const URL = 'http://localhost:3003/api/oftalclinic/medico'

export default class Usuario extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: '', email: '', telefonecelular: '', crm : '', especialidade : '', hideFormulario : true, list: [] }
        this.handleChangeNome = this.handleChangeNome.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeCelular = this.handleChangeCelular.bind(this)
        this.handleChangeCRM = this.handleChangeCRM.bind(this)
        this.handleChangeEspecialidade = this.handleChangeEspecialidade.bind(this)

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

    handleChangeCelular(e) {
        this.setState({ ...this.state, telefonecelular: e.target.value })
    }

    handleChangeCRM(e) {
        this.setState({ ...this.state, crm: e.target.value })
    }

    handleChangeEspecialidade(e) {
        this.setState({ ...this.state, especialidade: e.target.value })
    }



    handleAdd() {
        axios.post(URL, this.state)
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
                <PageHeader name='Médico' small='Administre a lista de médicos'></PageHeader>
                <Form 
                    handleChangeNome={this.handleChangeNome}
                    handleChangeEmail={this.handleChangeEmail}
                    handleChangeCelular={this.handleChangeCelular}
                    handleChangeCRM={this.handleChangeCRM}
                    handleChangeEspecialidade={this.handleChangeEspecialidade}
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
