import { IonButton, IonIcon, IonImg, IonLabel } from "@ionic/react";
import { callSharp, mail } from "ionicons/icons"
import "./Footer.css";

interface ContainerProps {
    className?: string | undefined
}

const Footer: React.FC<ContainerProps> = (props) => {
    return (
        <div className={props.className}>
            <div className="footer-container">
                <IonImg className="footer-logo" src="images/smartflavor/logo_large.svg"></IonImg>
                
                <div className="footer-info">
                    <div className="contact-info">
                        <IonLabel className="footer-title">Contacto</IonLabel>
                        
                        <div className="contact-options">
                            <IonLabel className="footer-option">
                                <IonIcon color="light" icon={callSharp}></IonIcon>
                                +56299999999
                            </IonLabel>
                            
                            <IonLabel className="footer-option">
                                <IonIcon color="light" icon={mail}></IonIcon>
                                support@smartflavor.com
                            </IonLabel>
                        </div>
                    </div>
                    
                    <div className="legal-headquarters-info">
                        <IonLabel className="footer-title">Sedes</IonLabel>
                        <IonLabel className="footer-title">Legal</IonLabel>
                        
                        <div className="legal-options">
                            <IonLabel className="footer-option">Terminos y condiciones</IonLabel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;