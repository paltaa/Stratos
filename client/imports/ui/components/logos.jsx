import React from 'react'
import AngelList from 'react-icons/lib/fa/angellist'
const propTypes = {
  logo: React.PropTypes.string,
  text: React.PropTypes.string,
  web: React.PropTypes.string,
  facebook: React.PropTypes.string,
  onTouchTap: React.PropTypes.func

}

export default class Logos extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: false
    }
  }
  render () {
    return(
      <div className='col-md-2'
        style={{
          height: '150px',
          backgroundImage: `url(${this.props.logo})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          textAlign: 'center',
          fontFamily: 'Raleway'
        }}
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}
        onTouchTap={this.props.onTouchTap}

      >
        <div
          style={{
            textAlign: 'center',
            height: 150,
            width: '16.667%',
            backgroundColor: this.state.hover ? '#ffff00' : '#fff',
            opacity: this.state.hover ? '0.8' : '0',
            position: 'absolute'
          }}
        >
          {this.props.text}
          <p>
            <AngelList />
          </p>
        </div>
      </div>
    )
  }

}

Logos.propTypes = propTypes
