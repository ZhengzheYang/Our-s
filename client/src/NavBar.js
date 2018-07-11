import React from 'react';
import { animateScroll as scroll, scroller, Element } from 'react-scroll';
import Slides from './Slides';

/* global $ */

// the first part of the website including navbar
class Home extends React.Component {
  constructor() {
    super();
    this.scrollToCollections = this.scrollToCollections.bind(this);
    this.scrollToUs = this.scrollToUs.bind(this);
    this.scrollToContact = this.scrollToContact.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToCollections() {
    scroller.scrollTo('collections', {
      smooth: true,
      offset: -62,
    });

  }

  scrollToUs() {
    scroller.scrollTo('us', {
      smooth: true,
      offset: -32,
    });

  }

  scrollToContact() {
    scroll.scrollToBottom();

  }

  scrollToTop() {
    scroll.scrollToTop();

  }

  render() {

    return(
      <div>
        {/* <nav className="navbar transparent navbar-inverse navbar-fixed-top">
          <div className="navbar-header">
            <div className="navbar-brand" onClick={this.scrollToTop} style={{cursor:'pointer'}}>Our's</div>
          </div>
          <div class="btn-toolbar navbar-right" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group" role="group" aria-label="Third group">
          <div className="btn" onClick={this.scrollToTop}>Home</div>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="First group">
          <div className="btn" onClick={this.scrollToCollections}>Collections</div>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="Second group">
          <div className="btn" onClick={this.scrollToUs}>Us</div>
            </div>
          </div>
          </nav>
          <div className="container-slides">
          <Slides/>
          </div>
          <div className='elements'>
          <Element name='collections'/>
        </div> */}

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="navbar-brand" onClick={this.scrollToTop} style={{cursor:'pointer'}}>Our's</div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <div className="btn" onClick={this.scrollToTop} data-toggle="collapse" data-target=".navbar-collapse.show">Home <span class="sr-only">(current)</span></div>
              </li>
              <li class="nav-item">
                <div className="btn" onClick={this.scrollToCollections} data-toggle="collapse" data-target=".navbar-collapse.show">Collections <span class="sr-only">(current)</span></div>
              </li>
              <li class="nav-item">
                <div className="btn" onClick={this.scrollToUs} data-toggle="collapse" data-target=".navbar-collapse.show">Us <span class="sr-only">(current)</span></div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-slides">
          <Slides/>
        </div>
        <div className='elements'>
          <Element name='collections'/>
        </div>
      </div>
    );
  }
}

export default Home;
