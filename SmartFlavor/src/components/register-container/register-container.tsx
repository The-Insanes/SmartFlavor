import React, { useState } from 'react';
import { IonButton, IonImg } from '@ionic/react';
import './register-container.css';
import InputBar from '../input-bar/input-bar';

interface RegisterContainerProps {
  onLoginClick: () => void;
  onRegisterSuccess: () => void;
}

const RegisterContainer: React.FC<RegisterContainerProps> = ({ onLoginClick, onRegisterSuccess }) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    const areAllFieldsFilled = email !== '' && fullName !== '' && username !== '' && password !== '';

    if (areAllFieldsFilled) {
      setTimeout(() => {
        console.log({
          email,
          fullName,
          username,
          password,
        });
        onRegisterSuccess();
      }, 1000);
    } else {
      alert('Por favor completa todos los campos.');
    }
  };

  return (
    <div className="register-container">
      <div className="header">
        <IonImg src="./images/smartflavor/logo.svg" className="logo" />
        <div className="title">SmartFlavor</div>
      </div>
      <div className="subtitle">Regístrate para ver recetas de tus amigos</div>
      <div className="input-section">
        <InputBar 
          label="Correo electrónico" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.detail?.value ?? '')} 
        />
        <InputBar 
          label="Nombre Completo" 
          type="text" 
          value={fullName} 
          onChange={(e) => setFullName(e.detail?.value ?? '')} 
        />
        <InputBar 
          label="Nombre de usuario" 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.detail?.value ?? '')} 
        />
        <InputBar 
          label="Contraseña" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.detail?.value ?? '')} 
        />
      </div>
      <div className="terms">
        <span>Al registrarte, aceptas nuestras </span>
        <span className="link">Condiciones</span>
        <span>, nuestra </span>
        <span className="link">Política de privacidad</span>
        <span> y nuestra </span>
        <span className="link">Política de cookies</span>
      </div>
      <IonButton fill="solid" className="register-button" onClick={handleRegistration}>Registrarse</IonButton>
      <div className="login-container">
        <span className="login-text">¿Tienes una cuenta?</span>
        <IonButton fill="clear" className="login-link" onClick={onLoginClick}>Entrar</IonButton>
      </div>
    </div>
  );
};

export default RegisterContainer;
