import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Main from '../pages/index';
import Login from '../pages/login';

export default props => (
    <Router history={hashHistory}>
        <Route path='/index' component={Main} />
        <Route path='/login' component={Login} />
        <Redirect from='*' to='/index' />
    </Router>
)