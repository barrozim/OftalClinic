import axios from 'axios'
import { reset as resetForm, initialize } from 'redux-form'
import { toastr } from 'react-redux-toastr'

import Configuration from '../configuration'

const URL = Configuration.UrlApi + 'consulta'
const URLMEDICO = Configuration.UrlApi + 'medico'
const URLCLIENTE = Configuration.UrlApi + 'cliente'

export function read() {
    return function action(dispatch) {
        const request = axios.get(`${URL}?sort=-dataatualizacao&populate=medicoId&populate=clienteId`)

        return request.then(
            response => dispatch(fetchOffersSuccess('CONSULTA_FETCHED', response)),
            err => dispatch(fetchOffersError('CONSULTA_FETCHED_ERROR',err))
        );

    }
}

export function fetchOffersSuccess(type, response) {
    return {
        type: type,
        payload: response
    }
}

export function fetchOffersError(type, err) {
    return {
        type: type,
        payload: err
    }
}


export function modifyHideFormulario() {
    return function action(dispatch) {
        dispatch({ type: 'CONSULTA_STATUSFORM', payload: true })
    }
}

export function remove(obj) {
    return function action(dispatch) {
        axios.delete(`${URL}/${obj._id}`)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                Object.keys(e.response.data.errors).forEach(error => toastr.error('Erro', e.response.data.errors[error].message))
            })
    }
}

export function create(values) {
    return dispatch => {
        var json = {
            clienteId: this.state.listCliente.find(c => c._id == values.clienteId)
            , medicoId: this.state.listMedicos.find(c => c._id == values.medicoId)
            , datahora: values.datahora
        }

        axios.post(`${URL}consulta`, json)
            .then(resp => this.atualizarTela(true))


        axios.post(URL, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch([
                    init(),
                    modifyHideFormulario()
                ])
            })
            .catch(e => {
                Object.keys(e.response.data.errors).forEach(error => toastr.error('Erro', e.response.data.errors[error].message))
            })

    }
}


export function init() {
    return [
        resetForm('consultaForm'),
        read()
    ]

}

export function readcliente() {
    return function action(dispatch) {
        const request  = axios.get(URLCLIENTE)
        return request.then(
            response => dispatch(fetchOffersSuccess('CONSULTA_CLIENTE_FETCHED', response)),
            err => dispatch(fetchOffersError('CONSULTA_CLIENTE_FETCHED_ERROR',err))
        );
    }
}

export function readmedico() {
    return function action(dispatch) {
        const request  = axios.get(URLMEDICO)
        return request.then(
            response => dispatch(fetchOffersSuccess('CONSULTA_MEDICO_FETCHED', response)),
            err => dispatch(fetchOffersError('CONSULTA_MEDICO_FETCHED_ERROR',err))
        );
    }
}