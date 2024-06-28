import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonButton } from '@ionic/react';
import { heartOutline } from 'ionicons/icons';
import './recipe-container.css';

// Definición de tipo para las props del componente
interface RecipeContainerProps {
  recipe: {
    id: number;
    title: string;
    userImage: string;
    recipeImage: string;
    userName: string;
  };
  isReportPage?: boolean; // Nueva prop para determinar si está en la página de reporte
}

const RecipeContainer: React.FC<RecipeContainerProps> = ({ recipe, isReportPage = false }) => {
  return (
    <IonCard className={`recipe-container ${isReportPage ? 'report-page' : ''}`}>
      <IonCardHeader>
        <IonCardTitle className={`recipe-header ${isReportPage ? 'report-page' : ''}`}>
          {recipe.title}
          <IonButton fill="clear" className="heart-button">
            <IonIcon icon={heartOutline} className="heart-icon" />
          </IonButton>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <img
          src={recipe.recipeImage}
          alt="Recipe"
          className="recipe-image"
        />
        <div className={`recipe-footer ${isReportPage ? 'report-page' : ''}`}>
          <img
            src={recipe.userImage}
            alt="User"
            className="user-image"
          />
          <span>{recipe.userName}</span>
          <IonButton fill="clear" className={`view-more-button ${isReportPage ? 'report-page' : ''}`}>Ver más →</IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default RecipeContainer;
