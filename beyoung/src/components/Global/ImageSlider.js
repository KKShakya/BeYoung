import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import React from 'react'
  
const ImageSlider = ({images,slides=1,scroll=1,speed=2000}) => {
  
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow:slides,
    slidesToScroll: scroll,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed:speed,
  };
  return (
    <>
    <div className="tag">
    </div>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src}  alt={item.alt}/>
            </div>
          ))}
        </Slider>
      </div>
          </>
  )
}
export default ImageSlider;