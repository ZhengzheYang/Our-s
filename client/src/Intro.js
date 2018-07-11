import React from 'react';
import  PropTypes from 'prop-types';

// const Image = (img) => {
//   return(
//
//   );
// }

const Intro = (props) => {

  return(
    <div className="container-fluid">
      {/* <div class="row">
        <div class="col-md-3">
          <img class="img-responsive" src={props.img} alt="us"/>
        </div>
        <div class="col-md-4">
          {props.intro}
        </div>
        <div class="col-md-4">
          <ul class="fa-ul">
        <li><i class="fa fa-li fa-envelope-o"></i><strong>Email</strong> : <a href="mailto:jackyzz1997@outlook.com">jackyzz1997@outlook.com</a></li>
        <li><i class="fa fa-li fa-home"></i><strong>Adress</strong> : Emory Univeristy, Atlanta GA.</li>
        <li><i class="fa fa-li fa-globe"></i><strong>Github</strong> : <a href="https://github.com/ZhengzheYang" target="_blank">https://github.com/ZhengzheYang</a></li>
        <li><i class="fa fa-li fa-globe"></i><strong>Linkedin</strong> : <a href="https://www.linkedin.com/in/zhengzhe-yang-826812138/" target="_blank">https://linkedin.com/Zhengzheyang</a></li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};


Intro.propTypes = {
  img: PropTypes.object.isRequired,
  intro: PropTypes.string.isRequired,
};

export default Intro;
