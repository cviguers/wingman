import { useEffect, useState } from 'react';
import React from 'react';
import '../component styles/welcome.css';
import Popup from '../components/Popup.js';

const Welcome = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const carouselImages = document.querySelectorAll('.c-img');
    let currentIndex = 0;
    
    function showNextImage() {
      console.log(currentIndex);
      console.log(carouselImages);    
      carouselImages[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % carouselImages.length;
      carouselImages[currentIndex].classList.add('active');
    };
    
    const interval = setInterval(() => {
      showNextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
    const togglePopup = () => {
      setShowPopup(!showPopup);
  };
  
  

  return (
    <section className='layout'>
          <div className="header">
            <img src="../imgs/P3-logo.png" alt="wingman logo"/>
            <button>Sign in</button>
          </div>
          <div className="leftSide">
            <h1>READY TO SPREAD YOUR WINGS AND FLY?</h1>
            <p>WINGMAN is the only dating app made by birds, for birds.</p>
            <p>You deserve to find the perfect partner to meet today whatever your needs.</p>
            <p>Looking to nest down for the long haul?</p>
            <p>Looking for an easy breezy flit?</p>
            <p>WINGMAN has you covered</p>
            <button onClick={togglePopup}>JOIN WINGMAN TODAY</button>
          </div>
          <div className="content">
            <div className="image-carousel">
                <img className="active c-img" src="../imgs/yellow-bird.png" alt="yellowBird"/>
                <img className="c-img" src="../imgs/eagle.png" alt="eagle"/>
                <img className="c-img" src="../imgs/bird-of-paradise.png" alt="BoP"/>
                <img className="c-img" src="../imgs/gull.png" alt="gull"/>
              </div>
          </div>
          <div className="footer1">
            <h1>"Chirp cheep. Chirp chirp chip chirp, cheep chirp.
                Chirpy cheep chirp chip."</h1>
                <span></span>
                <p>- A Birb</p>
            
          </div>
          <div className="footer2">
            <ul>
                <li>
                    <h1>“Bawk Bawk. Wark Bawk buck buck bawk.
                    Bawk buck buck buck buckaaaaaw!”</h1>
                    <span></span>
                    <p>- Chic Ken</p>
                </li>
                <li>
                    <h1>“Im so glad that I took the chance with 
                        WINGMAN! I found the love of my Squack ”</h1>
                    <span></span>
                    <p>- Ruffles the Parrot</p>
                </li>
            </ul>
          </div>
          {showPopup && <Popup onClose={togglePopup} />} {/* Render the Popup component conditionally based on showPopup state */}
    </section>
  );
}

export default Welcome;