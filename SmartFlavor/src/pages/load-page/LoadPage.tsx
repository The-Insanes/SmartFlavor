import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./LoadPage.css"
import Header from "../../components/header-interact/Header";

const LoadPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <Header/>
            </IonHeader>

            <IonContent fullscreen>
                <div className="center-page">
                    <img src="images/smartflavor/logo_large.svg"></img>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default LoadPage;