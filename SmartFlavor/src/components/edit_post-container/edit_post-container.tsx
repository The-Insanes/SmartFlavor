import React from 'react';
import './edit_post-container.css';
import { IonButton } from '@ionic/react';

const EditPostContainer: React.FC = () => {
  return (
    <div className="edit-post-container">
      <div className="edit-info-section">
        <IonButton className="custom-ion-button action-button">
          <img src="/images/smartflavor/X-icon.png" alt="edit-icon" />
        </IonButton>
        <div className="edit-info-title">Editar información</div>
        <IonButton className="custom-ion-button action-button">
          <img src="/images/smartflavor/Goodtick-icon.png" alt="edit-icon" />
        </IonButton>
      </div>
      <div className="content-section">
        <div className="content-left">
          <div className="content-left-top">
            <input
              type="text"
              className="edit-input"
              placeholder="------------"
            />
          </div>
          <div className="content-left-bottom">
            <div className="separator"></div>
          </div>
        </div>
        <div className="content-right">
          <div className="content-image"></div>
          <div className="like-count">Likes: 23k</div>
        </div>
      </div>
      <div className="action-buttons">
        <IonButton className="custom-ion-button action-button">
          <img src="/images/smartflavor/trashcan-icon.png" alt="eye-icon" />
        </IonButton>
        <IonButton className="custom-ion-button action-button">
          <img src="/images/smartflavor/eye-hide-icon.png" alt="trash-icon" />
        </IonButton>
      </div>
    </div>
  );
};

export default EditPostContainer;

