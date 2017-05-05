import React from 'react'
import _ from 'underscore'

const propTypes = {
  title: React.PropTypes.string,
  small: React.PropTypes.bool,
  style: React.PropTypes.object
}

export default class BigTitle extends React.Component {
  render () {
    if (this.props.small) {
      return (
        <h2 style={_.extend({letterSpacing: '2px', fontWeight: 600, fontFamily: 'Raleway', width: '100%', display: 'block', fontSize: 20}, this.props.style)}>
          {this.props.title}
        </h2>
      )
    }
    return (
      <h2 className='bigtitle' style={_.extend({letterSpacing: '2px', fontWeight: 600, fontFamily: 'Raleway', width: '100%', display: 'block', fontSize: 42, margin: '40px auto'}, this.props.style)}>
        {this.props.title}
      </h2>
    )
  }
}

BigTitle.propTypes = propTypes
