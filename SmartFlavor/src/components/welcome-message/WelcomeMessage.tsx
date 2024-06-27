import { IonLabel } from "@ionic/react";
import "./WelcomeMessage.css"
import { useState } from "react";

interface ContainerProps {
    className?: string | undefined,
    admin_name: string,
    report_num: number,
    post_num: number,
    user_num: number
}

const WelcomeMessage: React.FC<ContainerProps> = (props) => {
    const [message, setMessage] = useState<string>("xd")

    const verifyNumer = () => {
        if(props.user_num == 1 && props.post_num == 1) {
            return (
                <IonLabel>
                    Bienvenido {props.admin_name} a la sección de administación de SmartFlavor. 
                    Le quedan {props.report_num} reportes por revisar los cuales {props.post_num} es publicación y {props.user_num} es de usuario.
                </IonLabel>
            )
        }
        else if(props.user_num == 1 && props.post_num > 1) {
            return (
                <IonLabel>
                    Bienvenido {props.admin_name} a la sección de administación de SmartFlavor. 
                    Le quedan {props.report_num} reportes por revisar los cuales {props.post_num} son publicaciones y {props.user_num} es de usuario.
                </IonLabel>
            )
        }
        else if(props.user_num > 1 && props.post_num == 1) {
            return (
                <IonLabel>
                    Bienvenido {props.admin_name} a la sección de administación de SmartFlavor. 
                    Le quedan {props.report_num} reportes por revisar los cuales {props.post_num} es publicación y {props.user_num} son de usuarios.
                </IonLabel>
            )
        }

        return (
            <IonLabel>
                Bienvenido {props.admin_name} a la sección de administación de SmartFlavor. 
                Le quedan {props.report_num} reportes por revisar los cuales {props.post_num} son publicaciones y {props.user_num} son usuarios.
            </IonLabel>
        )
    }

    return (
        <div className={props.className}>
            <div className="welcome-container">
                {verifyNumer()}

                <IonLabel>Te deseamos un excelente día 😁</IonLabel>
            </div>
        </div>
    );
};

export default WelcomeMessage;