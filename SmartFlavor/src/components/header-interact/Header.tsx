import { IonIcon, IonButton, IonImg } from '@ionic/react'
import { search } from 'ionicons/icons'
import "./Header.css"

interface ContainerProps {
    className?: string | undefined
};

const Header: React.FC<ContainerProps> = (props) => {
    return (
        <div className={props.className}>
            <div className='header-container'>
                <IonButton fill='clear'>
                    <IonImg className="logo-smartflavor" src='./images/smartflavor/logo.svg'></IonImg>
                </IonButton>
                <IonButton fill='clear'>
                    <IonIcon className='search-button' icon={search}></IonIcon>
                </IonButton>
            </div>
        </div>
    );
}

export default Header;