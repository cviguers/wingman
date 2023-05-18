import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ photo, title, description, blurb }) => {
  return (
    <div className="card">
      <Link to="/bird-profile">
      <img src={photo} alt="Card" className="card-image" />
      <h1 className="card-title">{title}</h1>
      </Link>
      <p className="card-description">{description}</p>
      <p className='blurb'>{blurb}</p>      
    </div>
  );
};

export default Card;