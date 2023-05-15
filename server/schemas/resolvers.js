const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  // read query: get data from the server
  Query: {
    // get all users and associated username
    users: async () => {
      return User.find().populate("username");
    },
    // get a user by username and populate that user's posts
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("posts");
    },
    // get all posts and populate those posts with their comments, sort by newest
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    // get a single post by id
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    // show the logged in user's profile and populate their posts
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("posts");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {},
};
