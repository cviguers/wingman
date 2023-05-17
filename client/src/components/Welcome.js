import React from 'react';
import '../component styles/welcome.css';


export default function Welcome() {
  return (
<section class='layout'>
    <div class="header">
        <img src="./P3-logo.png" alt="wingman logo">
        <button>Sign in</button>
    </div>
    <div class="leftSide">
        <h1>READY TO SPREAD YOUR WINGS AND FLY?</h1>
        <p>WINGMAN is the only dating app made by birds, for birds.</p>
        <p>You deserve to find the perfect partner to meet today whatever your needs.</p>
        <p>Looking to nest down for the long haul?</p>
        <p>Looking for an easy breezy flit?</p>
        <p>WINGMAN has you covered</p>
        <button>JOIN WINGMAN TODAY</button>
    </div>
    <div class="content">
        <div class="image-carousel">
            <img class="active c-img" src="./yellow-bird.png" alt="yellowBird">
            <img class="active c-img" src="./eagle.png" alt="eagle">
            <img class="active c-img" src="./bird-of-paradise.png" alt="BoP">
            <img class="active c-img" src="./gull.png" alt="gull">
        </div>
    </div>
    <div class="footer1">
        <h1>"Chirp cheep. Chirp chirp chip chirp, cheep chirp.
        Chirpy cheep chirp chip."</h1>
        <span></span>
        <p>- A Birb</p>
    </div>
    <div class="footer2">
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
</section>
      <script>
        const carouselImages = document.querySelectorAll('.c-img');
        let currentIndex = 0;

        function showNextImage() {
        console.log(currentIndex)
        console.log(carouselImages)
        carouselImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselImages.length;
        carouselImages[currentIndex].classList.add('active');
        }

        setInterval(showNextImage, 3000); // Change image every 5 seconds
      </script>
  );
}