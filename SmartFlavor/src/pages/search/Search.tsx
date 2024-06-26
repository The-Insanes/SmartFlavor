import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Header from '../../components/header-interact/Header';
import SearchBar from '../../components/search-bar/SearchBar';
import RecipeContainer from "../../components/recipe-container/recipe-container";
import Footer from '../../components/footers/footer-1/Footer';

// Datos simulados de recetas
const recipes = [
  {
    id: 1,
    title: 'Receta 1',
    userImage: 'https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg',
    recipeImage: 'https://www.elmueble.com/medio/2024/02/23/pollo-curry-manzana_012ed92b_00535188_240223081823_900x900.jpg',
    userName: 'Usuario 1'
  },
  {
    id: 2,
    title: 'Receta 2',
    userImage: 'https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg',
    recipeImage: 'https://www.elmueble.com/medio/2024/02/23/pollo-curry-manzana_012ed92b_00535188_240223081823_900x900.jpg',
    userName: 'Usuario 2'
  },
  // Añade más recetas según sea necesario
];

const Search: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent style={{ '--ion-background-color': '#FFEFBD' }}>
        <SearchBar />
        {recipes.map((recipe) => (
          <RecipeContainer key={recipe.id} recipe={recipe} />
        ))}
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Search;
