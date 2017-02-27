import React from 'react'
import BigTitle from '../../components/big-title'
import Text from '../../components/text'
import YellowButton from '../../components/yellowbutton'
import BigPhoto from '../../components/Bigphoto'
import autobind from 'autobind-decorator'

const contextTypes = {
  location: React.PropTypes.object,
  router: React.PropTypes.object
}

export default class Home extends React.Component {
  @autobind
  redirectSeminario1307 () {
    this.context.router.push('/seminario1307')
  }

  @autobind
  redirectZanelli1319 () {
    this.context.router.push('/zanelli1319')
  }

  render () {
    return (
      <div>
        <BigTitle title='KILL THE BOSS' />
        <Text text='
          Leñeria es un espacio de trabajo que potencia la ejecución de ideas y la diversión. Somos una comunidad hambrienta por crear, explorar, colaborar y crecer. Leñeria no es otro cowork, lugar de eventos o makerspace. Desde nuestro inicio en 2012 no hemos parado de evolucionar, cambiar, mover y rehacer. Ese es el espíritu que nos define y que refleja a nuestra comunidad.'
          style={{margin: '80px auto'}}
        />
        <BigTitle title='¿TE INTERESA ARRENDAR UN ESPACIO DE TRABAJO EN LEÑERIA?' small />
        <div style={{textAlign: 'center'}}>
          <YellowButton text='Agenda una visita hoy' />
        </div>
        <br />
        <br />
        <br />
        <div className='row container'>
          <div className='col-md-6 col-xs-12' style={{textAlign: 'center'}}>
            <img src='/fotohome1.jpg' />
            <br />
            <br />
            <BigTitle title='ESPACIOS DE TRABAJO PRIVADOS & AREAS COMUNES' small style={{fontSize: '13.5px'}} />
            <Text text='Nuestros espacios te dan la libertad y privacidad para trabajar libre de distracciones. Al mismo tiempo contamos con áreas comunes donde podrás reunirte, relajarte y convivir con profesionales y creadores de diversas disciplinas.' />

          </div>
          <div className='col-md-6 col-xs-12' style={{textAlign: 'center'}}>
            <img src='/fotohome2.jpg' />
            <br />
            <br />
            <BigTitle title='COMUNIDAD DE TRABAJO INDEPENDIENTE' small style={{fontSize: '13.5px'}} />
            <Text text='Leñeria es una red social física conformada por arquitectos, diseñadores, fotógrafos, ingenieros, ciclistas, audiovisuales, programadores y emprendedores que trabajan juntos en un ambiente diseñado para fomentar la interacción y el networking.' />
          </div>
        </div>

        <div>
          <BigTitle title='2 UBICACIONES EN SANTIAGO' />
        </div>
        <BigPhoto title='LEÑERIA SEMINARIO' subtitle='Seminario 1307 Ñuñoa' photo='/leneria1.jpg' onTouchTap={this.redirectSeminario1307} />
        <BigPhoto title='LEÑERIA ZANELLI' subtitle='Zanelli 1319 Ñuñoa' photo='/leneria2.jpg' onTouchTap={this.redirectZanelli1319} />

      </div>
    )
  }
}

Home.contextTypes = contextTypes
