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
        <BigTitle title='Equipo' />
        <BigTitle title='Jose Fernandez Vergara / President & Founder' small/>
        <Text text="Stratos fué fundada en el año 2007 por José Fernández Vergara. Abogado Universidad de Chile; Postítulo IESE Business School, Wharton y China Europe International Business School (CEIBS); M.B.A. Esade, Barcelona España PADE 2012 ESE." />
        <br/>
        <Text text="Certificado como Director Global del Institute of Director London." />
        <br/>
        <Text text="Se desempeñó como Socio en otras empresas de Executive Search, anteriormente ocupó cargos gerenciales en Chile y Europa, ha trabajado en empresas mutinacionales como Unisys y Credit Agricole en España y Chile, y en otras empresa nacionales." />

        <BigTitle title='Mª Isabel Fernández Donoso / Partner' small/>
        <Text text="Isabel tiene una experiencia de más de 7 años en la búsqueda de Gerentes Generales, y equipos de alta dirección." />
        <br/>
        <Text text="Tiene una gran experiencia en dirigir programas de liderazgo y desarrollo de equipos de alto desempeño." />
        <br/>
        <Text text="Es Psicóloga Universidad Diego Portales, Advanced Program in Executive Search Consulting, Cornell University & AESC, AMP Advanced Management Program, ESE Business School. Certificada en Work of Leaders y en Five Behavior of a Cohesive Team USA" />
        <br/>
        <Text text="Ha tenido a cargo la dirección de Recursos Humanos en la División de Seguridad Publica del Ministerio del Interior de Chile." />
        <br/>

      </div>
    )
  }
}

Home.contextTypes = contextTypes
