import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const ButtonToNavigate = () => (
  <Router>
    <div>
      <Link to="/collections">
        <i class="fas fa-angle-double-down"></i>
      </Link>
      <Route path="/collections" component={Collections} />
    </div>
  </Router>
    );

    const Collections = () => (
      <div>
      </div>
    );

// the first part of the website including navbar
class Navigation extends React.Component {
  render() {
    return(
      <div>
        <nav className="navbar transparent navbar-inverse navbar-fixed-top">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Our's</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="btn-toolbar navbar-right" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group mr-2" role="group" aria-label="First group">
              <a className="btn" href="/collections" role="button">Collections</a>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="Second group">
              <a className="btn" href="/" role="button">Us</a>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
              <a className="btn" href="/" role="button">Contact</a>
            </div>
          </div>
        </nav>
        <ButtonToNavigate/>
      </div>
    );
  }
}

export default Navigation;
