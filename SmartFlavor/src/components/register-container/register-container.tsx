import React from 'react';
import { IonButton, IonImg } from '@ionic/react';
import './register-container.css';
import InputBar from '../input-bar/input-bar';

interface RegisterContainerProps {
  onLoginClick: () => void;
  onRegisterSuccess: () => void;
}
/*
const RegisterContainer: React.FC<RegisterContainerProps> = ({ onRegisterSuccess }) => {
  // Estados para almacenar los valores de los campos del formulario
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el registro
  const handleRegistration = () => {
    // Implementa la lógica para verificar que todos los campos estén llenos
    const areAllFieldsFilled = email !== '' && fullName !== '' && username !== '' && password !== '';

    if (areAllFieldsFilled) {
      // Aquí deberías llamar a una función que haga el registro (backend, API, etc.)
      // En este ejemplo, simplemente llamamos a la función `onRegisterSuccess` para navegar
      onRegisterSuccess(); // Navegar a la página de búsqueda (Search) después de registrarse
    } else {
      // Implementa lógica para mostrar mensaje de error o manejar el caso donde campos no están llenos
      alert('Por favor completa todos los campos.');
    }
  };
*/ 
const RegisterContainer: React.FC<RegisterContainerProps> = ({ onLoginClick, onRegisterSuccess}) => {
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
      <IonButton fill="clear" className="register-button" onClick={onRegisterSuccess}>Registrarse</IonButton>
      <div className="login-container">
        <span className="login-text">¿Tienes una cuenta?</span>
        <IonButton fill="clear" className="login-link" onClick={onLoginClick}>Entrar</IonButton>
      </div>
    </div>
  );
};

export default RegisterContainer;

///Arreglar este componente para conectarlo con backend