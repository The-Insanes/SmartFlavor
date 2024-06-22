import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import ProfilePresentation from '../profile-presentation/profile-presentation';
import './user-reported-container.css';

const UserReportedContainer = () => {
  return (
    <IonCard className="user-reported-container">
      <IonCardHeader>
        <IonCardTitle className="container-header">
          Usuarios Reportados
          <hr className="header-divider" />
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="container-content">
        <div className="profiles-container">
          <ProfilePresentation />
          <ProfilePresentation />
          <ProfilePresentation />
        </div>
        <IonButton fill="clear" className="view-more-button">
          Ver más
          <IonIcon icon={chevronForwardOutline} />
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default UserReportedContainer;
