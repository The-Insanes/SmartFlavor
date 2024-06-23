import { IonContent, IonFooter, IonImg, IonPage } from "@ionic/react";
import "./Login.css"
import "../../components/header-interact/Header"
import Header from "../../components/header-interact/Header";
import Footer from "../../components/footers/footer-3/Footer";
import SearchBar from "../../components/search-bar/SearchBar";
import CommentContainer from "../../components/comment/comment-container/CommentContainer";
import ProfileContainer from "../../components/profile-container/ProfileContainer";
import WelcomeMessage from "../../components/welcome-message/WelcomeMessage";
import ChatContainer from "../../components/chat-container/ChatContainer";
import Presentation from "../../components/presentation-search/Presentation";
import LoginContainer from "../../components/login-container/login-container";
import EditProfileContainer from "../../components/edit-profile-container/edit-profile-container";
import RegisterContainer from "../../components/register-container/register-container";
import EditPostContainer from "../../components/edit_post-container/edit_post-container";
import RecipeContainer from "../../components/recipe-container/recipe-container";
import PublicationReportedContainer from "../../components/publication-reported-container/publication-reported-container";
import ProfilePresentation from "../../components/profile-presentation/profile-presentation";
import UserReportedContainer from "../../components/user-reported-container/user-reported-container";
import RecipesContainer from "../../components/container-recipes/container-recipes";
import ReportUserContainer from "../../components/report-container/report-container";
import React, { useState } from 'react';

const Test: React.FC = () => {
    //// Esta sección es solo para el uso de la pestaña de ReportUserContainer / Poner True para que salga, o false para que no salga.
    const [isReportOpen, setIsReportOpen] = useState(true);
    const handleCloseReport = () => {
        setIsReportOpen(true);
    };
    ///  para llamar se tiene que usar así <ReportUserContainer isOpen={isReportOpen} onClose={handleCloseReport}></ReportUserContainer>   
    ///////

    return (
        <IonPage>
              <IonContent>
                  <Header/>
                  <ReportUserContainer isOpen={isReportOpen} onClose={handleCloseReport}></ReportUserContainer>      
              </IonContent>
        </IonPage>
    );
}

export default Test;