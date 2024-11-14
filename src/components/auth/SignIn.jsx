// src/components/Auth/SignIn.jsx
import React from 'react';

const SignIn = () => {
  return (
    <div className="form-container sign-in-container">
      <form action="#">
        <h1>Fazer login</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" className="social">
            <i className="fa-brands fa-google-plus-g"></i>
          </a>
          <a href="#" className="social">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <span>ou use sua conta</span>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <a href="#">Esqueceu sua senha?</a>
        <button>Login</button>
      </form>
    </div>
  );
};

export default SignIn;
