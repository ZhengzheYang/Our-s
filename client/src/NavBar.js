import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const buttonToNavigate = ({ title, history }) => (
//   <button
//     type="button"
//     onClick={() => history.push('/my-new-location')}
//   >
//     {title}
//   </button>
// );

const ButtonToNavigate = () => (
  <Router>
    <div>
      <Link to="/collections">
        <i class="fas fa-angle-double-down"></i>
      </Link>
      {/* <Route exact path="/collections" component={Collections} /> */}
      <Route path="/collections" component={Collections} />
      {/* <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>
    );

    const Collections = () => (
      <div>
      </div>
    );

class Navigation extends React.Component {
  render() {
    return(
      <div>
        <nav class="navbar transparent navbar-inverse navbar-fixed-top">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">Our's</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="btn-toolbar navbar-right" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group mr-2" role="group" aria-label="First group">
              <a class="btn" href="/collections" role="button">Collections</a>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="Second group">
              <a class="btn" href="/" role="button">Us</a>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
              <a class="btn" href="/" role="button">Contact</a>
            </div>
          </div>
        </nav>
        <ButtonToNavigate/>
      </div>
    );
  }
}

export default Navigation;
