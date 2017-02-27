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
  redirectSeminario1307 () {
    this.context.router.push('/seminario1307')
  }
  redirectZanelli1319 () {
    this.context.router.push('/zanelli1319')
  }

  render () {
    return (
      <div style={{marginTop: 5}}>
        <IconMenu
          iconButtonElement={
            <FlatButton label='Sedes' labelStyle={{color: 'white'}} />
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText='Seminario 1307' onTouchTap={this.redirectSeminario1307.bind(this)} />
          <MenuItem primaryText='Zanelli 1319' onTouchTap={this.redirectZanelli1319.bind(this)} />
          <MenuItem primaryText='Ex-Leñeria' />
        </IconMenu>
        <FlatButton label='Contacto' labelStyle={{color: 'white'}} onTouchTap={this.redirectContact.bind(this)} />
      </div>
    )
  }
}

HeaderMenu.contextTypes = contextTypes
