import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class Carousel extends React.Component {
  render () {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 1500

    }
    return (
      <div>
        <Slider {...settings}>
          <div><h3> <img src='/sliderhome1.jpg' /></h3></div>
          <div><h3> <img src='/sliderhome2.jpg' /></h3></div>
          <div><h3> <img src='/sliderhome3.jpg' /></h3></div>
          <div><h3> <img src='/sliderhome4.jpg' /></h3></div>
          <div><h3> <img src='/fotohome1.jpg' /></h3></div>
          <div><h3> <img src='/fotohome1.jpg' /></h3></div>
        </Slider>
      </div>
    )
  }
}
