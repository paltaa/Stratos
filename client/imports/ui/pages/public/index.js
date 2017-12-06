import React from 'react'
import {Route, IndexRoute} from 'react-router'
import PublicPages from '../../layouts/public-pages'
import Home from './home'
import Contacto from './contacto'
import Contacto2 from './contacto2'
import Empresa from './empresa'
import Equipo from './equipo'
import Tienda from './tienda'
import Blog from './blog'
import Servicios from './servicios'


export default (
  <Route path='/' component={PublicPages}>
    <Route path='contacto' component={Contacto} />
    <Route path='contacto2' component={Contacto2} />
    <Route path= 'empresa' component={Empresa} />
    <Route path='equipo' component={Equipo} />
    <Route path='servicios' component={Servicios} />
    <Route path='tienda' component={Tienda} />
    <Route path='equipo' component={Equipo} />

    <IndexRoute component={Home} />
  </Route>
)
