import { IonButton, IonLabel } from "@ionic/react";
import "./ReportContainer.css"

interface ContainerProps {
    className?: string | undefined
}

const ReportContainer: React.FC<ContainerProps> = (props) => {
    return (
        <div className={props.className}>
            <div className="report-container">
                <div className="rectangle-up-down"></div>
                <h5>Reportar</h5>

                <IonLabel class="report-description">
                    Tú reporte es anónimo, a menos que reportes una infracción de propiedad intelectual. 
                    Si alguien se encuentra en peligro inminente, llama a los servicios de emergencias locales. 
                    No esperes.
                </IonLabel>
                
                <div className="report-options-container">
                    <IonButton className="report-option" slot="start" size="small" fill="clear">
                        <IonLabel className="report-label">Es Spam</IonLabel>
                    </IonButton>

                    <IonButton className="report-option" slot="start" size="small" fill="clear">
                        <IonLabel className="report-label">Desnudos o actividad sexual</IonLabel>
                    </IonButton>

                    <IonButton className="report-option" slot="start" size="small" fill="clear">
                        <IonLabel className="report-label">Lenguaje o símbolos que incitan al odio</IonLabel>
                    </IonButton>

                    <IonButton className="report-option" slot="start" size="small" fill="clear">
                        <IonLabel className="report-label">Violencia u organizaciones peligrosas</IonLabel>
                    </IonButton>

                    <IonButton className="report-option" slot="start" size="small" fill="clear">
                        <IonLabel className="report-label">Información falsa</IonLabel>
                    </IonButton>

                    <IonButton className="report-option" slot="start" size="small" fill="clear">
                        <IonLabel className="report-label">Bullying o acoso</IonLabel>
                    </IonButton>

                    <IonButton className="report-option" slot="start" size="small" fill="clear">
                        <IonLabel className="report-label">Estafa o fraude</IonLabel>
                    </IonButton>

                    <IonButton className="report-option" slot="start" size="small" fill="clear">
                        <IonLabel className="report-label">Drogas</IonLabel>
                    </IonButton>

                    <IonButton className="report-option" slot="start" size="small" fill="clear">
                        <IonLabel className="report-label">Infracción de la propiedad intelectual</IonLabel>
                    </IonButton>

                    <IonButton className="report-option" slot="start" size="small" fill="clear">
                        <IonLabel className="report-label">Trastornos alimenticios</IonLabel>
                    </IonButton>

                    <IonButton className="report-option" slot="start" size="small" fill="clear">
                        <IonLabel className="report-label">Contenido no relacionado al área de la cocina</IonLabel>
                    </IonButton>

                </div>
            </div>
        </div>
    );
};

export default ReportContainer;