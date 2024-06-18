import { IonButton, IonImg } from "@ionic/react";
import "./Footer.css"

interface ContainerProps {
    className?: string | undefined
}

const Footer: React.FC<ContainerProps> = (props) => {
    return (
        <div className={props.className}>
            <div className="footer-container">
                <IonButton fill="clear" size="small">
                    <IonImg className="footer-icon" src="images/smartflavor/home_icon.svg"></IonImg>
                </IonButton>

                <IonButton fill="clear" size="small">
                    <IonImg className="footer-icon" src="images/smartflavor/heart_icon.svg"></IonImg>
                </IonButton>

                <IonButton fill="clear" size="small">
                    <IonImg className="footer-icon" src="images/smartflavor/eye_icon.svg"></IonImg>
                </IonButton>

                <IonButton fill="clear" size="small">
                    <IonImg className="footer-icon" src="images/smartflavor/message.svg"></IonImg>
                </IonButton>

                <IonButton fill="clear" size="small">
                    <IonImg className="footer-icon" src="images/smartflavor/default_profile_icon.svg"></IonImg>
                </IonButton>
            </div>
        </div>
    );
}

export default Footer;