import React from 'react'
import {grey900} from 'material-ui/styles/colors'

export default class Footer extends React.Component {
  render () {
    return (
      <div style={{height: 150, backgroundColor: grey900}}>
        <div
          style={{
            marginTop: 65,
            position: 'absolute',
            width: '100%',
            textAlign: 'center',
            fontSize: 12,
            color: 'white'
          }}
          >
CENTRO LEÑERIA

D1: SEMINARIO 1307 | ÑUÑOA
D2: RENATO ZANELLI 1321 | PROVIDENCIA
M : INFO@CENTROLENERIA.CL
F:  +56 9 6613 4412 - Jorge Castillo
F : +56 9 9732 8319 - Francisco Salvatierra
F : +56 9 9499 9750 - José Quiroga
W : WWW.CENTROLENERIA.CL
        </div>
      </div>
    )
  }
}
