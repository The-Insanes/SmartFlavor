import React, { useState } from 'react';
import './login-container.css';
import InputBar from '../input/input-bar/input-bar'; // Asegúrate de ajustar la ruta si es necesario
import { IonButton } from '@ionic/react';
import { Redirect } from 'react-router';

interface LoginContainerProps {
  onRegisterClick: () => void;
}

const LoginContainer: React.FC<LoginContainerProps> = ({ onRegisterClick }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, serRegister] = useState<boolean>(false);
  const [home, setHome] = useState<boolean>(false);

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
      {register && <Redirect to="/register"></Redirect>}
      {home && <Redirect to="/user-home"></Redirect>}
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
      <IonButton expand="block" className="login-button" onClick={(e) => {handleLogin(); setHome(!home)}}>
        Iniciar sesión
      </IonButton>
      <div className="forgot-password">¿Has olvidado la contraseña?</div>
      <div className="register-container">
        <div className="register-text">¿No tienes una cuenta? </div>
        <IonButton fill="clear" className="register-link" onClick={(e) => {onRegisterClick(); serRegister(!register)}}>Regístrate</IonButton>
      </div>
    </div>
  );
};

export default LoginContainer;
