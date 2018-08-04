import React from 'react';
import Intro from './Intro';

class Us extends React.Component {
  render() {
    return(
      <div className="container-us">
        <div className='heading'>
          About Us
        </div>
        <div className="intro">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img className="img-responsive" src={require("./images/Me.jpg")} alt="us"/>
            </div>
            <div className="col-md-8">
              <br/>
              <p className="text-md-center">
                <strong>About</strong>
              </p>
              <p className="text-md-center">placeholderplaceholderplaceholderplaceholder placeholderplaceholderplaceholderplaceholder placeholderplaceholderplaceholderplaceholder placeholderplaceholderplaceholderplaceholder placeholderplaceholderplaceholderplaceholder placeholderplaceholderplaceholderplaceholder placeholderplaceholderplaceholderplaceholder placeholderplaceholderplaceholderplaceholder
              </p>
              <br/>
              <p className="text-md-center">
                <strong>Connect</strong>
              </p>
              <p className="text-md-center"><b><i className="fab fa-instagram"></i> Instagram : </b><a href="https://www.instagram.com/mangod6666/" target="_blank">Zhengzhe Yang</a></p>
              <p className="text-md-center"><b><i className="fas fa-university"></i> Education : </b>Emory University</p>
              <p className="text-md-center"><b><i className="fab fa-github-square"></i> Github : </b><a href="https://github.com/ZhengzheYang" target="_blank">Zhengzhe Yang</a></p>
              <p className="text-md-center"><b><i className="fab fa-linkedin"></i> LinkedIn : </b><a href="https://www.linkedin.com/in/zhengzhe-yang-826812138/" target="_blank">Zhengzhe Yang</a></p>
              <br/>
              <p className="text-md-center">
                <strong>Contact</strong>
              </p>
              <p className="text-md-center"><b><i className="fas fa-envelope"></i> Email : </b><a href="mailto:zhengzhe.yang@emory.edu">zhengzhe.yang@emory.edu</a> | Atlanta, GA</p>
            </div>
          </div>

          <div className="split">
            <hr width="50%"/>
          </div>

          <div className="row align-items-center">
            <div className="col-md-8">
              <br/>
              <p className="text-md-center">
                <strong>About</strong>
              </p>
              <p className="text-md-center">placeholderplaceholderplaceholderplaceholder placeholderplaceholderplaceholderplaceholder placeholderplaceholderplaceholderplaceholder placeholderplaceholderplaceholderplaceholder placeholderplaceholderplaceholderplaceholder placeholderplaceholderplaceholderplaceholder placeholderplaceholderplaceholderplaceholder placeholderplaceholderplaceholderplaceholder
              </p>
              <br/>
              <p className="text-md-center">
                <strong>Connect</strong>
              </p>
              <p className="text-md-center"><b><i className="fab fa-instagram"></i> Instagram : </b><a href="https://www.instagram.com/mangod6666/" target="_blank">Ying Wu</a></p>
              <p className="text-md-center"><b><i className="fas fa-university"></i> Education : </b>University of California, San Diego</p>
              <p className="text-md-center"><b><i className="fab fa-github-square"></i> Github : </b><a href="https://www.instagram.com/mangod6666/" target="_blank">Ying Wu</a></p>
              <p className="text-md-center"><b><i className="fab fa-linkedin"></i> LinkedIn : </b><a href="https://www.instagram.com/mangod6666/" target="_blank">Ying Wu</a></p>
              <br/>
              <p className="text-md-center">
                <strong>Contact</strong>
              </p>
              <p className="text-md-center"><b><i className="fas fa-envelope"></i> Email : </b><a href="mailto:zhengzhe.yang@emory.edu">yiw273@ucsd.edu</a> | San Diego, CA</p>

            </div>
            <div className="col-md-4">
              <img className="img-responsive" src={require("./images/She.jpg")} alt="us"/>
            </div>
          </div>
        </div>
      </div>
        );
  }
}

export default Us;
