import { IonIcon, IonInput, IonLabel } from "@ionic/react";
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
                <IonIcon className="search-icon" icon={search} slot="start"></IonIcon>
            </IonInput>
        </div>
    );
};

export default SearchBar;