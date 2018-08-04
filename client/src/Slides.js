import React from 'react';

class Slides extends React.Component {
  constructor(props) {
  super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    // const style_screen = "width: " + this.state.width + " " + "height: " + this.state.height;
    // const img_style = {heigth: this.state.height};
    return(
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="6000">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="slide-img-1"/>
            <div class="carousel-caption">
              <h5>Endless</h5>
              <p>By Zhengzhe</p>
            </div>
          </div>
          <div class="carousel-item">
            <div className="slide-img-2"/>
            <div class="carousel-caption">
              <h5>Memories</h5>
              <p>By Ying</p>
            </div>
          </div>
          <div class="carousel-item">
            <div className="slide-img-3"/>
            <div class="carousel-caption">
              <h5>The kiss</h5>
              <p>By Ying</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Slides;
