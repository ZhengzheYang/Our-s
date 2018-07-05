import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Photo from './OnePhoto';
// import Navigation from './NavBar';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './Homepage';
// import Element from './Collections';
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<HomePage />, document.getElementById('root'));
// ReactDOM.render(Element, document.getElementById('collections'));
registerServiceWorker();
