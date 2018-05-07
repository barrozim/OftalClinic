import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { createTextMask } from 'redux-form-input-masks';

let MedicoForm = props => {

    const { handleSubmit } = props

    const CelphoneMask = createTextMask({
        pattern: '(99)99999-9999',
    });
    return (
        <form role='form' onSubmit={handleSubmit}  >
            <div className='row'>
                <Grid cols='12 9 10'>
                    <label>Nome:</label>
                    <Field name='nome' component='input' className='form-control'
                        placeholder='Digite o seu nome' />
                </Grid>
            </div>
            <div className='row'>
                <Grid cols='12 4 5'>
                    <label>E-mail:</label>
                    <Field name='email' component='input' className='form-control'
                        placeholder='Digite seu e-mail' />
                </Grid>
                <Grid cols='12 4 5'>
                    <label>Celular:</label>
                    <Field name='telefonecelular' component='input' className='form-control'
                        placeholder='Digite o número do celular (85)99999-9999' />
                </Grid>
            </div>
            <div className='row'>
                <Grid cols='12 4 5'>
                    <label>CRM:</label>
                    <Field name='crm' className='form-control' component='input'
                        placeholder='Digite o CRM' />
                </Grid>
                <Grid cols='12 4 5'>
                    <label>Especialidades:</label>
                    <Field name='especialidade' className='form-control' component='input'
                        placeholder='Digite a especialidade' />
                </Grid>
            </div>
            <br />
            <div className='row'>
                <Grid cols='4 4 4'>
                    <IconButton style='danger' icon='clear' legend='Cancelar'
                        onClick={props.handleCancel}></IconButton>&nbsp;
            <IconButton style='primary' icon='save' legend='Salvar' typebutton='submit'
                        onClick={props.handleAdd}></IconButton>
                </Grid>
            </div>
            <br />
        </form>
    )
}

export default reduxForm({ form: 'medicoForm' })(MedicoForm)