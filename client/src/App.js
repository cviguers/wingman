import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// We import our Welcome component from our components folder so that we can eventually return it.

import './index.css'; 
import Welcome from './components/Welcome';
import WelcomeForm from './components/WelcomeForm';
import Dashboard  from './components/Dashboard';
import UserProfile from './components/UserProfile';
import BirdProfile from './components/BirdProfile';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Inside our App component, we have a return method that contains all the JSX we want to render to the screen.
// In this example, we have a parent `div` that references the Welcome component that we imported at the top.
 function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route exact path="/" component={Welcome} />
        <Route path="/welcome-form" component={WelcomeForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/bird-profile" component={BirdProfile} />
      </Routes>
    </Router>
    </ApolloProvider>
  );
}

export default App;