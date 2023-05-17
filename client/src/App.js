import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// We import our Welcome component from our components folder so that we can eventually return it.
import './index.css'; 
import Welcome from '../public/src/components/Welcome';
import WelcomeForm from '../public/src/components/WelcomeForm';
import Dashboard  from '../public/src/components/Dashboard';
import UserProfile from '../public/src/components/UserProfile';
import BirdProfile from '../public/src/components/BirdProfile';

// Inside our App component, we have a return method that contains all the JSX we want to render to the screen.
// In this example, we have a parent `div` that references the Welcome component that we imported at the top.
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Welcome} />
        <Route path="/welcome-form" component={WelcomeForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/bird-profile" component={BirdProfile} />
      </Routes>
    </Router>
  );
}