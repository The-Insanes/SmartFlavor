import { IonContent, IonFooter, IonHeader, IonPage } from "@ionic/react";
import "./AdminMain.css"
import ReportUserContainer from "../../../components/report/user/ReportUserContainer";
import ReportPostContainer from "../../../components/report/post/ReportPostContainer";
import Header from "../../../components/header-interact/Header";
import Footer from "../../../components/footers/footer-3/Footer";
import SearchBar from "../../../components/search-bar/SearchBar";
import Presentation from "../../../components/presentation-search/Presentation";
import WelcomeMessage from "../../../components/welcome-message/WelcomeMessage";

interface Admin {
    admin_name: string,
    post_num: number,
    user_num: string,
}

const AdminMain: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <Header/>
            </IonHeader>

            <IonContent fullscreen>
                <div className="center-page">
                    <div className="content-page">
                        <div className="div123nd">
                            <SearchBar className="search-admin-bar" text="¿Que desea buscar hoy?"/>
                        </div>
                        <WelcomeMessage className="welcome-admin" admin_name={"Francisco Comunista"} report_num={80} post_num={60} user_num={20}></WelcomeMessage>

                        <ReportPostContainer post={[{url: 'images/thumbnails/post_1.jpeg'}, {url: 'images/thumbnails/post_1.jpeg'}, {url: 'images/thumbnails/post_1.jpeg'}]}/>
                        <ReportUserContainer users={[{profile_photo: 'images/profile_photos/chef rush.jpeg', user_name: 'pepe el pollo'}, {profile_photo: 'images/profile_photos/chef rush.jpeg', user_name: 'pepe el pollo'}]}/>
                    </div>

                    <Footer/>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default AdminMain;