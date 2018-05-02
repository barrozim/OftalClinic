import React, { Component } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'


import {atualizarTela, modifyHideFormulario} from './clienteActions'


import axios from 'axios'

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'
import Form from './Form'
import List from './List'


const URL = 'http://35.231.93.88:3003/api/oftalclinic/cliente'

class Cliente extends Component {
    componentWillMount(){
        this.props.atualizarTela()
    }

    constructor(props) {
        super(props)

        this.handleChangeNome = this.handleChangeNome.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeTelefone1 = this.handleChangeTelefone1.bind(this)

        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleAddFormulario = this.handleAddFormulario.bind(this)
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

    handleAddFormulario() {
        this.props.modifyHideFormulario(this.props.hideFormulario)
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
                    hideFormulario={this.props.hideFormulario}
                    handleCancel={this.handleAddFormulario}
                    />
                <List list={this.props.list}
                    handleRemove={this.handleRemove} 
                     />
            </div>
        )
    }
}

const mapStateToProps = state => ({list : state.cliente.list, hideFormulario : state.cliente.hideFormulario})
const DispatchToProps = dispatch => bindActionCreators({atualizarTela, modifyHideFormulario}, dispatch)
export default connect(mapStateToProps,DispatchToProps)(Cliente)