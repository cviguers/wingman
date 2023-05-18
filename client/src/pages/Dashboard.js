import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import '../componentStyles/welcome.css';

const Dashboard = () => {
  const cardData = [
    {
      photo: "../imgs/eagle.png",
      title: "Bird ID Random",
      description: "Description for Card 1",
      blurb: "some more info for the card",
    },
    {
      photo: "../imgs/gull.png",
      title: "Bird ID Random",
      description: "Description for Card 2",
      blurb: "some more info for the card",
    },
    {
      photo: "../imgs/gull.png",
      title: "Bird ID Random",
      description: "Description for Card 2",
      blurb: "some more info for the card",
    },
    {
      photo: "../imgs/gull.png",
      title: "Bird ID Random",
      description: "Description for Card 2",
      blurb: "some more info for the card",
    },
  ];

  return (
    <section className="layout">
      <div className="header">
      <Link to="/">
        <img src="../imgs/P3-logo.png" alt="wingman logo" />
        </Link>
        <Link to="/user-profile">
        <button className="ac-btn">Account</button>
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
        <ul className="card-list">
          {cardData.map((card, index) => (
            <li key={index}>
              <Card
                photo={card.photo}
                title={card.title}
                description={card.description}
                blurb={card.blurb}
              />
            </li>
          ))}
        </ul>
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
