import { IonContent, IonFooter, IonPage } from "@ionic/react";
import "./Login.css"

const Login: React.FC = () => {
    return(
    <IonPage>
    <IonContent className='fondo-singup'>
      <div className='centered-content-singup'>
      </div>
    </IonContent>

    <IonFooter translucent={true}>
    </IonFooter>
    </IonPage>
    );
};


export default Login;