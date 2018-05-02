const INITIAL_STATE = { hideFormulario: true, list: [] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CLIENTE_FETCHED':
            return { ...state, list: action.payload.data }
        case 'CLIENTE_STATUSFORM':
            return { ...state, hideFormulario: action.payload }
        default:
            return state;
    }


}