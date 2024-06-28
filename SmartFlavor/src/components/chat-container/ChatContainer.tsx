import { IonAvatar, IonButton, IonImg, IonLabel } from "@ionic/react";
import "./ChatContainer.css"

interface ContainerProps {
    className?: string | undefined,
    user_name: string,
    description: string,
    time: string
};

const ChatContainer: React.FC<ContainerProps> = (props) => {
    return (
        <div className={props.className}>
            <IonButton className="chat-button" size="small" fill="clear">
                <div className="chat-container">
                    <IonAvatar>
                        <IonImg src="images/profile_photos/chef Paula.jpeg"></IonImg>
                    </IonAvatar>

                    <div className="chat-info">
                        <div className="top-chat-info">
                            <IonLabel>{props.user_name}</IonLabel>
                        </div>

                        <div className="below-chat-info">
                            <IonLabel>{props.description}</IonLabel>
                        </div>
                    </div>
                </div>
            </IonButton>
        </div>
    );
};

export default ChatContainer;