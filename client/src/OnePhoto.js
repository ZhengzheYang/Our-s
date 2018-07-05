import React from 'react';
import PropTypes from 'prop-types';

const Photo = (props) => {
  return (
    <div className='onephoto'>
      <div className="image">
        <img src={ props.img } alt="sorry" width="100%" height="100%"/>
      </div>
      <div className="caption">
        <h1>Cats</h1>
      </div>
    </div>
  );
}

Comment.propTypes = {
  img: PropTypes.object.isRequired,
  // author: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
  // where: PropTypes.string.isRequired,
};

export default Photo;
