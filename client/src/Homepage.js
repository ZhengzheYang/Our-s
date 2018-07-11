import React from 'react';
import Home from './NavBar';
import { Collections } from './Collections';
import Us from './Us';
import './css/Homepage.css';
import { scroller, animateScroll as scroll } from 'react-scroll';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// the whole page
class HomePage extends React.Component{

  // handle the scoll event by adding a listener
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  // use react-scroll to scroll smoothly
  handleScroll = (event) => {
    scroller.scrollTo(100);
  };

  // render the different components
  render() {
    return(
      <div>
        <Home/>
        <Collections />
        <Us/>
      </div>
    );
  }
}

export default HomePage
