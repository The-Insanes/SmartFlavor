import "./SendPublication.css";
import { IonButton, IonContent, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonLabel, IonList } from "@ionic/react";
import SearchBar from "../search-bar/SearchBar";
import { App as CapacitorApp } from "@capacitor/app";
import { useEffect, useRef, useState } from "react";
import { logoFacebook, logoInstagram, logoX, logoWhatsapp, shareSocialOutline, linkOutline } from "ionicons/icons";
import ProfilePresentation from "../profile-presentation/ProfilePresentation";

interface User {
    user_name: string;
    profile_photo: string;
}

interface ContainerProps {
    className?: string | undefined;
    users?: User[] | undefined;
    close: () => void;
    view: boolean;
}

const PAGE_SIZE = 20;

const SendPublication: React.FC<ContainerProps> = (props) => {
    const [users, setUsers] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const loadMoreUsers = () => {
        if (!props.users) return;

        const nextPage = currentPage + 1;
        const startIndex = currentPage * PAGE_SIZE;
        const endIndex = nextPage * PAGE_SIZE;
        const newUsers = props.users.slice(startIndex, endIndex);

        setUsers((prevUsers) => [...prevUsers, ...newUsers]);
        setCurrentPage(nextPage);
    };

    const handleScrollEvent = (ev: any) => {
        loadMoreUsers();
        setTimeout(() => ev.target.complete(), 1000);
    };

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

    useEffect(() => {
        setCurrentPage(-1);
        setUsers([]);
        loadMoreUsers();
    }, []);

    return (
        <div className={props.className}>
            <div ref={containerRef} className="send-publication-container">
                <div className="rectangle-up-down"></div>

                <SearchBar text="Buscar"></SearchBar>

                <IonContent className="scroll-container">
                    <IonList className="user-list">
                        {users.map((user, index) => (
                            <IonButton key={index} className="profile_button" size="small" fill="clear" color="light">
                                <ProfilePresentation user_name={user.user_name} profile_photo={user.profile_photo} />
                            </IonButton>
                        ))}
                    </IonList>
                    <IonInfiniteScroll onIonInfinite={(ev) => handleScrollEvent(ev)}>
                        <IonInfiniteScrollContent loadingText="Porfavor Espere..." loadingSpinner="bubbles"></IonInfiniteScrollContent>
                    </IonInfiniteScroll>
                </IonContent>

                <div className="share-option">
                    <IonButton className="share-button" size="small" fill="clear" color="light">
                        <div>
                            <IonIcon className="icon-share-link" icon={linkOutline}></IonIcon>
                            <IonLabel className="label-share">Copiar Link</IonLabel>
                        </div>
                    </IonButton>

                    <IonButton className="share-button" size="small" fill="clear" color="light">
                        <div>
                            <IonIcon className="icon-share-whatsapp" icon={logoWhatsapp}></IonIcon>
                            <IonLabel className="label-share">WhatsApp</IonLabel>
                        </div>
                    </IonButton>

                    <IonButton className="share-button" size="small" fill="clear" color="light">
                        <div>
                            <IonIcon className="icon-share-facebook" icon={logoFacebook}></IonIcon>
                            <IonLabel className="label-share">Facebook</IonLabel>
                        </div>
                    </IonButton>

                    <IonButton className="share-button" size="small" fill="clear" color="light">
                        <div>
                            <IonIcon className="icon-share-instagram" icon={logoInstagram}></IonIcon>
                            <IonLabel className="label-share">Instagram</IonLabel>
                        </div>
                    </IonButton>

                    <IonButton className="share-button" size="small" fill="clear" color="light">
                        <div>
                            <IonIcon className="icon-share-X" icon={logoX}></IonIcon>
                            <IonLabel className="label-share">X</IonLabel>
                        </div>
                    </IonButton>

                    <IonButton className="share-button" size="small" fill="clear" color="light">
                        <div>
                            <IonIcon className="icon-share-phone" icon={shareSocialOutline}></IonIcon>
                            <IonLabel className="label-share">Compartir</IonLabel>
                        </div>
                    </IonButton>
                </div>
            </div>
        </div>
    );
};

export default SendPublication;
