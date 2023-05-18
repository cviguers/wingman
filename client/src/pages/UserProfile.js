import React from "react";
import "../componentStyles/userProfile.css";
import { Link } from "react-router-dom";

const UserProfile = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    age: 25,
    location: "New York",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur urna id mattis convallis.",
    profileImage: "../imgs/profile-image.jpg",
  };

  return (
    <section className="layout">
      <div className="header">
      <Link to="/">
        <img src="../imgs/P3-logo.png" alt="wingman logo" />
        </Link>
        <Link to="/user-profile">
          <button className="ac-btn">Account</button>
        </Link>
        <button>Log out</button>
      </div>
      <div className="leftSide">
        <h1>not sure what to put here</h1>
        <p>maybe just keep the search bar available?</p>
        <p>With more cards like the feature cards.</p>
        <button>SEARCH</button>
      </div>
      <div className="user-profile">
        <div className="profile-header">
          <h1>{user.name}</h1>
          <p>
            {user.age} years old, {user.location}
          </p>
        </div>
        <div className="profile-content">
          <div className="profile-image">
            <img src={user.profileImage} alt="Profile" />
          </div>
          <div className="profile-details">
            <h2>About Me</h2>
            <p>{user.bio}</p>
          </div>
        </div>
        <button className="upd-btn">Update Profile</button>
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

export default UserProfile;
