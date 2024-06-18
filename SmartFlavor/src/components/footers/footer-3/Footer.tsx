import { IonButton, IonIcon, IonImg, IonLabel } from "@ionic/react";
import { logoX } from "ionicons/icons";
import "./Footer.css"

interface ContainerProps {
    className?: string | undefined
}

const Footer: React.FC<ContainerProps> = (props) => {
    return (
        <div className={props.className}>
            <div className="footer-container">
                <IonLabel className="footer-title">SmartFlavor Administrator</IonLabel>
                <IonLabel>
                    En este sitio se podrán gestionar los 
                    resportes de los usuarios como también las cuentas y las publicaciones
                </IonLabel>
                <IonLabel>¡Siguenos en la siguientes plataformas!</IonLabel>

                <div className="smartflavor-link">
                    <IonButton className="social-network" fill="clear">
                        <IonImg src="images/smartflavor/whatsapp.svg"></IonImg>
                    </IonButton>

                    <IonButton className="social-network" fill="clear">
                        <IonImg src="images/smartflavor/facebook.svg"></IonImg>
                    </IonButton>

                    <IonButton className="social-network" fill="clear">
                        <IonImg src="images/smartflavor/instagram.svg"></IonImg>
                    </IonButton>

                    <IonButton className="social-network" fill="clear">
                        <IonImg src="images/smartflavor/X-icon.svg"></IonImg>
                    </IonButton>
                </div>
            </div>
        </div>
    );
}

export default Footer;