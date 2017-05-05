import React from 'react'
import BigTitle from '../../components/big-title'
import Text from '../../components/text'
import YellowButton from '../../components/yellowbutton'
import BigPhoto from '../../components/Bigphoto'
import autobind from 'autobind-decorator'
import Carousel from '../../components/slick-cool'

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

        <Carousel style={{position: 'relative'}}>
          <Text text='ESPACIOS PRIVADOS COWORK EN ÑUÑOA Y PROVIDENCIA'
            style={{margin: '80px auto', position: 'relative', fontWeight: 'bold', color: 'white', align: 'left'}}
          />
          <BigTitle title='LEÑERIA COMUNIDAD DE TRABAJO INDEPENDIENTE' small />
          <div style={{textAlign: 'left'}}>
            <YellowButton text='Agenda una visita hoy' />
          </div>
        </Carousel>

        <br />
        <br />
        <br />
        <div className='row container' style={{ align:'left'}}>
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
        <BigPhoto title='SEMINARIO' subtitle='Seminario 1307 Ñuñoa' photo='/leneria1.jpg' onTouchTap={this.redirectSeminario1307} />
        <BigPhoto title='ZANELLI' subtitle='Zanelli 1319 Ñuñoa' photo='/leneria2.jpg' onTouchTap={this.redirectZanelli1319} />
        <BigPhoto title='EX LEÑERIA' subtitle='Proximamente' photo='/leneria3.jpg' onTouchTap='' />
      </div>
    )
  }
}

Home.contextTypes = contextTypes
