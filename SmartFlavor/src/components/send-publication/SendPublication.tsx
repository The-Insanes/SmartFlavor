import "./SendPublication.css";
import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import { useEffect, useRef } from "react";
import { logoFacebook, logoInstagram, logoX, logoWhatsapp, shareSocialOutline, linkOutline } from "ionicons/icons";

interface User {
    user_name: string;
    profile_photo: string;
}

interface ContainerProps {
    className?: string | undefined,
    owner_user: User,
    users?: User[] | undefined,
    close: () => void,
    view: boolean
}

const SendPublication: React.FC<ContainerProps> = (props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node) && props.view) {
                props.close();
            }
        };

        const handleBackButton = (e: any) => {
            if (props.view) {
                e.preventDefault();
                e.stopPropagation();
                props.close();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener('backbutton', handleBackButton);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener('backbutton', handleBackButton);
        };
    }, [props.close, props.view]);

    return (
        <div className={props.className}>
            <div ref={containerRef} className="send-publication-container">
                <div className="rectangle-up-down"></div>

                <div className="send-post-options">
                    <IonButton className="share-option" fill="clear" size="small">
                        <div className="css-div-send-post">
                            <IonIcon className="icon-share-link" icon={linkOutline}></IonIcon>
                            <IonLabel className="name-option">Copiar Link</IonLabel>
                        </div>
                    </IonButton>
                    <IonButton className="share-option" fill="clear" size="small">
                        <div className="css-div-send-post">
                            <IonIcon className="icon-share-facebook" icon={logoFacebook}></IonIcon>
                            <IonLabel className="name-option">Facebook</IonLabel>
                        </div>
                    </IonButton>
                    <IonButton className="share-option" fill="clear" size="small">
                        <div className="css-div-send-post">
                            <IonIcon className="icon-share-instagram" icon={logoInstagram}></IonIcon>
                            <IonLabel className="name-option">Instagram</IonLabel>
                        </div>
                    </IonButton>
                    <IonButton className="share-option" fill="clear" size="small">
                        <div className="css-div-send-post">
                            <IonIcon className="icon-share-whatsapp" icon={logoWhatsapp}></IonIcon>
                            <IonLabel className="name-option">WhatsApp</IonLabel>
                        </div>
                    </IonButton>
                    <IonButton className="share-option" fill="clear" size="small">
                        <div className="css-div-send-post">
                            <IonIcon className="icon-share-X" icon={logoX}></IonIcon>
                            <IonLabel className="name-option">X</IonLabel>
                        </div>
                    </IonButton>
                    <IonButton className="share-option" fill="clear" size="small">
                        <div className="css-div-send-post">
                            <IonIcon className="icon-share-phone" icon={shareSocialOutline}></IonIcon>
                            <IonLabel className="name-option">Compartir</IonLabel>
                        </div>
                    </IonButton>
                </div>

                <div className="container-bottom">
                    <IonLabel>
                        Muchas gracias por compartir la publicación de {props.owner_user.user_name} 😁,
                        esperamos que sigas encontrando otras publicaciones que te lleven a disfrutar de nuestra app 😁.
                    </IonLabel>
                </div>
            </div>
        </div>
    );
};

export default SendPublication;
