import React from 'react'
import BigTitle from '../../components/big-title'
import Text from '../../components/text'
import YellowButton from '../../components/yellowbutton'

export default class Zanelli1319 extends React.Component {
  render () {
    return (
      <div>
        <BigTitle title='Leñeria Zanelli' style={{marginTop: 20}} />
        <BigTitle title='RENATO ZANELLI 1319, PROVIDENCIA' small style={{margin: '20px 0'}} />
        <div >
          <Text text='Una antigua casa de dos pisos y 200m2 en el barrio El Aguilucho. Totalmente remodelada por Leñeria  y adaptada como oficinas privadas y un sector de cowork, además de terrazas y espacios comunes en un barrio patrimonial y gastronómico de Providencia.' />
        </div>
        <div style={{textAlign: 'center'}} >
          <YellowButton text='Agendar una visita hoy' />
        </div>
        <div className='row container'>
          <div className='col-md-6 col-xs-12' style={{textAlign: 'center'}}>
            <br />
            <br />
            <BigTitle title='COWORK ZANELLI' small style={{fontSize: '13.5px'}} />
            <Text text='Espacio destinado al cowork y estaciones de trabajo compartido, formando parte de nuestra segunda casa en Santiago,
Barrio el Aguilucho. Providencia.
Oficina de 40 m2, con 7 estaciones, mesa para reuniones y acceso directo al patio/huerta. Especial para emprendedores en busca de un excelente ambiente colaborativo y ser miembros  de la comunidad' />

          </div>
          <div className='col-md-6 col-xs-12' style={{textAlign: 'center'}}>
            <br />
            <br />
            <BigTitle title='INCLUIMOS' small style={{fontSize: '13.5px'}} />
            <Text text='  365 días / Internet / Acceso 24/7' />
            <Text text='  Alarma / Lockers ' />
            <Text text='  Servicios Básicos incluídos' />
            <Text text='  Terraza / Patio / Huerta Orgánica' />
            <Text text='  Comedor / Sector Reciclaje' />
            <Text text='  Estacionamiento de Bicicletas' />
            <Text text='  Feria Libre los viernes /Pet Friendly' />
            <Text text='  Mesa de Reuniones / Kitchennette' />
            <Text text='  Cajonera con llave / Acceso directo a patio' />
          </div>
        </div>
        <img src='/zanelli1.jpg' />
        <BigTitle title='HABITANTES EN ZANELLI' small />
      </div>
    )
  }
}
