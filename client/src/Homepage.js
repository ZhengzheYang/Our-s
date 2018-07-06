import React from 'react';
import Navigation from './NavBar';
import Collections from './Collections';
import './css/Homepage.css';
import { animateScroll as scroll } from 'react-scroll';

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
    scroll.scrollTo(100);
  };

  // render the different components
  render() {
    return(
      <div>
        <div className='container-homepage'>
          <div className="nagivation">
            <Navigation/>
          </div>
        </div>
        <div className='container-collections'>
          <Collections />
        </div>
      </div>
    );
  }
}

export default HomePage
