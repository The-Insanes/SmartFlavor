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

const Login: React.FC = () => {
    return (
        <IonPage>
              <IonContent>
                  <Header/>
                  <IonImg src="videos/Download.mp4"></IonImg>
              </IonContent>
        </IonPage>
    );
}

export default Login;