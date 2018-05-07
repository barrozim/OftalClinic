const INITIAL_STATE = { hideFormulario: true, list: [], listCliente: [], listMedicos: [] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CONSULTA_FETCHED':
            return { ...state, list: action.payload.data }
        case 'CONSULTA_STATUSFORM':
            return { ...state, hideFormulario: !state.hideFormulario }
        case 'CONSULTA_CLIENTE_FETCHED':
            return { ...state, listCliente: action.payload.data }
        case 'CONSULTA_MEDICO_FETCHED':
            return { ...state, list: action.payload.data }
        default:
            return state;
    }


}