import React from 'react'
import BigTitle from '../../components/big-title'
import Text from '../../components/text'
import YellowButton from '../../components/yellowbutton'
import BigPhoto from '../../components/Bigphoto'
import autobind from 'autobind-decorator'
import Carousel from '../../components/slick-cool'
import Logos from '../../components/logos'

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
        <Carousel style={{position: 'relative', backgroundColor: 'black'}}>
          <div style={{width: '100%', maxWidth: '100%'}}>
            <BigTitle title='LEÑERIA' style={{textAlign: 'left', fontSize: '60', margin: '5px 0px'}} small />
            <Text text='COMUNIDAD DE TRABAJO INDEPENDIENTE' style={{margin: '5px 0px', position: 'relative', fontWeight: 'bold', fontSize: '35', color: 'white', textAlign: 'left', lineHeight: '35px'}} />
            <Text text='ESPACIOS PRIVADOS COWORK EN ÑUÑOA Y PROVIDENCIA' style={{margin: '5px 0px', position: 'relative', fontWeight: 'bold', fontSize: '22', color: 'white', textAlign: 'left'}} />
            <YellowButton text='Agenda una visita hoy' style={{margin: '5px 0px'}} />
          </div>
        </Carousel>
        <BigTitle title='KILL THE BOSS' />

        <br />
        <br />
        <br />
        <div className='row' style={{textAlign: 'center'}}>
          <div className='col-md-6 col-xs-12' style={{textAlign: 'center'}}>
            <img src='/fotohome1.jpg' />
            <br />
            <br />
            <BigTitle title='ESPACIOS DE TRABAJO PRIVADOS & AREAS COMUNES' small style={{fontSize: '13.5px'}} />
            <Text text='Nuestros espacios te dan la libertad y privacidad para trabajar libre de distracciones. Al mismo tiempo contamos con áreas comunes donde podrás reunirte, relajarte y convivir con profesionales y creadores de diversas disciplinas.' />

          </div>
          <div className='col-md-6 col-xs-12 col-lg-6' style={{textAlign: 'center'}}>
            <img src='/fotohome2.jpg' />
            <br />
            <br />
            <BigTitle title='COMUNIDAD DE TRABAJO INDEPENDIENTE' small style={{fontSize: '13.5px', textAlign: 'center'}} />
            <Text text='Leñeria es una red social física conformada por arquitectos, diseñadores, fotógrafos, ingenieros, ciclistas, audiovisuales, programadores y emprendedores que trabajan juntos en un ambiente diseñado para fomentar la interacción y el networking.' />
          </div>
        </div>

        <div>
          <BigTitle title='2 UBICACIONES EN SANTIAGO' />
        </div>
        <BigPhoto title='SEMINARIO' subtitle='Seminario 1307 Ñuñoa' photo='/leneria1.jpg' onTouchTap={this.redirectSeminario1307} />
        <BigPhoto title='ZANELLI' subtitle='Zanelli 1319 Ñuñoa' photo='/leneria2.jpg' onTouchTap={this.redirectZanelli1319} />
        <BigPhoto title='EX LEÑERIA' subtitle='Proximamente' photo='/leneria3.jpg' onTouchTap='' />
      {/*  <BigTitle title='Habitantes en Leñeria' small/>
        <div className='row'>
          <Logos logo='/LOGO-PLAN-COMUN-BLANCO.png' text='Plan Común' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />
          <Logos logo='/Logos/Bestias.jpg' text='Bestias' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />
          <Logos logo='/Logos/intrepido.png' text='Intrepido' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />
          <Logos logo='/Logos/KMLNWEB.png' text='Kamaleon' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />
          <Logos logo='/Logos/chol1.jpg' text='Chol1' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />
          <Logos logo='/Logos/Aureo.png' text='Arquitectos Aureo' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />
        </div>
        <div className='row'>
          <Logos logo='/Logos/mane.jpg' text='Mane' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />
          <Logos logo='/Logos/mono.png' text='Mono' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />

        </div>*/}
      </div>
    )
  }
}

Home.contextTypes = contextTypes
