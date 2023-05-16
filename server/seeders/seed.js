const User = require("../models/User");
const fetch = require("node-fetch");
const birdNames = require('./birdnames');

 // Generate random User data
const generateUserData = async (usedNames) => {
  // Generate quote
  const quoteURL = "https://animechan.vercel.app/api/random";
  const quoteResponse = await fetch(quoteURL);
  const quoteData = await quoteResponse.json();
  const randomQuote = quoteData.quote;

   // Generate name
  let randomBirdName;
  do {
    randomBirdName = birdNames[Math.floor(Math.random() * birdNames.length)];
  } while (usedNames.includes(randomBirdName));
  usedNames.push(randomBirdName);

   // Generate image
  const imgURL = "https://api.unsplash.com/photos/random?query=Bird&client_id=WRoEDY4c-F5JQrvWZAOc-msgmPeGM6ge71fIALwUiys";
  const imgResponse = await fetch(imgURL);
  const imgData = await imgResponse.json();
  const randomImg = imgData.urls.regular;
   return {
    birdname: randomBirdName,
    img: randomImg,
    quote: randomQuote,
  };
};
// Generate random username, password, and email
const generateEntryData = async (name) => { 
  const randomNum = Math.floor(Math.random() * 100); 
  const username = `${name.replace(/\s+/g, '')}${randomNum}`;
  const password = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); 
  const domain = 'example.com'; 
  const email = `${username}@${domain}`;
  return { 
    username: username, 
    password: password, 
    email: email, 
  }; 
};

 // Seed the database with Users
const seedUsers = async (numUsers) => {
  const usedNames = [];
  const userData = [];
  for (let i = 0; i < numUsers; i++) {
    const user = await generateUserData(usedNames);
    const entry = await generateEntryData(user.birdname);
    userData.push({...user, ...entry});
  }
  console.log(userData)
  await User.insertMany(userData, { ordered: false });
  console.log(`Successfully seeded ${numUsers} users`);
};

 // Seed users, insert how many
seedUsers(10);