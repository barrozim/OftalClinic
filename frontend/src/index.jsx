import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'

import RootReducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(RootReducers, devTools)

ReactDOM.render(
<Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
</Provider>
, document.getElementById('app'))