import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'


let UsuarioForm = props => {
    const { handleSubmit } = props

    return (
        <div>
            
                <form role='form' onSubmit={handleSubmit}  >
                    <div className='row'>
                        <Grid cols='12 4 5'>
                            <label>Nome:</label>
                            <Field name='nome' component='input' className='form-control' placeholder='Digite o seu nome' />
                        </Grid>
                    </div>
                    <div className='row'>          
                        <Grid cols='12 4 5'>
                            <label>E-mail:</label>
                            <Field name='email' component='input' className='form-control'
                                placeholder='Digite seu e-mail' />
                        </Grid>
                    </div>
                    <div className='row'>
                        <Grid cols='12 2 2'>
                            <label>Senha:</label>
                            <Field name='senha' component='input' type='password' className='form-control'
                                placeholder='Digite a senha'   />
                        </Grid>
                    </div>
                    <div className='row'>
                        <Grid cols='12 2 2'>
                            <label>Tipo:</label>
                            <Field name='tipo' component='select' className='form-control'>
                            <option value="Atendente">Atendente</option>
                            <option value="Medico">Médico</option>
                            <option value="Administrador">Administrador</option>
                            </Field>
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

export default reduxForm({ form: 'usuarioForm' })(UsuarioForm)
