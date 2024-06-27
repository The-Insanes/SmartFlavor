import { IonContent, IonFooter, IonHeader, IonPage } from "@ionic/react";
import "./RecommendRecipe.css"
import Header from "../../components/header-interact/Header";
import Footer from "../../components/footers/footer-1/Footer";
import SearchBar from "../../components/search-bar/SearchBar";
import Presentation from "../../components/presentation-search/Presentation";
import RecipeContainer from "../../components/recipe-container/RecipeContainer";
import { useEffect, useState } from "react";

interface Recipe { 
    name: string,
    thumbnail: string,
    user_name: string,
    profile_photo: string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
}

const generate_recipes = () => {
    const recipes = []

    for(let i = 0; i < 50; i++) {
        recipes.push({
            name: "Puré de papa",
            thumbnail: "images/thumbnails/post_1.jpeg",
            user_name: "chef rush",
            profile_photo: "images/profile_photos/chef rush.jpeg"
        })
    }

    return recipes;
}

const RecommendRecipe: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>();

    useEffect(() => {
        setRecipes(generate_recipes())
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <Header/>
            </IonHeader>

            <IonContent fullscreen>
                <div className="center-page">
                    <div className="search-bar-page">
                        <SearchBar className="search-bar-component" text="¿Que desea buscar?"/>
                    </div>

                    <Presentation className="welcome-message"/>

                    <div className="recipes-section">
                    {recipes && recipes.map((recipe, index) => (
                        <RecipeContainer className="recommend-recipe-container" recipe={{name: recipe.name, thumbnail: recipe.thumbnail, user_name: recipe.user_name, profile_photo: recipe.profile_photo}} key={index}/>
                    ))}
                    </div>
                </div>
            </IonContent>

            <IonFooter>
                <Footer/>
            </IonFooter>
        </IonPage>
    );
}

export default RecommendRecipe;