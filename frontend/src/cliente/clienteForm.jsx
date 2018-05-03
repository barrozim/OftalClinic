import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { createTextMask } from 'redux-form-input-masks';



let ClienteForm = props => {
    const { handleSubmit } = props

    const CelphoneMask = createTextMask({
        pattern: '(99)99999-9999',
    });

    const HomephoneMask = createTextMask({
        pattern: '(99)9999-9999',
    });

    const CpfMask = createTextMask({
        pattern: '999.999.999-99',
    });

    const DateMask = createTextMask({
        pattern: '99/99/9999',
    });

    return (
        <div>
            
                <form role='form' onSubmit={handleSubmit}  >
                    <div className='row'>
                        <Grid cols='12 4 5'>
                            <label>Nome:</label>
                            <Field name='nome' component='input' className='form-control' placeholder='Digite o seu nome' />
                        </Grid>
                        <Grid cols='12 3 2'>
                            <label>CPF:</label>
                            <Field name='cpf' component='input' className='form-control'
                                placeholder='Digite o cpf' {...CpfMask}
                            />
                        </Grid>
                        <Grid cols='12 2 2'>
                            <label>Rg:</label>
                            <Field name='rg' component='input' className='form-control'
                                placeholder='Digite o rg'
                            />
                        </Grid>
                        <Grid cols='12 2 2'>
                            <label>Data de Nascimento:</label>
                            <Field name='datanascimento' component='input' className='form-control'
                                placeholder='Digite a data de nascimento' {...DateMask}
                            />
                        </Grid>
                    </div>
                    <div className='row'>
                        <Grid cols='12 3 4'>
                            <label>Endereço:</label>
                            <Field name='logradouro' component='input' className='form-control'
                                placeholder='Digite seu endereço' />
                        </Grid>
                        <Grid cols='12 1 1'>
                            <label>Número:</label>
                            <Field name='numerologradouro' component='input' className='form-control'
                                placeholder='Digite seu número' />
                        </Grid>
                        <Grid cols='12 2 2'>
                            <label>Bairro:</label>
                            <Field name='bairro' component='input' className='form-control'
                                placeholder='Digite seu bairro' />
                        </Grid>
                        <Grid cols='12 2 2'>
                            <label>Cidade:</label>
                            <Field name='cidade' component='input' className='form-control'
                                placeholder='Digite sua cidade' />
                        </Grid>
                        <Grid cols='12 2 2'>
                            <label>Estado:</label>
                            <Field name='estado' component='input' className='form-control'
                                placeholder='Digite seu estado' />
                        </Grid>
                    </div>
                    <div className='row'>
                        <Grid cols='12 4 5'>
                            <label>E-mail:</label>
                            <Field name='email' component='input' className='form-control'
                                placeholder='Digite seu e-mail' />
                        </Grid>
                        <Grid cols='12 2 2'>
                            <label>Celular:</label>
                            <Field name='telefone1' component='input' className='form-control'
                                placeholder='(99)99999-9999'  {...CelphoneMask} />
                        </Grid>
                        <Grid cols='12 2 2'>
                            <label>Residencial:</label>
                            <Field name='telefone2' component='input' className='form-control'
                                placeholder='(99)9999-9999'  {...HomephoneMask} />
                        </Grid>
                        <Grid cols='12 2 2'>
                            <label>Encaminhado por:</label>
                            <Field name='encaminhadopord' component='input' className='form-control'
                                placeholder='Quem lhe encaminhou?' />
                        </Grid>
                    </div>
                    <br />
                    <div className='row'>
                        <Grid cols='4 4 4'>
                            <IconButton style='danger' icon='clear' legend='Cancelar'
                                onClick={props.handleCancel}></IconButton>
                            <IconButton style='primary' icon='save' legend='Salvar' typebutton='submit'
                                onClick={props.handleAdd}></IconButton>
                        </Grid>

                    </div>
                    <br />
                </form>

            
        </div>
    )
}

export default reduxForm({ form: 'clienteForm' })(ClienteForm)
