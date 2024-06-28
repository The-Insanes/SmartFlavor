import React, { useState } from 'react';
import { IonPage, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonModal, IonButton } from '@ionic/react';
import Header from '../../../components/header-interact/Header'
import RecipeContainer from '../../../components/recipe-container/recipe-container';
import Footer from '../../../components/footers/footer-3/Footer';
import SearchBar from '../../../components/search-bar/SearchBar';

const allRecipes = [
  {
    id: 1,
    title: 'Receta 1',
    userImage: 'https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg',
    recipeImage: 'https://www.elmueble.com/medio/2024/02/23/pollo-curry-manzana_012ed92b_00535188_240223081823_900x900.jpg',
    userName: 'Usuario 1',
    likes: 23,
    description: 'Delicious curry with apple'
  },
  {
    id: 2,
    title: 'Receta 2',
    userImage: 'https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg',
    recipeImage: 'https://www.elmueble.com/medio/2024/02/23/pollo-curry-manzana_012ed92b_00535188_240223081823_900x900.jpg',
    userName: 'Usuario 2',
    likes: 45,
    description: 'Tasty chicken with curry'
  },
  // Añade más recetas según sea necesario
  {
    id: 3,
    title: 'Receta 3',
    userImage: 'https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg',
    recipeImage: 'https://www.elmueble.com/medio/2024/02/23/pollo-curry-manzana_012ed92b_00535188_240223081823_900x900.jpg',
    userName: 'Usuario 3',
    likes: 12,
    description: 'Spicy curry with vegetables'
  },
  {
    id: 4,
    title: 'Receta 4',
    userImage: 'https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg',
    recipeImage: 'https://www.elmueble.com/medio/2024/02/23/pollo-curry-manzana_012ed92b_00535188_240223081823_900x900.jpg',
    userName: 'Usuario 4',
    likes: 30,
    description: 'Sweet and sour chicken curry'
  },
  // Continúa añadiendo más recetas si es necesario
];

const ITEMS_PER_PAGE = 2; // Define cuántas recetas cargar por página

const ReportPost: React.FC = () => {
  const [recipes, setRecipes] = useState(allRecipes.slice(0, ITEMS_PER_PAGE));
  const [page, setPage] = useState(1);
  const [selectedRecipe, setSelectedRecipe] = useState(allRecipes[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (recipe: typeof allRecipes[0]) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <IonPage>
      <Header />
      <IonContent style={{ '--ion-background-color': '#FFEFBD' }}>
       <SearchBar />
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <RecipeContainer recipe={recipe} isReportPage={true} />
            <IonButton 
              onClick={() => openModal(recipe)}
              style={{ '--background': '#5c4948', '--color': '#FF6930',margin: 'auto 100spx', display: 'flex' }}
            >
              Edit
            </IonButton>
          </div>
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
