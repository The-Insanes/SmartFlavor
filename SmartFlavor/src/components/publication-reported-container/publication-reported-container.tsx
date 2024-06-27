import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import './publication-reported-container.css';

const PublicationReportedContainer = () => {
  return (
    <IonCard className="publication-reported-container">
      <IonCardHeader>
        <IonCardTitle className="container-header">
          Publicaciones Reportadas
          <hr className="header-divider" />
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="container-content">
        <div className="images-container">
          <img src="/images/smartflavor/recipe-1.png" alt="Publication 1" className="publication-image" />
          <img src="/images/smartflavor/recipe-1.png" alt="Publication 2" className="publication-image" />
          <img src="/images/smartflavor/recipe-1.png" alt="Publication 3" className="publication-image" />
        </div>
        <IonButton fill="clear" className="view-more-button">
          <IonIcon icon={chevronForwardOutline} />
          Ver más
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default PublicationReportedContainer;
