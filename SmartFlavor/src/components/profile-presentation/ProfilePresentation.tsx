import { IonAvatar, IonLabel } from "@ionic/react";
import "./ProfilePresentation.css"

interface ContainerProps {
    className?: string | undefined
    user_name: string,
    profile_photo: string
}

const ProfilePresentation: React.FC<ContainerProps> = (props) => {
    return (
        <div className={props.className}>
            <div className="profile-presentation">
                <IonAvatar class="profile-photo">
                    <img src={props.profile_photo}></img>
                </IonAvatar>

                <IonLabel className="user-name">{props.user_name}</IonLabel>
            </div>
        </div>
    );
}

export default ProfilePresentation;