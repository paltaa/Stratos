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
          COPYRIGHT © LEÑERIA - COMUNIDAD - ESPACIOS - COWORK   - Por: JPQuirox
        </div>
      </div>
    )
  }
}
