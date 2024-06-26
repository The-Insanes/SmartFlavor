import React from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/footers/footer-2/Footer';
import RegisterContainer from '../../components/register-container/register-container';
import "./Register.css";

const Register: React.FC = () => {
  const history = useHistory();

  const handleLoginNavigation = () => {
    // Navegar a la página de Login después de registrarse
    history.push('/login');
  };
  const handleRegisterSuccess = () => {
    // Navegar a la página de búsqueda (Search) después de registrarse
    history.push('/search');
  };

  return (
    <IonPage>
      <IonContent style={{ '--ion-background-color': '#FFEFBD' }}>
        <RegisterContainer onRegisterSuccess={handleRegisterSuccess} onLoginClick={handleLoginNavigation} />
        <Footer/>
      </IonContent>
    </IonPage>
  );
};

export default Register;
