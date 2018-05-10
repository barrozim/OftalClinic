import moment from 'moment';


const INITIAL_STATE = {
    hideFormulario: true
    , list: []
    , listCliente: []
    , listMedicos: []
    , medicoSelecionado: null
    , clienteSelecionado: null
    , dataHoraSelecionado : moment()
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CONSULTA_FETCHED':
            return { ...state, list: action.payload.data }
        case 'CONSULTA_STATUSFORM':
            return { ...state, hideFormulario: !state.hideFormulario }
        case 'CONSULTA_CLIENTE_FETCHED':
            return { ...state, listCliente: action.payload.data }
        case 'CONSULTA_MEDICO_FETCHED':
            return { ...state, listMedicos: action.payload.data }
        case 'CONSULTA_SELECTED_MEDICO':
            return { ...state, medicoSelecionado: action.payload }
        case 'CONSULTA_SELECTED_CLIENTE':
            return { ...state, clienteSelecionado: action.payload }
        case 'CONSULTA_SELECTED_HORA':
            return { ...state, dataHoraSelecionado: action.payload }
        default:
            return state;
    }


}