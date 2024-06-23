import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Header from '../../components/header-interact/Header';
import SearchBar from '../../components/search-bar/SearchBar';
import RecipeContainer from "../../components/recipe-container/recipe-container";
import Footer from '../../components/footers/footer-1/Footer';

const Search: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent style={{ '--ion-background-color': '#FFEFBD' }}>
        <SearchBar />
        <RecipeContainer />
        <RecipeContainer />
        <RecipeContainer />
        <RecipeContainer />
        <RecipeContainer />
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Search;
