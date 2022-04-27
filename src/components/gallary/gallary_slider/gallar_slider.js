import React, { Component } from "react";
import Slider from "react-slick";

// Add Images

import add1 from "./img/add1.jpg";
import add2 from "./img/add2.jpg";
import add3 from "./img/add3.jpg";
import add4 from "./img/add4.jpg";
import add5 from "./img/add5.jpg";
import add6 from "./img/add6.jpg";
import add7 from "./img/add7.jpg";
import add8 from "./img/add8.jpg";
import add9 from "./img/add9.jpg";
import add10 from "./img/add10.jpg";
import add11 from "./img/add11.jpg";
import add12 from "./img/add12.jpg";
import add13 from "./img/add13.jpg";
import add14 from "./img/add14.jpg";
import add15 from "./img/add15.jpg";
import add16 from "./img/add16.jpg";
import add17 from "./img/add17.jpg";
import add18 from "./img/add18.jpg";


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
              <div>
                <img src={add11} alt="add11"/>
              </div>
              <div>
                <img src={add12} alt="add12"/>
              </div>
              <div>
                <img src={add13} alt="add13"/>
              </div>
              <div>
                <img src={add14} alt="add14"/>
              </div>
              <div>
                <img src={add15} alt="add15"/>
              </div>
              <div>
                <img src={add16} alt="add16"/>
              </div>
              <div>
                <img src={add17} alt="add17"/>
              </div>
              <div>
                <img src={add18} alt="add18"/>
              </div>

            </Slider>
          </div>
                </div>
            </section>
        );
      }
    }


export default GallarySlide