import React, { Component } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import If from '../template/if'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import {init, create, modifyHideFormulario, remove} from './clienteActions'


import axios from 'axios'

import Menu from '../template/menu'
import PageHeader from '../template/pageheader'
import Form from './clienteForm'
import List from './clienteList'


const URL = 'http://35.231.93.88:3003/api/oftalclinic/cliente'

class Cliente extends Component {
    componentWillMount(){
        this.props.init()
    }
    render() {
        return (
            <div>
                <Menu />
                <PageHeader name='Cliente' small='Verifique as informações dos clientes'></PageHeader>
                <If test={!this.props.hideFormulario}>
                <Form 
                    onSubmit={this.props.create} 
                    handleAddFormulario={this.props.modifyHideFormulario}
                    handleCancel={this.props.modifyHideFormulario}
                    />
                </If>
                <If test={this.props.hideFormulario}>
                <IconButton style='primary' icon='plus' legend='Adicionar cliente'
                    onClick={() => this.props.modifyHideFormulario() }  typebutton='button'></IconButton><br /><br />
                <List list={this.props.list}
                    handleRemove={this.props.remove} 
                     />
                </If>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({list : state.cliente.list, hideFormulario : state.cliente.hideFormulario})
const DispatchToProps = dispatch => bindActionCreators({init, create, modifyHideFormulario, remove}, dispatch)
export default connect(mapStateToProps,DispatchToProps)(Cliente)