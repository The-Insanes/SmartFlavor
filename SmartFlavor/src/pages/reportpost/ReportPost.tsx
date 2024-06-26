import React, { useState } from 'react';
import { IonPage, IonContent, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import Header from '../../components/header-interact/Header';
import RecipeContainer from '../../components/recipe-container/recipe-container';
import Footer from '../../components/footers/footer-3/Footer';
import SearchBar from '../../components/search-bar/SearchBar';

const allRecipes = [
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
  // Simula más recetas para probar el desplazamiento infinito
  {
    id: 3,
    title: 'Receta 3',
    userImage: 'https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg',
    recipeImage: 'https://www.elmueble.com/medio/2024/02/23/pollo-curry-manzana_012ed92b_00535188_240223081823_900x900.jpg',
    userName: 'Usuario 3'
  },
  {
    id: 4,
    title: 'Receta 4',
    userImage: 'https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg',
    recipeImage: 'https://www.elmueble.com/medio/2024/02/23/pollo-curry-manzana_012ed92b_00535188_240223081823_900x900.jpg',
    userName: 'Usuario 4'
  },
  // Continúa añadiendo más recetas si es necesario
];

const ITEMS_PER_PAGE = 2; // Define cuántas recetas cargar por página

const ReportPost: React.FC = () => {
  const [recipes, setRecipes] = useState(allRecipes.slice(0, ITEMS_PER_PAGE));
  const [page, setPage] = useState(1);

  const loadMoreRecipes = (event: CustomEvent<void>) => {
    setTimeout(() => {
      const nextPage = page + 1;
      const newRecipes = allRecipes.slice(0, nextPage * ITEMS_PER_PAGE);
      setRecipes(newRecipes);
      setPage(nextPage);

      if (newRecipes.length >= allRecipes.length) {
        (event.target as HTMLIonInfiniteScrollElement).disabled = true;
      }

      (event.target as HTMLIonInfiniteScrollElement).complete();
    }, 1000); // Simula un retraso de carga
  };

  return (
    <IonPage>
      <Header />
      <IonContent style={{ '--ion-background-color': '#FFEFBD' }}>
       <SearchBar />
        {recipes.map(recipe => (
          <RecipeContainer key={recipe.id} recipe={recipe} isReportPage={true} />
        ))}
        <IonInfiniteScroll onIonInfinite={loadMoreRecipes}>
          <IonInfiniteScrollContent loadingText="Cargando más recetas..."></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
      <Footer className="footer" />
    </IonPage>
  );
};

export default ReportPost;
