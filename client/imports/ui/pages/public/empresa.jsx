import React from 'react'
import BigTitle from '../../components/big-title'
import Text from '../../components/text'
import YellowButton from '../../components/yellowbutton'
import Logos from '../../components/logos'
import autobind from 'autobind-decorator'

export default class Empresa extends React.Component {
  render () {
    return (
      <div>

        <BigTitle title='Nosotros' />
        <Text text="STRATOS EXECUTIVE SEARCH, es una consultora boutique conformada por consultores con años de experiencia en búsqueda de altos ejecutivos y cargos complejos, asesoría en gobiernos corporativos y desarrollo de liderazgo de equipos directivos. Trabajamos en búsquedas internacionales para empresas globales y de Latinoamérica. Ofrecemos un servicio personalizado con consultores senior, con herramientas de última generación para entregar un servicio de excelencia." />
        <br />
      </div>
    )
  }
}
