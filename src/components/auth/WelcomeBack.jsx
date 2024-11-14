// src/components/Auth/WelcomeBack.jsx
import React from 'react';

const WelcomeBack = () => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Bem vindo de volta</h1>
          <p>Para continuar conectado conosco, faça login com suas informações pessoais</p>
          <button className="ghost" id="signIn">Login</button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Olá, Amigo!</h1>
          <p>Insira seus dados pessoais e comece sua jornada conosco</p>
          <button className='ghost' id='signUp'>Inscreva-se</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBack;
