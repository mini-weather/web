import React from 'react'

import {
    Switch,
    Route,
    Router
} from 'react-router-dom'
import Home from '../containers/home/component';
import history from './history'

export default (
    <Router history={history}>
        <Switch>
            <Route path='/' exact component={Home} />
        </Switch>
    </Router>
)
