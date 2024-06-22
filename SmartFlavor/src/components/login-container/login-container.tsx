import React from 'react';
import './login-container.css';
import InputBar from '../input-bar/input-bar'; // Asegúrate de ajustar la ruta si es necesario
import { IonButton } from '@ionic/react';

const LoginContainer: React.FC = () => {
  return (
    <div className="login-container">
      <div className="logo-section">
        <img src="./images/smartflavor/logo.svg" alt="SmartFlavor logo" className="logo"/>
        <div className="title">SmartFlavor</div>
      </div>
      <InputBar label="Usuario o correo electrónico" />
      <InputBar label="Contraseña" type="password" />
      <IonButton expand="block" className="login-button">Iniciar sesión</IonButton>
      <div className="forgot-password">¿Has olvidado la contraseña?</div>
      <div className="register-container">
        <div className="register-text">¿No tienes una cuenta? </div>
        <IonButton fill="clear" className="register-link">Regístrate</IonButton>
      </div>
    </div>
  );
};

export default LoginContainer;


