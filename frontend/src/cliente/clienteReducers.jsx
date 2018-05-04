const INITIAL_STATE = { hideFormulario: false, list: [] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CLIENTE_FETCHED':
            return { ...state, list: action.payload.data }
        case 'CLIENTE_STATUSFORM':
            return { ...state, hideFormulario: !state.hideFormulario }
        default:
            return state;
    }


}