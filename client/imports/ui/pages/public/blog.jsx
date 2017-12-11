import React from 'react'
import BigTitle from '../../components/big-title'
import Text from '../../components/text'
import YellowButton from '../../components/yellowbutton'
import BigPhoto from '../../components/Bigphoto'
import autobind from 'autobind-decorator'
import Carousel from '../../components/slick-cool'
import Mapa from '../../components/mapa'

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
      <div style={{webKitTextSizedAjust: 'none',
        webkitmarginbefore: '0em',
        webkitmarginafter: '0em'}}>
        <BigPhoto title='STRATOS' subtitle='EXECUTIVE SEARCH & LEADERSHIP CONSULTANTS' photo='/blog.jpg' onTouchTap={this.redirectSeminario1307} />

        <BigTitle title='Nuestro Blog' />
        <Text text="Ejemplo....  Finalmente, los procesos de avisos en las redes sociales no permiten contar con los mejores candidatos que existen en el mercado, que son aquellos que tienen el perfil y que no están en un proceso de búsqueda activa de empleo. Es en estos candidatos en donde probablemente se encuentre el mejor talento." />
        <br />
        <Text text="Quienes nos dedicamos a la búsqueda de ejecutivos sabemos que los buenos ejecutivos rara vez están dedicados a vitrinear y que están plenamente concentrados y dedicados a su trabajo. Es por eso que levantar buenos ejecutivos es una tarea muy difícil, ya que tienes que seducir y convencer a alguien que están contento en donde está y en lo que hace, para que esté dispuesto de asumir un nuevo desafío." />
        <br />
        <br />
        
        <BigTitle title='Ultimas Entradas' />
        <br />
        <br />

        <div className='row' style={{textAlign: 'center'}}>
          <div className='col-md-6 col-xs-12' style={{textAlign: 'center'}}>
            <img src='/guerradeltalento.jpg' />
            <br />
            <br />
            <BigTitle title='LA GUERRA DEL TALENTO EN RECESIÓN O PARÁLISIS ECONÓMICA' small style={{fontSize: '13.5px'}} />
            <Text text='Las condiciones económicas imperantes en estos años de crisis, han representado un cambio significativo en el mundo del trabajo. Esto ha tenido efectos negativos y positivos en la gestión del talento, dependiendo que es lo que se mire...' />

          </div>
          <div className='col-md-6 col-xs-12 col-lg-6' style={{textAlign: 'center'}}>
            <img src='/reclutamientorrss.jpg' />
            <br />
            <br />
            <BigTitle title='RECLUTAMIENTO EN REDES SOCIALES' small style={{fontSize: '13.5px', textAlign: 'center'}} />
            <Text text='Los procesos de reclutamiento por Linkedin y otras redes sociales que realizan tanto empresas como algunos headhunters, tienen una serie de problemas que es necesario tener en cuenta para que el reclutamiento tenga éxito y la empresa pueda seleccionar y contratar al mejor talento disponible...' />
          </div>
        </div>
        
        <br />
        <br />


        <div className='row' style={{textAlign: 'center'}}>
          <div className='col-md-6 col-xs-12' style={{textAlign: 'center'}}>
            <img src='/elegircoach.jpg' />
            <br />
            <br />
            <BigTitle title='COMO ELEGIR UN COACH' small style={{fontSize: '13.5px'}} />
            <Text text='Cuando un ejecutivo decide comenzar a trabajar con un coach nace la pregunta obligatoria, ¿cómo lo elijo? En un mercado saturado de información, productos y servicios, el coaching no se queda atrás. Sobran los coach no certificados y sin la formación adecuada, y son realmente contados con los dedos aquellos que logran realizar un trabajo bueno y de calidad, que perdure en el tiempo...' />

          </div>
          <div className='col-md-6 col-xs-12 col-lg-6' style={{textAlign: 'center'}}>
            <img src='/coachingquees.jpg' />
            <br />
            <br />
            <BigTitle title='QUE ES EL COACHING Y PARA QUE SIRVE' small style={{fontSize: '13.5px', textAlign: 'center'}} />
            <Text text='Suele suceder que hay poca claridad respecto a lo que es el coaching. Muchos lo confunden con el hecho de hacer terapia, actividad que realizan los sicólogos y cuya visión depende de diferentes escuelas. Otros piensan que es lo mismo que el mentoring, situación que se genera dentro de las empresas y que tiene que ver con formar a los trabajadores a través de una persona encargada de transmitir su aprendizaje...' />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />      
      {/*  <BigTitle title='Habitantes en Leñeria' small/>
        <div className='row'>
          <Logos logo='/LOGO-PLAN-COMUN-BLANCO.png' text='Plan Común' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />
          <Logos logo='/Logos/Bestias.jpg' text='Bestias' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />
          <Logos logo='/Logos/intrepido.png' text='Intrepido' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />
          <Logos logo='/Logos/KMLNWEB.png' text='Kamaleon' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />
          <Logos logo='/Logos/chol1.jpg' text='Chol1' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />
          <Logos logo='/Lozgos/Aureo.png' text='Arquitectos Aureo' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />
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
