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
import ExecutiveSearch from './executivesearch'
import Liderazgo from './liderazgo'
import Evaluaciones from './evaluaciones'
import EverythingDISC from './everythingDISC'
import Coaching from './coaching'


export default (
  <Route path='/' component={PublicPages}>
    <Route path='contacto' component={Contacto} />
    <Route path='blog' component={Blog} />
    <Route path='executivesearch' component={ExecutiveSearch} />
    <Route path='contacto2' component={Contacto2} />
    <Route path= 'empresa' component={Empresa} />
    <Route path='equipo' component={Equipo} />
    <Route path='servicios' component={Servicios} />
    <Route path='tienda' component={Tienda} />
    <Route path='equipo' component={Equipo} />
   <Route path='governance' component={Governance}/>
   <Route path='liderazgo' component={Liderazgo}/>
   <Route path='evaluaciones' component={Evaluaciones}/>
   <Route path='everythingDISC' component={EverythingDISC}/>
   <Route path='coaching' component={Coaching}/>


    <IndexRoute component={Home} />
  </Route>
)

