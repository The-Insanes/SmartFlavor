import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonIcon, IonLabel } from '@ionic/react';
import { arrowForwardSharp, chevronForwardOutline } from 'ionicons/icons';
import ProfilePresentation from '../../profile-presentation/ProfilePresentation';
import './ReportUserContainer.css';

interface User {
    profile_photo: string,
    user_name: string
}

interface ContainerProps {
    className?: string | undefined,
    users?: User[] | undefined
}

const ReportUserContainer: React.FC<ContainerProps> = (props) => {
    return (
        <div className={props.className}>
            <div className='report-user-container'>
                <IonLabel>Publicaciones reportadas</IonLabel>

                <div className='ractangle-report'></div>
                <div className='report-preview'>
                    {props.users && 
                    props.users.map((user, index) => (
                        <IonButton className='user-button-select' fill='clear' color='light'>
                            <ProfilePresentation className='profile-user-reported' user_name={user.user_name} profile_photo={user.profile_photo} key={index}/>
                        </IonButton>
                    ))}

                    {props.users? 
                    <IonButton className='show-more-button' fill='clear' color="light">
                        <div className='show-more-button-container'>
                            <IonIcon icon={arrowForwardSharp}></IonIcon>
                            <IonLabel>Ver más</IonLabel>
                        </div>
                    </IonButton> 
                    : 
                    <IonLabel>No hay reportes</IonLabel>}
                </div>
            </div>
        </div>
    );
};

export default ReportUserContainer;