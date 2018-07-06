import React from 'react';
import PropTypes from 'prop-types';

// component to display 1 card
const OneCard = (props) => {
  return (
    <div class="card">
      <img class="card-img" src={props.img} alt="sorry"/>
    </div>
  );
}

Comment.propTypes = {
  img: PropTypes.object.isRequired,
};

export default OneCard;
