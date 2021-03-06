import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

import Routes from './routes'
import Message from '../template/messages'


export default props => (
    <div className='container-fluid animate'>
        <Routes />
        <Message />
    </div>
)
