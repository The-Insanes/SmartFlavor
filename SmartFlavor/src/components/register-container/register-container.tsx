import React from 'react';
import { IonContent, IonPage, IonButton, IonImg } from '@ionic/react';
import './register-container.css';
import InputBar from '../input-bar/input-bar';

const RegisterContainer: React.FC = () => {
  return (
      <div className="register-container">
        <div className="header">
          <IonImg src="./images/smartflavor/logo.svg" className="logo" />
          <div className="title">SmartFlavor</div>
        </div>
        <div className="subtitle">Regístrate para ver recetas de tus amigos</div>
        <div className="input-section">
          <InputBar label="Correo electrónico" />
          <InputBar label="Nombre Completo" />
          <InputBar label="Nombre de usuario" />
          <InputBar label="Contraseña" type="password" />
        </div>
        <div className="terms">
          <span>Al registrarte, aceptas nuestras </span>
          <span className="link">Condiciones</span>
          <span>, nuestra </span>
          <span className="link">Política de privacidad</span>
          <span> y nuestra </span>
          <span className="link">Política de cookies</span>
        </div>
        <IonButton className="register-button">Registrarse</IonButton>
        <div className="login-container">
          <span className="login-text">¿Tienes una cuenta?</span>
          <a href="" className="login-link">Entrar</a>
        </div>
      </div>

  );
};

export default RegisterContainer;
