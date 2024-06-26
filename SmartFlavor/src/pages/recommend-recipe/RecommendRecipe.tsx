import { IonContent, IonFooter, IonHeader, IonPage } from "@ionic/react";
import "./RecommendRecipe.css"
import Header from "../../components/header-interact/Header";
import Footer from "../../components/footers/footer-1/Footer";
import SearchBar from "../../components/search-bar/SearchBar";
import Presentation from "../../components/presentation-search/Presentation";
import RecipeContainer from "../../components/recipe-container/RecipeContainer";

const RecommendRecipe: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <Header/>
            </IonHeader>

            <IonContent>
                <div>
                    <SearchBar text="¿Que desea buscar?"/>
                </div>

                <Presentation/>

                <div>
                    <RecipeContainer recipe={{name: "Puré de papa", thumbnail: "images/thumbnails/post_1.jpeg", user_name: "pepe el pollo", profile_photo: "images/profile_photos/chef rush.jpeg"}}/>
                </div>

            </IonContent>

            <IonFooter>
                <Footer/>
            </IonFooter>
        </IonPage>
    );
}

export default RecommendRecipe;