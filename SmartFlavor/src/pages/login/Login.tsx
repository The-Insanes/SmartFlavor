import { IonContent, IonFooter, IonImg, IonPage } from "@ionic/react";
import "./Login.css"
import "../../components/header-interact/Header"
import Header from "../../components/header-interact/Header";
import Footer from "../../components/footers/footer-3/Footer";
import SearchBar from "../../components/search-bar/SearchBar";
import CommentContainer from "../../components/comment/comment-container/CommentContainer";
import ProfileContainer from "../../components/profile-container/ProfileContainer";
import WelcomeMessage from "../../components/welcome-message/WelcomeMessage";
import ChatContainer from "../../components/chat-container/ChatContainer";
import Presentation from "../../components/presentation-search/Presentation";
import PublicationContainer from "../../components/publication-container/PublicationContainer";
import { useState } from "react";
import ProfilePresentation from "../../components/profile-presentation/ProfilePresentation";
import SendPublication from "../../components/send-publication/SendPublication";
import ReportContainer from "../../components/report/container/ReportContainer";
import CommentSection from "../../components/comment/comment-section/CommentSection";

interface Post {
    url: string
}

interface User {
    user_name: string,
    profile_photo: string
}

interface Comment {
    profile_photo: string,
    user_name: string,
    description: string,
    time: string,
    likes: number
}

const Login: React.FC = () => {
    const generate_users = () => {
        const users = []

        for(let i = 0; i < 2500; i++) {
            const new_user = {
                user_name: "Pualina troll",
                profile_photo: "images/profile_photos/chef Paula.jpeg"
            }

            users.push(new_user);
        } 

        return users;
    }
    
    const generate_posts = () => {
        const posts = Array<Post>();

        for(let i = 0; i < 2500; i++) {
            let new_post = {
                url: "images/thumbnails/post_1.jpeg"
            }
            posts.push(new_post);
        }

        return posts;
    }

    const generate_comments = () => {
        const comments = [];

        for(let i = 0; i < 500; i++) {
            const new_comment = {
                profile_photo: "images/profile_photos/chef rush.jpeg",
                user_name: "Pepe el pollo",
                description: "Estuvo muy bueno tu video, ojalá sea el último",
                time: "2 m",
                likes: 600
            }

            comments.push(new_comment);
        }

        return comments;
    }

    return (
        <IonPage>
            <IonContent>
                <Header/>
                <CommentSection profile_photo={"images/profile_photos/chef 1.jpg"} comments={generate_comments()}/>
            </IonContent>
        </IonPage>
    );
}

export default Login;