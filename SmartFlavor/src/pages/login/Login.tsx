import { IonContent, IonFooter, IonPage } from "@ionic/react";
import "./Login.css"
import "../../components/header-interact/Header"
import Header from "../../components/header-interact/Header";
import Footer from "../../components/footers/footer-3/Footer";
import SearchBar from "../../components/search-bar/SearchBar";
import CommentContainer from "../../components/comment/comment-container/CommentContainer";
import ProfileContainer from "../../components/profile-container/ProfileContainer";

const Login: React.FC = () => {
    return (
        <IonPage>
              <IonContent>
                  <Header/>
                  <ProfileContainer user_name={"Chef Ruperto"} post_num={23} follow_num={600} following_num={450} profile_photo={"images/profile_photos/chef 1.jpg"} description={"Como estás?"}></ProfileContainer>
              </IonContent>
        </IonPage>
    );
}

export default Login;