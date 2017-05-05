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
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
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
      <div style={{position: 'relative'}}>
        <Slider {...settings}>
          <div style={{backgroundColor: 'black', backgroundImage: 'url(/00.jpg)', backgroundSize: 'cover', backgrondPosition: 'center', height: '100vh', backgroundRepeat: 'no-repeat', opacity: '0.8'}}>&nbsp;</div>
          <div style={{backgroundColor: 'black', backgroundImage: 'url(/01.jpg)', backgroundSize: 'cover', backgrondPosition: 'center', height: '100vh', backgroundRepeat: 'no-repeat', opacity: '0.8'}}>&nbsp;</div>
          <div style={{backgroundColor: 'black', backgroundImage: 'url(/02.jpg)', backgroundSize: 'cover', backgrondPosition: 'center', height: '100vh', backgroundRepeat: 'no-repeat', opacity: '0.8'}}>&nbsp;</div>
          <div style={{backgroundColor: 'black', backgroundImage: 'url(/03.jpg)', backgroundSize: 'cover', backgrondPosition: 'center', height: '100vh', backgroundRepeat: 'no-repeat', opacity: '0.8'}}>&nbsp;</div>
        </Slider>
        <div style={{color: 'white', position: 'absolute', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '99%', margin: '0 auto'}}>
          <div style={{maxWidth: '50%'}}>
            {this.props.children || '' }
          </div>
        </div>
      </div>
    )
  }
}
