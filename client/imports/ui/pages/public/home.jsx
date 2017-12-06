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
        <Carousel style={{position: 'relative', backgroundColor: 'black'}}>
          <div style={{width: '30% 100%', maxWidth: '100%'}}>
            <BigTitle title='STRATOS' style={{textAlign: 'left', fontSize: '60', margin: '5px 0px'}} small />
            <Text text='EXECUTIVE SEARCH & LEADERSHIP CONSULTANTS' style={{margin: '5px 0px', position: 'relative', fontWeight: 'bold', fontSize: '35', color: 'white', textAlign: 'left', lineHeight: '35px'}} />
            <Text text='10 AÑOS EN CHILE' style={{margin: '5px 0px', position: 'relative', fontWeight: 'bold', fontSize: '22', color: 'white', textAlign: 'left'}} />
            <YellowButton text='Contacto clientes' style={{margin: '5px 0px'}} />
          </div>
        </Carousel>
        <BigTitle title='Quienes somos' />
        
        <Text text="STRATOS EXECUTIVE SEARCH es una Consultora con gran experiencia en búsquedas de altos ejecutivos, consultoría en gobiernos corporativos, y desarrollo del liderazgo de equipos directivos. Somos una empresa Global. Trabajamos en la búsqueda internacional para empresas chilenas así como en la búsqueda en Latinoamérica para empresas Europeas, Americanas y Asiáticas." />
        <br />
        <Text text="Nuestro compromiso es encontrar en el mercado al mejor ejecutivo para la posición que se requiere, de manera que nuestros clientes cuenten con todas las opciones al momento de decidir una contratación. Contamos con una moderna y sofisticada tecnología para los procesos de búsqueda y de evaluación de ejecutivos, desarrollados por nuestros partners internacionales en Europa y EEUU."/>
        <br />
        <Text text="Ofrecemos un servicio personalizado, y flexible, que aporta soluciones a medida de cada requerimiento. Miramos el mercado de forma completa, realizando profundos estudios en cada búsqueda. No nos ponemos límites territoriales."/>
        <br />
        <BigTitle title='Nosotros' />
        <Text text="STRATOS EXECUTIVE SEARCH, es una consultora boutique conformada por consultores con años de experiencia en búsqueda de altos ejecutivos y cargos complejos, asesoría en gobiernos corporativos y desarrollo de liderazgo de equipos directivos. Trabajamos en búsquedas internacionales para empresas globales y de Latinoamérica. Ofrecemos un servicio personalizado con consultores senior, con herramientas de última generación para entregar un servicio de excelencia." />
        <br />
        <br />

        <Mapa lat={-33.4027918} lng={-70.5893016} />
      </div>
    )
  }
}

Home.contextTypes = contextTypes
