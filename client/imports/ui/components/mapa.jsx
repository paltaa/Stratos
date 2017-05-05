import React from 'react'

export default class Carousel extends React.Component {
  componentDidMount () {
    this.initMap()
  }
  initMap () {
    var uluru = {lat: this.props.lat, lng: this.props.lng}
    window.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru
    })
    window.marker = new google.maps.Marker({
      position: uluru,
      map: window.map
    })
  }
  render () {
    return (
      <div>
        <div id='map' style={{width: '100%', height: 400, backgroundColor: 'grey'}}></div>
      </div>
    )
  }
}
