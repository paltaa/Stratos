import React from 'react'
import _ from 'underscore'

const propTypes = {
  text: React.PropTypes.string,
  style: React.PropTypes.object
}

export default class Text extends React.Component {
  render () {
    return (
      <span style={_.extend({lineHeight: '28px', fontWeight: 400, fontFamily: 'Raleway', textAlign: 'center', width: '60%', display: 'block', fontSize: 15, margin: '0 auto', color: 'rgb(59, 59, 59)'}, this.props.style)}>
        {this.props.text}
      </span>
    )
  }
}
Text.propTypes = propTypes
