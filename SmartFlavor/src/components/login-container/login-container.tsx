import React, { useState } from 'react';
import './login-container.css';
import InputBar from '../input-bar/input-bar'; // Asegúrate de ajustar la ruta si es necesario
import { IonButton } from '@ionic/react';

interface LoginContainerProps {
  onRegisterClick: () => void;
}

const LoginContainer: React.FC<LoginContainerProps> = ({ onRegisterClick }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulación de llamada a la API
    setTimeout(() => {
      // Aquí deberías realizar la verificación real de credenciales
      // Para la simulación, simplemente mostramos un alert
      if (usernameOrEmail === 'testuser' && password === 'password') {
        alert('Inicio de sesión exitoso');
      } else {
        alert('Nombre de usuario o contraseña incorrectos');
      }
    }, 1000); // Simula una llamada de red con 1 segundo de retraso
  };

  return (
    <div className="login-container">
      <div className="logo-section">
        <img src="./images/smartflavor/logo.svg" alt="SmartFlavor logo" className="logo"/>
        <div className="title">SmartFlavor</div>
      </div>
      <InputBar 
        label="Usuario o correo electrónico" 
        value={usernameOrEmail} 
        onChange={(e) => setUsernameOrEmail(e.detail?.value ?? '')} 
      />
      <InputBar 
        label="Contraseña" 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.detail?.value ?? '')} 
      />
      <IonButton expand="block" className="login-button" onClick={handleLogin}>
        Iniciar sesión
      </IonButton>
      <div className="forgot-password">¿Has olvidado la contraseña?</div>
      <div className="register-container">
        <div className="register-text">¿No tienes una cuenta? </div>
        <IonButton fill="clear" className="register-link" onClick={onRegisterClick}>Regístrate</IonButton>
      </div>
    </div>
  );
};

export default LoginContainer;
