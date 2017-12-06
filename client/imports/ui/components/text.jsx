import React from 'react'
import _ from 'underscore'

const propTypes = {
  text: React.PropTypes.string,
  style: React.PropTypes.object
}

export default class Text extends React.Component {
  render () {
    return (
      <span style={_.extend({lineHeight: '38px', fontWeight: 400, marginLeft: '20px',fontFamily: 'Raleway', textAlign: 'left', display: 'block', fontSize: 20, margin: '10 10', color: 'rgb(59, 59, 59)'}, this.props.style)}>
        {this.props.text}
      </span>
    )
  }
}
Text.propTypes = propTypes
