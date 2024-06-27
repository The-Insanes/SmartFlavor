import React, { useState } from 'react';
import './edit_post-container.css';
import { IonButton } from '@ionic/react';

interface EditPostContainerProps {
  recipe: {
    id: number;
    title: string;
    userImage: string;
    recipeImage: string;
    userName: string;
    likes: number;
    description: string;
  };
  onClose: () => void;
}

const EditPostContainer: React.FC<EditPostContainerProps> = ({ recipe, onClose }) => {
  const [presentationText, setPresentationText] = useState(recipe.description);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPresentationText(e.target.value);
  };

  const handleSave = () => {
    console.log('Updated presentation text:', presentationText);
    // Aquí podrías enviar los datos actualizados al backend
    onClose();
  };

  return (
    <div className="edit-post-container">
      <div className="edit-info-section">
        <IonButton className="custom-ion-button action-button" onClick={onClose}>
          <img src="/images/smartflavor/X-icon.png" alt="edit-icon" />
        </IonButton>
        <div className="edit-info-title">Editar información</div>
        <IonButton className="custom-ion-button action-button" onClick={handleSave}>
          <img src="/images/smartflavor/Goodtick-icon.png" alt="edit-icon" />
        </IonButton>
      </div>
      <div className="content-section">
        <div className="content-image">
          <img src={recipe.recipeImage} alt="Recipe" />
        </div>
        <div className="like-count">Likes: {recipe.likes}k</div>
        <div className="content-left">
          <input
            type="text"
            className="edit-input"
            value={presentationText}
            onChange={handleInputChange}
            placeholder="------------"
          />
          <div className="separator"></div>
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
