import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

import clienteReducers from '../cliente/clienteReducers'
import consultaReducers from '../consulta/consultaReducers'
import medicoReducers from '../medico/medicoReducers'
import usuarioReducers from '../usuario/usuarioReducers'

const rootReducer = combineReducers({
    cliente : clienteReducers,
    medico : medicoReducers,
    usuario : usuarioReducers,
    consulta : consultaReducers,
    form : formReducer,
    toastr : toastrReducer
})


export default rootReducer