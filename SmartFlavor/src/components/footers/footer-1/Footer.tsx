import { IonButton, IonImg } from "@ionic/react";
import { Redirect, useHistory } from "react-router-dom";
import "./Footer.css";
import { useState } from "react";

interface ContainerProps {
    className?: string | undefined;
}

const Footer: React.FC<ContainerProps> = (props) => {
    const [userHome, setUserHome] = useState<boolean>(false);
    const [camera, setCamera] = useState<boolean>(false);
    const [profile, setProfile] = useState<boolean>(false);

    return (
        <div className={props.className}>
            {userHome && <Redirect to="/user-home"/>}
            {camera && <Redirect to="/camera"/>}
            {profile && <Redirect to="/user_profile"/>}
            
            <div className="footer-container">
                <IonButton fill="clear" size="small" onClick={(e) => {setUserHome(!userHome)}}>
                    <IonImg className="footer-icon" src="images/smartflavor/home_icon.svg"></IonImg>
                </IonButton>

                <IonButton fill="clear" size="small">
                    <IonImg className="footer-icon" src="images/smartflavor/heart_icon.svg"></IonImg>
                </IonButton>

                <IonButton fill="clear" size="small" onClick={(e) => {setCamera(!camera)}}>
                    <IonImg className="footer-icon" src="images/smartflavor/eye_icon.svg"></IonImg> 
                </IonButton>

                <IonButton fill="clear" size="small" onClick={(e) => {setProfile(!profile)}}>
                    <IonImg className="footer-icon" src="images/smartflavor/default_profile_icon.svg"></IonImg>
                </IonButton>
            </div>
        </div>
    );
};

export default Footer;
