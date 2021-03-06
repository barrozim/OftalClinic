const INITIAL_STATE = { hideFormulario: true, list: [] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'MEDICO_FETCHED':
            return { ...state, list: action.payload.data }
        case 'MEDICO_STATUSFORM':
            return { ...state, hideFormulario: !state.hideFormulario }
        default:
            return state;
    }
}