import React, { Component } from "react";
import Slider from "react-slick";

// Add Images

import add1 from "./img/add1.jpeg";
import add2 from "./img/add2.jpeg";
import add3 from "./img/add3.jpeg";
import add4 from "./img/add4.jpeg";
import add5 from "./img/add5.jpeg";
import add6 from "./img/add6.jpeg";
import add7 from "./img/add7.jpeg";
import add8 from "./img/add8.jpeg";
import add9 from "./img/add9.jpeg";
import add10 from "./img/add10.jpeg";



import "./gallar_slider.scss";

class GallarySlide extends Component {
  
    render() {

        var settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          autoplay: true,
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
            <section className="slider-ga">
                <div className="container">
                <div>
            <Slider {...settings}>
              <div>
                <img src={add1} alt="add1"/>
              </div>
              <div>
                <img src={add2} alt="add2"/>
              </div>
              <div>
                <img src={add3} alt="add3"/>
              </div>
              <div>
                <img src={add4} alt="add4"/>
              </div>
              <div>
                <img src={add5} alt="add5"/>
              </div>
              <div>
                <img src={add6} alt="add6"/>
              </div>
              <div>
                <img src={add7} alt="add7"/>
              </div>
              <div>
                <img src={add8} alt="add8"/>
              </div>
              <div>
                <img src={add9} alt="add9"/>
              </div>
              <div>
                <img src={add10} alt="add10"/>
              </div>
            </Slider>
          </div>
                </div>
            </section>
        );
      }
    }


export default GallarySlide