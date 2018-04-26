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
        <Grid cols='12 9 10'>
        <label>E-mail:</label>
            <input id='email' className='form-control'
                placeholder='Digite seu e-mail'
                onChange={props.handleChangeEmail}
                value={props.email}></input>
        </Grid>
        <Grid cols='12 9 10'>
        <label>Celular:</label>
            <input id='telefonecelular' className='form-control' 
                placeholder='Digite o número do celular (85)99999-9999'
                onChange={props.handleChangeCelular}
                value={props.senha}></input>
        </Grid>
        <Grid cols='12 9 10'>
        <label>CRM:</label>
            <input id='crm' className='form-control' 
                placeholder='Digite o CRM'
                onChange={props.handleChangeCRM}
                value={props.senha}></input>
        </Grid>
        <Grid cols='12 9 10'>
        <label>Especialidades:</label>
            <input id='especialidade' className='form-control' 
                placeholder='Digite a especialidade'
                onChange={props.handleChangeEspecialidade}
                value={props.senha}></input>
        </Grid>
        <br />
        <Grid cols='12 3 2'>
        <IconButton style='danger' icon='clear' legend='Cancelar'
                onClick={props.handleCancel}></IconButton>&nbsp;
            <IconButton style='primary' icon='save' legend='Salvar'
                onClick={props.handleAdd}></IconButton>
        </Grid>
        <br />
    </div>
    </If>
    <If test={props.hideFormulario}>
    <IconButton style='primary' icon='plus' legend='Adicionar médico'
                onClick={props.handleAddFormulario}></IconButton><br /><br />
    </If>
    </div>
)