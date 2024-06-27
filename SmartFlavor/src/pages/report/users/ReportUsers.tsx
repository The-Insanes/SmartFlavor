import { IonButton, IonContent, IonHeader, IonLabel, IonPage } from "@ionic/react";
import "./ReportUsers.css"
import Header from "../../../components/header-interact/Header";
import SearchBar from "../../../components/search-bar/SearchBar";
import { useEffect, useState } from "react";
import ProfileContainer from "../../../components/profile-container/ProfileContainer";
import Footer from "../../../components/footers/footer-3/Footer";

interface User {
    user_name: string,
    profile_photo: string,
    followers: number,
    following: number,
    num_post: number,
    description: string
}

const generate_users = () => {
    const users = [];

    for(let i = 0; i < 50; i++) {
        users.push({
            user_name: "pepe el pollo",
            profile_photo: "images/profile_photos/chef rush.jpeg",
            followers: 506,
            following: 345,
            num_post: 23,
            description: "Me cumie en el pony por que estaba caliente y quee"
        });
    }

    return users;
}

const ReportUsers: React.FC = () =>{
    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        setUsers(generate_users());
    });

    return (
        <IonPage>
            <IonHeader>
                <Header/>
            </IonHeader>

            <IonContent fullscreen>
                <div className="center-page">
                    <div className="search-bar-admin">
                        <SearchBar text="¿Que usuario desea buscar?"/>
                    </div>

                    <div className="users-section">
                    {users && users.map((user, index) => (
                        <div className="user-reported-option">
                            <ProfileContainer user_name={user.user_name} post_num={user.num_post} follow_num={user.followers} following_num={user.following} profile_photo={user.profile_photo} description={user.description} view_edit={false} key={index}/>
                        
                            <IonButton className="show-more-button" fill="clear" color="light" size="small">
                                <IonLabel>+ Ver detalles</IonLabel>
                            </IonButton>
                        </div>
                    ))}
                    </div>

                    <div slot="end">
                    <Footer/>
                </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default ReportUsers;