import { IonIcon, IonButton, IonImg } from '@ionic/react'
import { search } from 'ionicons/icons'
import "./Header.css"
import { useState } from 'react'
import { Redirect } from 'react-router'

interface ContainerProps {
    className?: string | undefined
};

const Header: React.FC<ContainerProps> = (props) => {
    const [searchBar, setSearchBar] = useState<boolean>(false);
    const [home, setHome] = useState<boolean>(false)

    return (
        <div className={props.className}>
            {home && <Redirect to="/user-home"></Redirect>}
            {searchBar && <Redirect to="/search_video"></Redirect>}
            <div className='header-container'>
                <IonButton fill='clear' onClick={(e) => {setHome(!home)}}>
                    <IonImg className="logo-smartflavor" src='./images/smartflavor/logo.svg'></IonImg>
                </IonButton>
                <IonButton fill='clear' onClick={(e) => {setSearchBar(!searchBar)}}>
                    <IonIcon className='search-button' icon={search}></IonIcon>
                </IonButton>
            </div>
        </div>
    );
}

export default Header;