import React from 'react'
import BigTitle from '../../components/big-title'
import Text from '../../components/text'
import YellowButton from '../../components/yellowbutton'
import BigPhoto from '../../components/Bigphoto'
import autobind from 'autobind-decorator'
{/*  import Logos from '../../components/logos'  */ }

const contextTypes = {
  location: React.PropTypes.object,
  router: React.PropTypes.object
}
export default class Home extends React.Component {
  @autobind
  redirectContacto2 () {
    this.context.router.push('/contacto2')
  }


//


  render () {
    return (
      <div>
      <BigTitle title='Servicios'   />
      <BigPhoto title='Executive Search' subtitle='' photo='/00.jpg' onTouchTap={this.redirectExecutiveSearch} />
      <BigPhoto title='Governance' subtitle='' photo='/01.jpg' onTouchTap={this.redirectExecutiveSearch} />
      <BigPhoto title='Liderazgo' subtitle='' photo='/02.jpg' onTouchTap={this.redirectExecutiveSearch} />
      <BigPhoto title='Evaluaciones' subtitle='' photo='/03.jpg' onTouchTap={this.redirectExecutiveSearch} />
      <BigPhoto title='Everything DISC' subtitle='' photo='/04.jpg' onTouchTap={this.redirectExecutiveSearch} />
      <BigPhoto title='Coaching' subtitle='' photo='/05.jpg' onTouchTap={this.redirectExecutiveSearch} />



      </div>
    )
  }
}

Home.contextTypes = contextTypes
