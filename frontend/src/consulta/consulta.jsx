import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import If from '../template/if'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { init, create, modifyHideFormulario, remove, SelecionarCliente, SelecionarMedico, SelecionarDataHora } from './consultaActions'

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'
import Form from './consultaForm'
import List from './consultaList'


class Consulta extends Component {
    componentWillMount() {
        this.props.init()
    }
    render() {
        return (
            <div>
                <Menu />
                <PageHeader name='Consulta' small='Agende sua consulta'></PageHeader>
                <If test={!this.props.hideFormulario}>
                    <Form medicos={this.props.medicos}
                        clientes={this.props.clientes}
                        datahora={this.props.datahora}
                        onSubmit={this.props.create}
                        handleAddFormulario={this.props.modifyHideFormulario}
                        handleCancel={this.props.modifyHideFormulario}
                        handleChangeCliente={this.props.SelecionarCliente}
                        handleChangeMedico={this.props.SelecionarMedico}
                        handleChangeDateTime={this.props.SelecionarDataHora}
                    />
                </If>
                <If test={this.props.hideFormulario}>
                    <IconButton style='primary' icon='plus' legend='Adicionar consulta'
                        onClick={() => this.props.modifyHideFormulario()} typebutton='button'></IconButton><br /><br />
                    <List list={this.props.list}
                        handleRemove={this.props.remove}
                    />
                </If>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    list: state.consulta.list
    , hideFormulario: state.consulta.hideFormulario
    , medicos: state.consulta.listMedicos
    , clientes: state.consulta.listCliente
    , datahora: state.consulta.dataHoraSelecionado
})
const DispatchToProps = dispatch => bindActionCreators({
    init, create
    , modifyHideFormulario
    , remove
    , SelecionarCliente
    , SelecionarMedico
    , SelecionarDataHora
}, dispatch)
export default connect(mapStateToProps, DispatchToProps)(Consulta)