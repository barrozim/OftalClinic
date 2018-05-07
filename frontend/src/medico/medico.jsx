import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import If from '../template/if'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { init, create, modifyHideFormulario, remove } from './medicoActions'

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'
import Form from './medicoForm'
import List from './medicoList'

class Medico extends Component {
    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <Menu />
                <PageHeader name='Médico' small='Administre a lista de médicos'></PageHeader>
                <If test={!this.props.hideFormulario}>
                    <Form
                        onSubmit={this.props.create}
                        handleAddFormulario={this.props.modifyHideFormulario}
                        handleCancel={this.props.modifyHideFormulario}
                    />
                </If>
                <If test={this.props.hideFormulario}>
                    <IconButton style='primary' icon='plus' legend='Adicionar cliente'
                        onClick={() => this.props.modifyHideFormulario()} typebutton='button'></IconButton><br /><br />
                    <List list={this.props.list}
                        handleRemove={this.handleRemove}
                    />
                </If>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.medico.list, hideFormulario: state.medico.hideFormulario })
const DispatchToProps = dispatch => bindActionCreators({ init, create, modifyHideFormulario, remove }, dispatch)
export default connect(mapStateToProps, DispatchToProps)(Medico)