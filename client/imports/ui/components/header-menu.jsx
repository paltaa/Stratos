import React from 'react'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'

const contextTypes = {
  location: React.PropTypes.object,
  router: React.PropTypes.object
}

export default class HeaderMenu extends React.Component {
  redirectContact () {
    this.context.router.push('/contacto')
  }
  redirectEmpresa() {
    this.context.router.push('/empresa')
  }
  redirectEquipo () {
    this.context.router.push('/equipo')
  }
  redirectContacto2 () {
    this.context.router.push('/contacto2')
  }
  redirectServicios () {
    this.context.router.push('/servicios')
  }
  redirectTienda () {
    this.context.router.push('/tienda')
  }
  redirectBlog () {
    this.context.router.push('/blog')
  }
  redirectExecutiveSearch(){
    this.context.router.push('/executivesearch')
  }


  render () {
    return (
      <div style={{marginTop: 5,}}>
        <IconMenu
          iconButtonElement={
            <FlatButton label='Nosotros' labelStyle={{color: 'white'}} />
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
          <MenuItem primaryText='Empresa' onTouchTap={this.redirectEmpresa.bind(this)} />
          <MenuItem primaryText='Equipo' onTouchTap={this.redirectEquipo.bind(this)} />
        </IconMenu>
        <FlatButton label='Servicios' labelStyle={{color: 'white'}} onTouchTap={this.redirectServicios.bind(this)} />
        <IconMenu
          iconButtonElement={
            <FlatButton label='Contacto' labelStyle={{color: 'white'}} />
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText='Clientes' onTouchTap={this.redirectContact.bind(this)} />
          <MenuItem primaryText='Candidatos' onTouchTap={this.redirectContacto2.bind(this)} />
        </IconMenu> 
                <FlatButton label='Tienda' labelStyle={{color: 'white'}} onTouchTap={this.redirectTienda.bind(this)} />
               <FlatButton label='Blog' labelStyle={{color: 'white'}} onTouchTap={this.redirectBlog.bind(this)} />

      </div>
    )
  }
}

HeaderMenu.contextTypes = contextTypes
