import React from 'react';
import OneCard from './OneCard';

// the collection page where all our works will be displayed
class Collections extends React.Component {
  importAll = (r) => {
    return r.keys().map(r);
  };

  LoadCards = () => {
    const images = this.importAll(require.context('./images/', false, /\.(png|jpe?g)$/));
    const collection = images.map((image, i) => (
      <OneCard img={image} key={i}></OneCard>
    ));

    return (
      <div>
        { collection }
      </div>
    );
  };

  render() {
    return (
      <div class="card-columns">
        <this.LoadCards/>
      </div>
    );
  }
}

export default Collections
