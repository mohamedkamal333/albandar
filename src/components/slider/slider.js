import React, { Component } from "react";
import Slider from "react-slick";


// Import Images

import new1 from "./images/new1.jpeg";
import new2 from "./images/new2.jpeg";
import new3 from "./images/new3.jpeg";
import new4 from "./images/new4.jpeg";
import new5 from "./images/new5.jpeg";
import new6 from "./images/new6.jpeg";
import new7 from "./images/new7.jpeg";
import new8 from "./images/new8.jpeg";
import new9 from "./images/new9.jpeg";
import new10 from "./images/new10.jpeg";

import "./slider.scss";

class SliderIm extends Component {

    render () {
      var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        cssEase: "linear",
        rtl: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
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
          <div className="item">
          <img src={new7} alt="not available"/>
          </div>
          <div className="item">
          <img src={new8} alt="not available"/>
          </div>
          <div className="item">
          <img src={new9} alt="not available"/>
          </div>
          <div className="item">
          <img src={new10} alt="not available"/>
          </div>
        </Slider>
      </div>
        </section>
    )
}
}

export default SliderIm