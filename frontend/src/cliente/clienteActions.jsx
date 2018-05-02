import axios from 'axios'

const URL = 'http://35.231.93.88:3003/api/oftalclinic/cliente'

export function atualizarTela() {
    const request = axios.get(`${URL}?sort=-dataatualizacao`)
    return {
        type: 'CLIENTE_FETCHED',
        payload: request
    }
}

export function modifyHideFormulario(show = true) {
    return {
        type: 'CLIENTE_STATUSFORM',
        payload: !show
    }
}