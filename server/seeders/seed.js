const User = require("../models/User");
const animals = require("random-animals-pictures");
const fetch = require("node-fetch");

// Generate random User data
const generateUserData = async () => {
  // Generate quote
  const quoteURL = "https://animechan.vercel.app/api/random";
  const response = await fetch(quoteURL);
  const data = await response.json();
  // Generate name
  const nameURL = "https://api.fungenerators.com/name/generate?category=pet";
  const response2 = await fetch(nameURL);
  const data2 = await response2.json();
  // Generate image
  const url = await animals.bird();
  return {
    birdname: data2.names[0],
    img: url,
    quote: data.quote,
  };
};
const generateEntryData = async (name) => {
  const randomNum = Math.floor(Math.random() * 100);
  const username = `${name}${randomNum}`;
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
  for (let i = 0; i < numUsers; i++) {
    const userData = await generateUserData();
    const entryData = await generateEntryData(userData.birdname);
    const user = new User({...userData, ...entryData});
    await user.save();
  }
  console.log(`Successfully seeded ${numUsers} users`);
};

// Seed users, insert how many
seedUsers(10);
