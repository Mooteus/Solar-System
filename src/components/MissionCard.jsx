import React from 'react';
import PropTypes from 'prop-types';

function MissionCard({
  name, year, country, destination,
}) {
  return (
    <div className="mission-card">
      <p>{name}</p>
      <p>{year}</p>
      <p>{country}</p>
      <p>{destination}</p>
    </div>
  );
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
