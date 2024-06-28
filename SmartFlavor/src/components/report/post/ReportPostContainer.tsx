import { IonButton, IonIcon, IonImg, IonLabel } from "@ionic/react";
import "./ReportPostContainer.css"
import { arrowForwardSharp } from "ionicons/icons";

interface Post {
    url: string
}

interface ContainerProps {
    className?: string | undefined,
    post?: Post[] | undefined
}

const ReportPostContainer: React.FC<ContainerProps> = (props) => {
    return (
        <div className={props.className}>
            <div className="report-post-container">
                <IonLabel>Usuarios Reportados</IonLabel>

                <div className="ractangle-report"></div>
                <div className="report-preview">
                    {props.post && 
                    props.post.map((post, index) => (
                        <IonButton className='post-button-select' fill="clear" color="light">
                            <img className='thumbnail-post' src={post.url} key={index}></img>
                        </IonButton>
                    ))}

                    {props.post? 
                        <IonButton className='show-more-button' fill="clear" color="light">
                            <div className='show-more-button-container'>
                                <IonIcon icon={arrowForwardSharp}></IonIcon>
                                <IonLabel>Ver más</IonLabel>
                            </div>
                        </IonButton>
                    : 
                        <IonLabel>No hay publicaciones</IonLabel>
                    }
                </div>
            </div>
        </div>
    );
}

export default ReportPostContainer;