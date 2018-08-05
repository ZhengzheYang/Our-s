import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Gallery } from './CollectionPages';
import Gallery from './Gallery';
// import { galleries } from './Collections';
import { fileNames } from './Collections';

require('dotenv').config();

// console.log(galleries[0].path);
/* path: path to the website object: the gallery object*/
const routes = fileNames.map((filename, i) => {
  let path = "/" + filename.split(".")[0];
  // const gallery =;
  return(
    <Route path={`${path}`} render={ () => (
      <Gallery collection={`${filename.split(".")[0]}`}/>
    )} key={i}/>
      );
      });


    ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={HomePage}/>
        {/* <Route path = "/Atlanta" component = {Gallery} /> */}
        {routes}
      </div>
  </Router>,
  document.getElementById('root'));
  registerServiceWorker();
