import { IonAvatar, IonButton, IonIcon, IonImg, IonLabel } from "@ionic/react";
import { heart, heartOutline } from "ionicons/icons";
import "./CommentContainer.css"

interface ContainerProps {
    className?: string | undefined,
    user_name: string,
    num_likes: number,
    description: string,
    profile_photo: string,
    time: string
}

const CommentContainer: React.FC<ContainerProps> = (props) => {
    return (
        <div className={props.className}>
            <div className="comment-container">
                <div className="user-info">
                    <IonAvatar className="profile-photo-comment">
                        <img src="images/profile_photos/chef rush.jpeg"></img>
                    </IonAvatar>
                    <IonLabel>{props.user_name}</IonLabel>
                </div>

                <IonLabel>{props.description}</IonLabel>
                
                <div className="info-comment">
                    <IonLabel>{props.time}</IonLabel>
                    
                    <div className="like-cont">
                        <IonButton className="heart-button" fill="clear" size="small">
                            <IonIcon className="hear-icon" icon={heart}></IonIcon>
                        </IonButton>

                        <IonLabel>{props.num_likes}</IonLabel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentContainer;