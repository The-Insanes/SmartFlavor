import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonButton } from '@ionic/react';
import { heartOutline } from 'ionicons/icons';
import './recipe-container.css';

const RecipeContainer = () => {
  return (
    <IonCard className="recipe-container">
      <IonCardHeader>
        <IonCardTitle className="recipe-header">
          Receta 1
          <IonButton fill="clear" className="heart-button">
            <IonIcon icon={heartOutline} className="heart-icon" />
          </IonButton>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <img
          src="/images/smartflavor/pasta.png"
          alt="Recipe"
          className="recipe-image"
        />
        <div className="recipe-footer">
          <span>Usuario XXXXXXX</span>
          <IonButton fill="clear" className="view-more-button">Ver más →</IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default RecipeContainer;
