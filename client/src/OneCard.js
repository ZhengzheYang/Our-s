import React from 'react';
import PropTypes from 'prop-types';

// component to display 1 card
const OneCard = (props) => {
  let collection = props.collection.split(".")[0];
  return (
    <div class="card">
      <div class="center text-center">
        <img class="card-img" src={props.img} alt="sorry"/>
        <div className="overlay"/>
        <div className="overlay-text">{`${collection}`}</div>
      </div>
    </div>
  );
}

OneCard.propTypes = {
  img: PropTypes.object.isRequired,
  collection: PropTypes.string
};

export default OneCard;
