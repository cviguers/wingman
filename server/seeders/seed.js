// <<<<<<< ctv05
const db = require('../config/connection');
const { User, Post } = require('../models');
const userSeeds = require('./userSeeds.json');
const postSeeds = require('./postSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Post.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, postAuthor } = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: postAuthor },
        {
          $addToSet: {
            post: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('seeded!');
  process.exit(0);
});

// const Profile = require('../models/User');
// const animals = require('random-animals-pictures');
// const fetch = require('node-fetch');

//  // Generate random profile data
// const generateProfileData = async () => {
//   // Generate quote
//   const quoteURL = 'https://animechan.vercel.app/api/random';
//   const response = await fetch(quoteURL);
//   const data = await response.json();
//   // Generate name
//   const nameURL = 'https://api.fungenerators.com/name/generate?category=pet';
//   const response2 = await fetch(nameURL);
//   const data2 = await response2.json();
//   // Generate image
//   const url = await animals.bird();
//   return {
//     name: data2.names[0],
//     img: url,
//     quote: data.quote,
//   };
// };

//  // Seed the database with profiles
// const seedProfiles = async (numProfiles) => {
//   for (let i = 0; i < numProfiles; i++) {
//     const profileData = await generateProfileData();
//     const profile = new Profile(profileData);
//     await profile.save();
// >>>>>>> main
//   }
//   console.log(`Successfully seeded ${numProfiles} profiles`);;
// };

//  // Seed profiles, insert how many
// seedProfiles(10);