import { IonAvatar, IonButton, IonIcon, IonLabel } from "@ionic/react";
import { colorPalette, pencil } from "ionicons/icons";
import "./ProfileContainer.css"

interface ContainerProps {
    className?: string | undefined
    user_name: string,
    post_num: number,
    follow_num: number,
    following_num: number,
    profile_photo: string,
    description: string
};

const ProfileContainer: React.FC<ContainerProps> = (props) => {
    return (
        <div className={props.className}>
            <div className="profile-background">
                <div className="profile-container">
                    <div className="top-profile-container">
                        <div className="public-info">
                            <div className="profile-image">
                                <IonAvatar>
                                    <img src={props.profile_photo}></img>
                                </IonAvatar>

                                <IonLabel>{props.user_name}</IonLabel>
                            </div>

                            <div className="profile-left-container">
                                <div className="indicator-container">
                                    <div className="indicator">
                                        <IonLabel>{props.post_num}</IonLabel>
                                        <IonLabel>Publicaciones</IonLabel>
                                    </div>

                                    <div className="indicator">
                                        <IonLabel>{props.follow_num}</IonLabel>
                                        <IonLabel>Seguidores</IonLabel>
                                    </div>

                                    <div className="indicator">
                                        <IonLabel>{props.following_num}</IonLabel>
                                        <IonLabel>Seguidos</IonLabel>
                                    </div>
                                </div>
                                
                                <div className="button-cotainer">
                                    <IonButton className="profile-option" size="small" fill="clear">
                                        <IonIcon icon={colorPalette}></IonIcon>
                                        <IonIcon icon={pencil}></IonIcon>
                                    </IonButton>
                                </div>
                            </div>
                        </div>
                    </div>

                    <IonLabel>{props.description}</IonLabel>
                </div>
            </div>
        </div>
    );
};

export default ProfileContainer;