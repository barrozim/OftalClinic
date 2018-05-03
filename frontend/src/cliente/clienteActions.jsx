import axios from 'axios'
import { reset as resetForm, initialize } from 'redux-form'
import { toastr } from 'react-redux-toastr'

const URL = 'http://35.231.93.88:3003/api/oftalclinic/cliente'

const INITIAL_VALUES = { hideFormulario: false, list: [] }

export function getList() {
    const request = axios.get(`${URL}?sort=-dataatualizacao`)
    return {
        type: 'CLIENTE_FETCHED',
        payload: request
    }
}

export function modifyHideFormulario() {
    return {
        type: 'CLIENTE_STATUSFORM'
    }
}

export function remove(obj){
    axios.delete(`${URL}/${obj._id}`)
    .then(resp => {
        toastr.success('Sucesso', 'Operação Realizada com sucesso.')
        dispatch([
            init()
        ])
    })
    .catch(e => {
        Object.keys(e.response.data.errors).forEach(error => toastr.error('Erro',e.response.data.errors[error].message))
    })
}

export function create(values)
{
    return dispatch => {
     axios.post(URL, values)
    .then(resp => {
        toastr.success('Sucesso', 'Operação Realizada com sucesso.')
        dispatch([
            init()
        ])
    })
    .catch(e => {
        Object.keys(e.response.data.errors).forEach(error => toastr.error('Erro',e.response.data.errors[error].message))
    })

    }
}


export function init(){
    return [
        resetForm('clienteForm'),
        getList(),
        initialize('clientForm', INITIAL_VALUES),
        modifyHideFormulario()
    ]

}