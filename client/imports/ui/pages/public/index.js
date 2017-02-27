import React from 'react'
import {Route, IndexRoute} from 'react-router'
import PublicPages from '../../layouts/public-pages'
import Home from './home'
import Contacto from './contacto'
import Seminario1307 from './seminario1307'
import Zanelli1319 from './zanelli1319'
export default (
  <Route path='/' component={PublicPages}>
    <Route path='contacto' component={Contacto} />
    <Route path='seminario1307' component={Seminario1307} />
    <Route path='zanelli1319' component={Zanelli1319} />
    <IndexRoute component={Home} />
  </Route>
)
