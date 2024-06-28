import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Header from '../../components/header-interact/Header';
import Footer from '../../components/footers/footer-1/Footer';
import EditProfileContainer from '../../components/edit-profile-container/edit-profile-container';

const EditProfile: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <EditProfileContainer />
      </IonContent>
      <Footer className="footer" />
    </IonPage>
  );
};

export default EditProfile;
