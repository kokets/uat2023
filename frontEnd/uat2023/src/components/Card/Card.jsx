import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInfoCircle, faHandsHelping, faChartLine, faSeedling, faUniversity, faLightbulb, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Card.css'
const Card = ({ title, content, icon }) => {
  return (
    <div className="card">
      <FontAwesomeIcon icon={icon} className="card-icon" />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
