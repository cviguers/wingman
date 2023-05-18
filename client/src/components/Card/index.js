import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div className="card">
      <Link to="/bird-profile">
      <img src={user.img} alt={user.birdname} className="card-image" />
      <h1 className="card-title">{user.birdname}</h1>
      </Link>
      <p className="card-description">{user.migration}</p>
      <p className='blurb'>{user.quote}</p>      
    </div>
  );
};

export default Card;