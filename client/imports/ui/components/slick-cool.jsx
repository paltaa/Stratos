import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class Carousel extends React.Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      adaptiveWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    }
    return (
      <div style={{position: 'relative', backgroundColor: 'black'}}>
        <Slider {...settings}>
          <div style={{backgroundImage: 'url(/00.jpg)', backgroundSize: 'cover', backgrondPosition: 'center', height: '100vh', backgroundRepeat: 'no-repeat', opacity: '0.8'}}>&nbsp;</div>
          <div style={{backgroundImage: 'url(/01.jpg)', backgroundSize: 'cover', backgrondPosition: 'center', height: '100vh', backgroundRepeat: 'no-repeat', opacity: '0.8'}}>&nbsp;</div>
          <div style={{backgroundImage: 'url(/02.jpg)', backgroundSize: 'cover', backgrondPosition: 'center', height: '100vh', backgroundRepeat: 'no-repeat', opacity: '0.8'}}>&nbsp;</div>
          <div style={{backgroundImage: 'url(/03.jpg)', backgroundSize: 'cover', backgrondPosition: 'center', height: '100vh', backgroundRepeat: 'no-repeat', opacity: '0.8'}}>&nbsp;</div>
        </Slider>
        <div style={{color: 'white', position: 'absolute', top: 0, height: '100vh', display: 'left', alignItems: 'center', justifyContent: 'center', width: '99%', margin: '100px 10%'}}>
          <div style={{maxWidth: '80%'}}>
            {this.props.children || '' }
          </div>
        </div>
      </div>
    )
  }
}
