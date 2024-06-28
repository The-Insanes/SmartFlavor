import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import LoginContainer from '../../components/login-container/login-container';
import Footer from '../../components/footers/footer-2/Footer';
import "./Login.css";

const Login: React.FC = () => {
  const history = useHistory();
  
  const handleRegisterNavigation = () => {
    history.push('/register');
  };

  return (
    <IonPage>
      <IonContent style={{ '--ion-background-color': '#FFEFBD' }}>
        <LoginContainer onRegisterClick={handleRegisterNavigation} />
        <Footer/>
      </IonContent>
    </IonPage>
  );
};

export default Login;
