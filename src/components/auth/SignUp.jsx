// src/components/Auth/SignUp.jsx
import React from 'react';

const SignUp = () => {
  return (
    <div className="form-container sign-up-container">
      <form action="#">
        <h1>Criar Conta</h1>
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
        <span>ou use seu email para se registrar</span>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <button>Inscreva-se</button>
      </form>
    </div>
  );
};

export default SignUp;
