import React from 'react'
import AppBar from 'material-ui/AppBar'
import HeaderMenu from '../components/header-menu'
import Footer from '../components/footer'

const contextTypes = {
  location: React.PropTypes.object,
  router: React.PropTypes.object
}

export default class PublicPages extends React.Component {
  render () {
    return (
      <div>
        <AppBar
          title={
            <div
              style={{
                backgroundImage: 'url(/logo.png)',
                backgroundSize: 'contain',
                backgroundPosition: 'left',
                backgroundRepeat: 'no-repeat',
                height: '100%'
              }}
              onTouchTap={() => this.context.router.push('/')}
            >
                &nbsp;
            </div>
          }
          iconElementLeft={<div>&nbsp;</div>}
          iconElementRight={<HeaderMenu />}
          style={{position: 'fixed'}}
        />
        <div style={{paddingTop: 64}}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

PublicPages.contextTypes = contextTypes
