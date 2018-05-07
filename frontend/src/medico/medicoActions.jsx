import axios from 'axios'
import { reset as resetForm, initialize } from 'redux-form'
import { toastr } from 'react-redux-toastr'

import Configuration from '../configuration'

const URL =  Configuration.UrlApi + 'medico'

export function read() {

    console.log('Read Medicos')

    return function action(dispatch) {
        const request = axios.get(`${URL}?sort=-dataatualizacao`)

        return request.then(
            response => dispatch(fetchOffersSuccess(response)),
            err => dispatch(fetchOffersError(err))
        );

    }
}

export function fetchOffersSuccess(response) {
    return {
        type: 'MEDICO_FETCHED',
        payload: response
    }
}

export function fetchOffersError(err) {
    return {
        type: 'MEDICO_FETCHED_ERROR',
        payload: err
    }
}


export function modifyHideFormulario() {
    return function action(dispatch) {
        dispatch({ type: 'MEDICO_STATUSFORM', payload : true })
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
        resetForm('medicoForm'),
        read()
    ]

}