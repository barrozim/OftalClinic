import {combineReducers} from 'redux'

import clienteReducers from '../cliente/clienteReducers'
import consultaReducers from '../consulta/consultaReducers'
import medicoReducers from '../medico/medicoReducers'
import usuarioReducers from '../usuario/usuarioReducers'

const rootReducer = combineReducers({
    cliente : clienteReducers,
    medicos : medicoReducers,
    usuario : usuarioReducers,
    consulta : consultaReducers
})


export default rootReducer