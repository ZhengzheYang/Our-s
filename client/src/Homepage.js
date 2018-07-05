import React from 'react';
import Navigation from './NavBar'
// import Photo from './OnePhoto'
import Collections from './Collections'
import './css/Homepage.css';

class HomePage extends React.Component{
  render() {
    return(
      <div>
        <div className='container-homepage'>
          <div className="nagivation">
            <Navigation/>
          </div>
          {/* <div className='bg' style={{backgroundImage: 'url(${./images/IMG477.jpeg})'}}></div> */}
          {/* <div className="onephoto">
              <Photo/>
          </div> */}
        </div>
        <div className='container-collections'>
          <Collections />
        </div>
      </div>
    );
  }
}

export default HomePage
