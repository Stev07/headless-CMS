import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Peintures from "./components/peintures/Peintures";
import Sculptures from "./components/sculptures/Sculptures";
import Evenements from "./components/evenements/Evenements";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 0, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="container">


          {/* 
          PROSPECT.IO
          
          This code is interesting because thanks to it, our website become an single page application.

          What's the difference between them? 
            -> A 'normal' website will request the server for loading the target of your click while the single page application will loading the full application directly.


          More, It helps to manage to routes access. (404, admin section,...)
          
          */}

          <Router>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/peintures" component={Peintures} />
                <Route path="/sculptures" component={Sculptures} />
                <Route path="/evenements" component={Evenements} />
                <Route path="/contact" component={Contact} />
              </Switch>
            <Footer />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
