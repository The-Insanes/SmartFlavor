import React from 'react';
import { IonContent, IonModal } from '@ionic/react';
import './report-container.css';

interface ReportContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportUserContainer: React.FC<ReportContainerProps> = ({ isOpen, onClose }) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonContent className="report-modal">
        <div className="report-container">
          <div className="drag-indicator">
            <div className="indicator-bar"></div>
          </div>
          <div className="report-title">Reportar</div>
          <div className="report-content">
            <div className="report-question">Por qué quieres reportar esta publicación?</div>
            <div className="report-info">Tú reporte es anónimo, a menos que reportes una infracción de propiedad intelectual. Si alguien se encuentra en peligro inminente, llama a los servicios de emergencias locales. No esperes.</div>
            <div className="report-options">
              <div className="report-option">Es Spam</div>
              <div className="report-option">Desnudos o actividad sexual</div>
              <div className="report-option">Lenguaje o símbolos que incitan al odio</div>
              <div className="report-option">Violencia u organizaciones peligrosas</div>
              <div className="report-option">Información falsa</div>
              <div className="report-option">Bullying o acoso</div>
              <div className="report-option">Estafa o fraude</div>
              <div className="report-option">Drogas</div>
              <div className="report-option">Infracción de la propiedad intelectual</div>
              <div className="report-option">Trastornos alimenticios</div>
              <div className="report-option">Contenido no relacionado al área de la cocina</div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default ReportUserContainer;

/*
De ser deseado llamar en login se tiene que tener esta Estructura 
 <ReportUserContainer isOpen={isReportOpen} onClose={handleCloseReport}></ReportUserContainer>   
*/