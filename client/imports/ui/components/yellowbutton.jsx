import React from 'react'
import _ from 'underscore'

const propTypes = {
  text: React.PropTypes.string,
  style: React.PropTypes.object
}

const contextTypes = {
  location: React.PropTypes.object,
  router: React.PropTypes.object
}

export default class YellowButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  redirectContact () {
    this.context.router.push('/contacto')
  }


  render () {
    return (
      <div style={
        _.extend({
          width: 'auto',
          letterSpacing: '0.8px',
          backgroundColor: this.state.hover ? '#2b2d30' : '#de413d',
          color: this.state.hover ? '#de413d' : '#2b2d30',
          fontFamily: 'Raleway',
          textAlign: 'center',
          display: 'inline-block',
          fontSize: 12,
          padding: '15px 10px',
          textTransform: 'uppercase',
          cursor: 'pointer',
          fontWeight: 300,
          borderRadius: 2
        }, this.props.style)}
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}
        onTouchTap={this.redirectContact.bind(this)}
      >
        {this.props.text}
      </div>
    )
  }
}

YellowButton.propTypes = propTypes
YellowButton.contextTypes = contextTypes
