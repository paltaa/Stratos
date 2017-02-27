import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

var propTypes = {
  size: React.PropTypes.number
}

export default class Loading extends React.Component {
  renderSize () {
    if (!this.props.size) return 119
    return this.props.size
  }
  render () {
    return (
      <div style={{textAlign: 'center', paddingTop: '25px'}}>
        <CircularProgress size={this.renderSize()} />
        <br />Cargando...
      </div>
    )
  }
}

Loading.propTypes = propTypes
