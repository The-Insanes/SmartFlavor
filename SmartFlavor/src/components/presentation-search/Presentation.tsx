import { IonCard, IonIcon, IonLabel } from "@ionic/react";
import { arrowDown } from "ionicons/icons";
import "./Presentation.css"

interface ContainerProps {
    className?: string | undefined
};

const Presentation: React.FC<ContainerProps> = (props) => {
    return (
        <div className={props.className}>
            <div className="recommendation-banner">
                <IonLabel>¡De la imagen le recomendamos las siguientes recetas!</IonLabel>

                <div className="arrow-down">&#x2193;</div>
            </div>
        </div>
    );
}

export default Presentation;