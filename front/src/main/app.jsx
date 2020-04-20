import 'modules/bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import RtHeader from '../components/header';
import RtFooter from '../components/footer';
import Routes from './routes'

export default props => (
    <div className='container'>
        <RtHeader />
        <Routes />
        <RtFooter />
    </div>
)