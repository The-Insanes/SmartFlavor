import { IonButton, IonLabel } from "@ionic/react";
import "./ReportContainer.css"
import { useEffect, useRef } from "react";

interface ContainerProps {
    className?: string | undefined,
    close: () => void,
    view: boolean
}

const ReportContainer: React.FC<ContainerProps> = (props) => {
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
            <div ref={containerRef} className="report-container">
                <div className="top-report">
                    <div className="rectangle-up-down"></div>
                    <h5>Reportar</h5>

                    <IonLabel class="report-description">
                        Tú reporte es anónimo, a menos que reportes una infracción de propiedad intelectual. 
                        Si alguien se encuentra en peligro inminente, llama a los servicios de emergencias locales. 
                        No esperes.
                    </IonLabel>
                </div>
                
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