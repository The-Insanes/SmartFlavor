import { IonButton, IonIcon, IonInput, IonLabel } from "@ionic/react";
import { search } from "ionicons/icons";
import "./SearchBar.css"
import { useState } from "react";


interface ContainerProps {
    className?: string | undefined,
    text?: string | undefined
}

const SearchBar: React.FC<ContainerProps> = (props) => {

    return (
        <div className={props.className}>
            <IonInput className="search-bar" placeholder={props.text}> 
                <IonButton className="search-bar-button" size="small" fill="clear" slot="start">
                    <IonIcon className="search-icon" icon={search}></IonIcon>
                </IonButton>
            </IonInput>
        </div>
    );
};

export default SearchBar;