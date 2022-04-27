import React, {Component, Fragment} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavTop from './components/nav/nav';
import Home from "./components/home/home";
import Gallary from "./components/gallary/gallary";
import Contact from "./components/contact/contact";
import Footer from './components/footer/footer';
import BookPage from './components/btn-book/bookPage/bookPage';
import Load from "./components/load/load";
class App extends Component {
  state = {
    isLoad: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoad: !this.state.isLoad,
      });
    }, 5000);
  }

  render () {
  return (
    <Fragment>

      {this.state.isLoad ? (<Load/>) : (
            <div className='par-page'>
            <BrowserRouter>
            <NavTop/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="gallary" element={<Gallary />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bookPage" element={<BookPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
        </div>
      )}

    </Fragment>
  )
}
}

export default App;
