const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const migrationPatterns = require('../seeders/birdMigratoryPatterns')

const userSchema = new Schema({
  birdname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  img: {
    contentType: String,
  },
  quote: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  // create relationship between user and posts
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  Likes: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
  ],
  LikedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
  Migration: [
    {
      type: String,
      enum: migrationPatterns,
    }
  ]

});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;