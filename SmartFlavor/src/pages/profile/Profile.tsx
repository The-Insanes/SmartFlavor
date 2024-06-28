import { IonButton, IonContent, IonFooter, IonHeader, IonPage } from "@ionic/react";
import "./Profile.css"
import Header from "../../components/header-interact/Header";
import Footer from "../../components/footers/footer-1/Footer";
import ProfileContainer from "../../components/profile-container/ProfileContainer";
import { useEffect, useState } from "react";

interface Post {
    url: string
}

const generate_posts = () => {
    const posts = [];

    for(let i = 0; i < 23; i++) {
        let new_post = {
            url: "images/thumbnails/post_1.jpeg"
        }
        posts.push(new_post);
    }

    return posts;
}

const Profile: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        setPosts(generate_posts());
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <Header/>
            </IonHeader>

            <IonContent className="djaskldjlsa" fullscreen>
                <div className="center-page-87y1923">
                    <ProfileContainer className="user-info" user_name={"Chef Ruperto"} post_num={23} follow_num={321} following_num={999} profile_photo={"images/profile_photos/chef 1.jpg"} description={"Me culie un mono 🤑🤑 y con el sebas 👻"} view_edit={true}/>

                    <div className="interact-section">
                        <IonButton className="interact-post-button" fill="clear" size="small" color="light">
                            Publicaciones
                        </IonButton>

                        <IonButton className="interact-post-button" fill="clear" size="small" color="light">
                            Guardados
                        </IonButton>
                    </div>

                    <div className="publications-container">
                        {posts.map((post, index) => (
                            <IonButton className="post-button" fill="clear" size="small" color="light">
                                <img className="post-thumbnail" src={post.url} key={index}></img>
                            </IonButton>
                        ))};
                    </div>
                </div>
            </IonContent>

            <IonFooter>
                <Footer/>
            </IonFooter>
        </IonPage>
    );
}

export default Profile;