import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import If from '../template/if'

export default props => (
    <div>
    <If test={!props.hideFormulario}>
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <label>Nome:</label>
            <input id='nome' className='form-control'
                placeholder='Digite o seu nome'
                onChange={props.handleChangeNome}
                value={props.nome}></input>
        </Grid>
        <Grid cols='12 4 5'>
        <label>E-mail:</label>
            <input id='email' className='form-control'
                placeholder='Digite seu e-mail'
                onChange={props.handleChangeEmail}
                value={props.email}></input>
        </Grid>
        <Grid cols='12 4 5'>
        <label>Senha:</label>
            <input id='senha' className='form-control' type='password'
                placeholder='Digite a sua senha'
                onChange={props.handleChangeSenha}
                value={props.senha}></input>
        </Grid>
        <br />
        <Grid cols='4 4 4'>
        <IconButton style='danger' icon='clear' legend='Cancelar'
                onClick={props.handleCancel}></IconButton>&nbsp;
            <IconButton style='primary' icon='save' legend='Salvar'
                onClick={props.handleAdd}></IconButton>
        </Grid>
        <br />
    </div>
    </If>
    <If test={props.hideFormulario}>
    <IconButton style='primary' icon='plus' legend='Adicionar usuário'
                onClick={props.handleAddFormulario}></IconButton><br /><br />
    </If>
    </div>
)