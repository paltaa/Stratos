import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
/* import admin from './admin/index'
import news from './news/index'
import surveys from './surveys/index'
import votings from './votings/index' */
import Auth from './auth'
import Admin from './admin'
import Root from '../layouts/root'
import Public from './public/index'

// Load routes in here
render((
  <Router history={browserHistory}>
    <Route component={Root}>
      {Public}
      {Auth}
      {Admin}
    </Route>
  </Router>
), document.getElementById('react-root'))
