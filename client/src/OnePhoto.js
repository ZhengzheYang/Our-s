import React from 'react';

class Photo extends React.Component {
    render() {
      return (
        <div>
          <div className="image">
            <img src={ require('./images/IMG477.jpeg') } alt="sorry" width="100%" height="100%"/>
          </div>
          <div className="caption">
            <h1>Cats</h1>
          </div>
        </div>
      );
    }
}

export default Photo;
