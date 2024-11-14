// src/App.jsx
import React from 'react';
import { SignIn, SignUp, WelcomeBack } from './components/Auth';

const App = () => {
  return (
    <section className="login-container" id="login-container">
      <SignUp />
      <SignIn />
      <WelcomeBack />
    </section>
  );
};

export default App;
