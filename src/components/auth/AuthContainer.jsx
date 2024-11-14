// src/components/Auth/AuthContainer.jsx
import React, { useState } from 'react';
import { SignIn, SignUp, WelcomeBack } from '.';

const AuthContainer = () => {
  const [isSignInActive, setIsSignInActive] = useState(true);

  const handleToggle = () => {
    setIsSignInActive(!isSignInActive);
  };

  return (
    <div className="auth-container">
      {isSignInActive ? (
        <SignIn />
      ) : (
        <SignUp />
      )}
      <WelcomeBack onToggle={handleToggle} isSignInActive={isSignInActive} />
    </div>
  );
};

export default AuthContainer;
