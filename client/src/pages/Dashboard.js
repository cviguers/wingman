import React from "react";
import UserList from '../components/UserList/index'
import { Link } from "react-router-dom";
import '../componentStyles/welcome.css';

const Dashboard = () => {
  return (
    <section className="layout">
      <div className="header">
      <Link to="/">
        <img src="../imgs/P3-logo.png" alt="wingman logo" />
        </Link>
        <Link to="/user-profile">
        <button className="ac-btn">Account</button>
        </Link>
        <Link to="/dashboard">
          <button className="db-btn">Dashboard</button>
        </Link>
        <Link to="/">
        <button>Log out</button>
        </Link>
      </div>
      <div className="leftSide">
        <h1>Search section goes here</h1>
        <p>I'm thinking it will make a pop up window like the sign in</p>
        <p>
          With more cards like the feature cards.
        </p>
        <button>SEARCH</button>
      </div>
      <div className="content">
        <h1>Featured Birds</h1>
          <UserList className='card-list' />
      </div>
      <div className="footer1">
        <h1>
          "Chirp cheep. Chirp chirp chip chirp, cheep chirp. Chirpy cheep chirp
          chip."
        </h1>
        <span></span>
        <p>- A Birb</p>
      </div>
      <div className="footer2">
        <ul>
          <li>
            <h1>
              “Bawk Bawk. Wark Bawk buck buck bawk. Bawk buck buck buck
              buckaaaaaw!”
            </h1>
            <span></span>
            <p>- Chic Ken</p>
          </li>
          <li>
            <h1>
              “Im so glad that I took the chance with WINGMAN! I found the love
              of my Squack ”
            </h1>
            <span></span>
            <p>- Ruffles the Parrot</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Dashboard;
