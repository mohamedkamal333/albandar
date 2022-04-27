import React, { Component } from "react";

// Import Section Here

import SliderIm from "../slider/slider";
import BookNow from "../btn-book/book";
import About from "../about-us/about";
import Features from "../features/feature";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <SliderIm />
        <BookNow />
        <About />
        <Features />
      </div>
    );
  }
}

export default Home;
