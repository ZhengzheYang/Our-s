import React from 'react';
import Navigation from './NavBar'
// import Photo from './OnePhoto'
import './css/Homepage.css';

class HomePage extends React.Component{
  render() {
    return(
      <div className='container-homepage'>
        <div className="nagivation">
          <Navigation/>
        </div>
        {/* <div className='bg' style={{backgroundImage: 'url(${./images/IMG477.jpeg})'}}></div> */}
        {/* <div className="onephoto">
          <Photo/>
        </div> */}
      </div>
    );
  }
}

export default HomePage
