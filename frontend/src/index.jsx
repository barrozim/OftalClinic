import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import promise from 'redux-promise'

import App from './main/app'

import RootReducers from './main/reducers'

const store = applyMiddleware(promise)(createStore)(RootReducers)

ReactDOM.render(
<Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
</Provider>
, document.getElementById('app'))