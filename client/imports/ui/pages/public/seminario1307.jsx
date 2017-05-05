import React from 'react'
import BigTitle from '../../components/big-title'
import Text from '../../components/text'
import YellowButton from '../../components/yellowbutton'
import Logos from '../../components/logos'
import Mapa from '../../components/mapa'
import autobind from 'autobind-decorator'

export default class Seminario1307 extends React.Component {
  render () {
    return (
      <div>
        <BigTitle title='LEÑERIA SEMINARIO' />
        <BigTitle title='SEMINARIO 1307 ÑUÑOA' small />
        <Text text='La restauración de dos casas antiguas y la unión de sus patios, dan vida a nuestro primer espacio ubicado en Ñuñoa al sur del parque Bustamante en las cercanías de Avenida Matta. Un ex barrio industrial en plena transformación.' />
        <BigTitle title='¿TE INTERESA CONOCER ESTA SEDE?' style={{fontSize: 20}} small />
        <div style={{textAlign: 'center'}} >
          <YellowButton text='Agendar una visita hoy' />
        </div>
        <BigTitle title='SERVICIOS INCLUIDOS' />
        <Text text='Acceso 24/7' />
        <Text text='365 dÍas' />
        <Text text='2 salas de reuniones' />
        <Text text='Internet por fibra dedicada 1:1' />
        <Text text='Alarma y CCTV' />
        <Text text='Servicio de Aseo' />
        <Text text='Terrazas – Patios' />
        <Text text='Sistema de Sonido' />
        <Text text='Huerta' />
        <Text text='Cocina' />
        <Text text='Comedor' />
        <Text text='Reciclaje' />
        <Text text='Estacionamiento de Bicicletas' />
        <Text text='Pet friendly' />
        <BigTitle title='HABITANTES EN SEMINARIO' small />
        <div className='row'>
          <Logos logo='/LOGO-PLAN-COMUN-BLANCO.png' text='Plan Común' web='www.plancomun.com' onTouchTap={() =>window.location.href='http://www.plancomun.cl'} />
        </div>
        <img src='seminario1.jpg' style={{display: 'block', margin: '0 auto', maxWidth: '100%'}} />
        <Mapa lat={-33.4572406} lng={-70.6281164} />

      </div>
    )
  }
}
