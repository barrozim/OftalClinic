import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'


import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import ReactSuperSelect from 'react-super-select'

import DatePicker from 'react-datepicker'

import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import If from '../template/if'

let ConsultaForm = props => {
    const { handleSubmit } = props

    return (
        <form role='form' onSubmit={handleSubmit} >
            <Grid cols='12 9 10'>
            <label>Selecione o paciente:</label>
            <ReactSuperSelect placeholder="Clique para visualizar a lista de clientes"
                dataSource={props.listCliente}
                onChange={props.handleChangeCliente}
                searchable={true} optionLabelKey='nome'
                optionValueKey='_id'
                clearable={false}
                searchPlaceholder='Pesquisar'
                closeOnSelectedOptionClick={false}
                deselectOnSelectedOptionClick={false}
            />
        </Grid>
        <Grid cols='12 9 10'>
            <label>Selecione o médico:</label>
            <ReactSuperSelect placeholder="Clique para visualizar a lista de médicos"
                dataSource={props.listMedicos}
                onChange={props.handleChangeMedico}
                searchable={true} optionLabelKey='nome'
                optionValueKey='_id'
                clearable={false}
                searchPlaceholder='Pesquisar'
                closeOnSelectedOptionClick={false}
                deselectOnSelectedOptionClick={false}
            />
        </Grid>
        <Grid cols='12 9 10'>
            <label>Data e Hora:</label>
            <DatePicker
                selected={props.datahora}
                onChange={props.handleChangeDateTime}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="DD/MM/YYYY HH:mm"
                timeCaption="time"
                className='form-control'
            />
        </Grid>
        <br />
        <Grid cols='4 4 4'>
            <IconButton style='danger' icon='clear' legend='Cancelar'
                onClick={props.handleCancel}></IconButton>&nbsp;
            <IconButton style='primary' icon='save' legend='Salvar'
                onClick={props.handleAdd}></IconButton>
        </Grid>
            <br />

            <IconButton style='primary' icon='calendar' legend='Marca consulta'
                onClick={props.handleAddFormulario}></IconButton><br /><br />
        </form>
    )
}


export default reduxForm({ form: 'consultaForm' })(ConsultaForm)