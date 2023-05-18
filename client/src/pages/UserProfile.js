import React from "react";
import "../componentStyles/userProfile.css";
import { Link } from "react-router-dom";

const UserProfile = () => {
  // Sample user data
  const user = {
    name: "Fabulous Feathers",
    age: 4,
    location: "New York",
    bio: "Hello there, feathered friends! I'm a vibrant and adventurous bird, searching for a special mate to soar through the skies with. Here's a little about me. Im a magnificent Scarlet Macaw, known for my breathtaking plumage and melodious calls. If you appreciate vibrant colors and a captivating voice, were off to a great start. Im an avid flyer and enjoy exploring new territories. From lush rainforests to expansive meadows, I love to embrace the wonders of nature. Join me on exhilarating aerial displays and lets create unforgettable memories together. Im a social creature with a warm and friendly disposition. I enjoy forming strong bonds with my partner and believe in the power of communication. Whether it's playful banter or heartfelt conversations, let's connect on both intellectual and emotional levels. Im seeking a partner who shares my desire to build a loving nest and raise a family. Together, we can construct a cozy abode, carefully tending to our future hatchlings and providing them a nurturing environment. I have a taste for delectable fruits, seeds, and nuts. As a couple, we can embark on culinary expeditions, discovering nature's delectable offerings and savoring every bite. Sharing delicious meals while perched together sounds like the perfect date to me What Im looking for is bird who exudes confidence, possess a sense of adventure, and have a zest for life. If you're a passionate flyer, possess a beautiful voice, and value loyalty in a mate, we're bound to make an extraordinary pair. So, fellow avian, if you're ready to take flight together, explore the skies, and embark on a lifelong journey of love, let's connect our wings and create a symphony of love among the clouds.",
    profileImage: "../imgs/bird-of-paradise.png",
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
        <Link to="/">
        <button>Log out</button>
        </Link>
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
