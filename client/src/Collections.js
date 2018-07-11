import React from 'react';
import OneCard from './OneCard';
import Gallery from './Gallery';
import { animateScroll as scroll, scroller, Element } from 'react-scroll';
// import Routes from './CollectionPages';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Routes } from './CollectionPages';
// import { Element } from 'react-scroll';

// const galleries = [];
const fileNames = ["Atlanta.jpg", "Beijing.jpg", "Chengdu.jpg",
        "Hong Kong.jpg", "Lasa.jpg", "Lijiang.jpg", "New York.jpg",
        "San Diego.jpg", "Shangrila.jpg"];
// const galleries = fileNames.map((filename, i) => {
//   let path = filename.split(".")[0];
//   return (
//     {path: `${path}`, object: <Gallery collection={`${path}`}/>}
//   );
// });
// galleries.push(jsonObject);
// the collection page where all our works will be displayed
class Collections extends React.Component {
  importAll = (r) => {
    return r.keys().map(r);
  };

  LoadCards = () => {
    // const images = this.importAll(require.context('./images/', false, /\.(png|jpe?g)$/));
    // console.log(images.keys().forEach())
    // const collection = images.map((image, i) => (
    //   <a href={"/" + i} key={i}>
    //     <OneCard img={image} key={i}></OneCard>
    //   </a>
    // ));

    // const fileNames = ["Atlanta.jpg"];
    // const collection = [];
    // for(let i = 0; i < fileNames.length; i++) {
    //   file
    // }
    const collection = fileNames.map((name, i) => {
      let path = name.split(".")[0];
      let fileName = "./images/" + `${name}`;
      return (
        <a href={"/" + path} key={i}>
          <OneCard img={require(`${fileName}`)} collection={`${name}`} key={i}></OneCard>
        </a>
      );
      });

    return (
      <div>
        { collection }
      </div>
    );
  };

  render() {
    return (
      <div className='container-collections'>
        <div className='heading'>
          Collections
          {/* <div className='borderLeft'/> */}
        </div>

        <div class="card-columns">
          <this.LoadCards/>
        </div>
        <div className='elements'>
          <Element name='us'/>
        </div>
      </div>

    );
  }
}
//
// galleries.map((gallery, i) => (
//
// ))

// console.log(galleries.length);
export {
  Collections,
  fileNames,
}
