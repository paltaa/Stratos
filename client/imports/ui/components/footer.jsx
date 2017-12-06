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
Av. Américo Vespucio Norte # 1090 Of. 702
Vitacura · 7630479
Santiago De Chile

+ 56 2 29538822
info@stratos.cl
        </div>
      </div>
    )
  }
}
