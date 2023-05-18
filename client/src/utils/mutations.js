import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $birdname: String!, $password: String!) {
  addUser(username: $username, email: $email, birdname: $birdname, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      postText
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const REMOVE_POST = gql`
mutation RemovePost($postId: ID!) {
  removePost(postId: $postId) {
    _id
  }
}
`;

export const LIKE_USER = gql`
  mutation LikeUser($userId: ID!, $likedUserId: ID!) {
    likeUser(userId: $userId, likedUserId: $likedUserId)
  }
`;

export const LIKED_BY_USER = gql`
  mutation LikedByUser($userId: ID!, $likedByUserId: ID!) {
    likedByUser(userId: $userId, likedByUserId: $likedByUserId)
  }
`;

export const NEW_LIKE_RECEIVED = gql`
  subscription onLikeReceived($userId: ID!) {
    onLikeReceived(userId: $userId) {
      birdname
      img
    }
  }
`;
