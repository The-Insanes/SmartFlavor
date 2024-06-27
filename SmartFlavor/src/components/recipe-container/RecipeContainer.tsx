import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonButton, IonLabel, IonAvatar } from '@ionic/react';
import { arrowForwardSharp, heartOutline } from 'ionicons/icons';
import './RecipeContainer.css';

interface Recipe {
    name: string,
    thumbnail: string,
    profile_photo: string,
    user_name: string,
}

interface ContainerProps {
    className?: string | undefined,
    recipe: Recipe
}

const RecipeContainer: React.FC<ContainerProps> = (props) => {
  return (
    <div className={props.className}>
        <div className='recipe-container'>
            <div className='top-recipe-container'>
                <IonLabel>{props.recipe.name}</IonLabel>
                <IonButton className='recipe-container-button' fill='clear' color='dark' size='small'>
                    <IonIcon icon={heartOutline}></IonIcon>
                </IonButton>
            </div>

            <div className='center-recipe-container'>
                <img className='thumbnail-recipe' src={props.recipe.thumbnail}></img>
            </div>

            <div className='bottom-recipe-container'>
                <div className='user-data'>
                    <IonAvatar>
                        <img src={props.recipe.profile_photo}></img>
                    </IonAvatar>

                    <IonLabel>{props.recipe.user_name}</IonLabel>
                </div>

                <IonButton className='recipe-container-button' fill='clear' color='dark' size='small'>
                    <div className='show-more-button'>
                        <IonLabel>Ver más</IonLabel>
                        <IonIcon icon={arrowForwardSharp}></IonIcon>
                    </div>
                </IonButton>
            </div>
        </div>
    </div>
  );
};

export default RecipeContainer;