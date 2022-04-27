import React, { Component } from "react";
import Slider from "react-slick";


// Import Images

import new1 from "./images/new1.jpg";
import new2 from "./images/new2.jpg";
import new3 from "./images/new3.jpg";
import new4 from "./images/new4.jpg";
import new5 from "./images/new5.jpg";
import new6 from "./images/new6.jpg";

import "./slider.scss";

class SliderIm extends Component {

    render () {
      var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        cssEase: "linear",
        rtl: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <section className="slider">
      <div>
        <Slider {...settings}>
          <div className="item">
            <img src={new1} alt="not available"/>
          </div>
          <div className="item">
          <img src={new2} alt="not available"/>
          </div>
          <div className="item">
          <img src={new3} alt="not available"/>
          </div>
          <div className="item">
          <img src={new4} alt="not available"/>
          </div>
          <div className="item">
          <img src={new5} alt="not available"/>
          </div>
          <div className="item">
          <img src={new6} alt="not available"/>
          </div>
        </Slider>
      </div>
        </section>
    )
}
}

export default SliderIm