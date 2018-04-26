import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment';

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'
import Form from './Form'
import List from './List'

import Cliente from '../cliente/index'


const URL = 'http://localhost:3003/api/oftalclinic/'

export default class Usuario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clienteId: '', medicoId: '', datahora: moment(), hideFormulario: true,
            list: [], listCliente: [], listMedicos: []
        }
        this.handleChangeCliente = this.handleChangeCliente.bind(this)
        this.handleChangeMedico = this.handleChangeMedico.bind(this)
        this.handleChangeDataHora = this.handleChangeDataHora.bind(this)

        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleAddFormulario = this.handleAddFormulario.bind(this)
        this.handleChangeDateTime = this.handleChangeDateTime.bind(this)

        this.clienteAjaxFetch = this.clienteAjaxFetch.bind(this)
        this.medicosAjaxFetch = this.medicosAjaxFetch.bind(this)


        this.atualizarTela()
    }

    atualizarTela(add = true) {
        axios.get(`${URL}consulta?sort=-dataatualizacao`)
            .then(resp => this.setState({
                ...this.state, list: resp.data, hideFormulario: add, datahora : moment()
            }))

        this.clienteAjaxFetch()

        this.medicosAjaxFetch()
    }

    handleChangeCliente(e) {
        this.setState({ ...this.state, clienteId: e.id })
    }

    handleChangeMedico(e) {
        this.setState({ ...this.state, medicoId: e.id })
    }

    handleChangeDataHora(e) {
        this.setState({ ...this.state, datahora: e.target.value })
    }

    handleAdd() {
        axios.post(`${URL}consulta`, this.state)
            .then(resp => this.atualizarTela(true))
    }

    handleChangeDateTime(date){
        console.log(date)
        this.setState({...this.state, datahora: date })
    }

    handleRemove(obj) {
        axios.delete(`${URL}consulta/${obj._id}`)
            .then(resp => this.atualizarTela())
    }
    handleCancel() {
        this.setState({ ...this.state, hideFormulario: true })
    }

    handleAddFormulario() {
        this.setState({ ...this.state, hideFormulario: false })
    }

    clienteAjaxFetch() {
        axios.get(`${URL}cliente`)
            .then(resp => this.setState({
                ...this.state, listCliente: resp.data
            }))
    }

    medicosAjaxFetch() {
        axios.get(`${URL}medico`)
            .then(resp => this.setState({
                ...this.state, listMedicos: resp.data
            }))
    }
    render() {
        return (
            <div>
                <Menu />
                <PageHeader name='Consulta' small='Agende sua consulta'></PageHeader>
                <Form
                    handleChangeCliente={this.handleChangeCliente}
                    handleChangeMedico={this.handleChangeMedico}
                    handleChangeDataHora={this.handleChangeDataHora}
                    handleAdd={this.handleAdd}
                    handleAddFormulario={this.handleAddFormulario}
                    hideFormulario={this.state.hideFormulario}
                    handleCancel={this.handleCancel}
                    listCliente={this.state.listCliente}
                    listMedicos={this.state.listMedicos}
                    handleChangeDateTime={this.handleChangeDateTime}
                    datahora={this.state.datahora}
                />
                <List list={this.state.list}
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}
