import React, { useState } from 'react';
import './EditPostContainer.css';
import { IonButton, IonIcon } from '@ionic/react';
import { checkmark, checkmarkCircle, closeCircle, eyeOffOutline, trashOutline } from 'ionicons/icons';

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
    <div className='EditPostContainer'>
          <div className='SonsContainer'></div>
          <div className='c'>
            <div className="ConfirmDeny">
              <IonButton color="light" fill="clear" size='small' >
                <IonIcon icon={closeCircle} className='CloseCircle' color="light" slot="start" />
              </IonButton>
              ¿Confirmar cambios?
              <IonButton color="light" fill="clear" size='small' >
                <IonIcon icon={checkmarkCircle} className='CheckmarkCircle' slot="start" />
              </IonButton>
            </div>
            <div className="EditIngredientsSection">
              Editar Ingredientes:
              <div className='EditIngredients'>hola k ase</div>

            </div>

            <div className="EditDescription"></div>

            <div className="DeleteHide">
              <IonButton color="light" fill="clear" size='small'>
                <IonIcon icon={trashOutline} className='DeleteButton' color="light" slot="start" />
              </IonButton>
              <IonButton color="dark" fill="clear" size='small'>
                <IonIcon icon={eyeOffOutline} className='HideButton' color="light" slot="start" />
              </IonButton>
            </div>
          </div>
        </div>
    
        
      
       
          
          
          
        
      
    
  );
};

export default EditPostContainer;
