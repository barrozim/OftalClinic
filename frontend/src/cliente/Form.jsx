import React, {Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import InputMask from 'react-input-mask';

import If from '../template/if'

export default props => (
    <div>
    <If test={!props.hideFormulario}>
    <div role='form' className='todoForm'>
    <div className='row'>
        <Grid cols='12 4 5'>
            <label>Nome:</label>
            <input id='nome' className='form-control'
                placeholder='Digite o seu nome'
                onChange={props.handleChangeNome}
                value={props.nome}></input>
        </Grid>
        <Grid cols='12 3 2'>
            <label>CPF:</label>
            <InputMask id='cpf' mask="999.999.999-99" className='form-control'
                placeholder='Digite o cpf'
                onChange={props.handleChangeNome}
                value={props.nome}></InputMask>
        </Grid>
        <Grid cols='12 2 2'>
            <label>Rg:</label>
            <input id='rg' className='form-control'
                placeholder='Digite o rg'
                onChange={props.handleChangeNome}
                value={props.nome}></input>
        </Grid>
        <Grid cols='12 2 2'>
            <label>Data de Nascimento:</label>
            <input id='datanascimento' className='form-control'
                placeholder='Digite a data de nascimento'
                onChange={props.handleChangeNome}
                value={props.nome}></input>
        </Grid>
        </div>
        <div className='row'>
        <Grid cols='12 3 4'>
        <label>Endereço:</label>
            <input id='logradouro' className='form-control'
                placeholder='Digite seu endereço'
                onChange={props.handleChangeEmail}
                value={props.email}></input>
        </Grid>
        <Grid cols='12 1 1'>
        <label>Número:</label>
            <input id='numerologradouro' className='form-control'
                placeholder='Digite seu número'
                onChange={props.handleChangeEmail}
                value={props.email}></input>
        </Grid>
        <Grid cols='12 2 2'>
        <label>Bairro:</label>
            <input id='bairro' className='form-control'
                placeholder='Digite seu bairro'
                onChange={props.handleChangeEmail}
                value={props.email}></input>
        </Grid>
        <Grid cols='12 2 2'>
        <label>Cidade:</label>
            <input id='cidade' className='form-control'
                placeholder='Digite sua cidade'
                onChange={props.handleChangeEmail}
                value={props.email}></input>
        </Grid>
        <Grid cols='12 2 2'>
        <label>Estado:</label>
            <input id='estado' className='form-control'
                placeholder='Digite seu estado'
                onChange={props.handleChangeEmail}
                value={props.email}></input>
        </Grid>
        </div>
        <div className='row'>
        <Grid cols='12 4 5'>
        <label>E-mail:</label>
            <input id='email' className='form-control'
                placeholder='Digite seu e-mail'
                onChange={props.handleChangeEmail}
                value={props.email}></input>
        </Grid>
        <Grid cols='12 2 2'>
        <label>Celular:</label>
            <InputMask mask="(99)99999-9999"  id='telefone1' className='form-control' 
                placeholder='(99)99999-9999'
                onChange={props.handleChangeTelefone1}
                value={props.senha}></InputMask>
        </Grid>
        <Grid cols='12 2 2'>
        <label>Residencial:</label>
            <InputMask mask="(99)9999-9999"  id='telefone2' className='form-control' 
                placeholder='(99)9999-9999'
                onChange={props.handleChangeTelefone1}
                value={props.senha}></InputMask>
        </Grid>
        <Grid cols='12 2 2'>
        <label>Encaminhado por:</label>
            <input  id='encaminhadopord' className='form-control' 
                placeholder='Quem lhe encaminhou?'
                onChange={props.handleChangeTelefone1}
                value={props.senha}></input>
        </Grid>
        </div>
        <br />
        <div className='row'>
        <Grid cols='4 4 4'>
        <IconButton style='danger' icon='clear' legend='Cancelar'
                onClick={props.handleCancel}></IconButton>
                <IconButton style='primary' icon='save' legend='Salvar'
                onClick={props.handleAdd}></IconButton>
        </Grid>       
        
        </div>
        <br />
    </div>
    </If>
    <If test={props.hideFormulario}>
    <IconButton style='primary' icon='plus' legend='Adicionar cliente'
                onClick={props.handleAddFormulario} ></IconButton><br /><br />
    </If>
    </div>
)