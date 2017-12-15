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
    @autobind
  redirectGovernance() {
    this.context.router.push('/governance')
  }
    @autobind
  redirectLiderazgo () {
    this.context.router.push('/liderazgo')
  }
    @autobind
  redirectEvaluaciones () {
    this.context.router.push('/evaluaciones')
  }

    @autobind
  redirectEverythingDISC () {
    this.context.router.push('/everythingDISC')
  }

    @autobind
  redirectCoaching() {
    this.context.router.push('/coaching')
  }

//


  render () {
    return (
      <div>
      <BigTitle title='Servicios'   />
      <BigPhoto title='Executive Search' subtitle='' photo='/00.jpg' onTouchTap={this.redirectExecutiveSearch} />
      <BigPhoto title='Governance' subtitle='' photo='/01.jpg' onTouchTap={this.redirectGovernance} />
      <BigPhoto title='Liderazgo' subtitle='' photo='/02.jpg' onTouchTap={this.redirectLiderazgo} />
      <BigPhoto title='Evaluaciones' subtitle='' photo='/03.jpg' onTouchTap={this.redirectEvaluaciones} />
      <BigPhoto title='Everything DISC' subtitle='' photo='/04.jpg' onTouchTap={this.redirectEverythingDISC} />
      <BigPhoto title='Coaching' subtitle='' photo='/05.jpg' onTouchTap={this.redirectCoaching} />



      </div>
    )
  }
}

Home.contextTypes = contextTypes
