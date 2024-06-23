import "./Main.css"
import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonPage } from "@ionic/react";
import { bookmark, chatbubbleSharp, heart, notifications, paperPlane, save } from "ionicons/icons"; 
import Header from "../../../components/header-interact/Header";
import Footer from "../../../components/footers/footer-1/Footer";
import { useState } from "react";
import CommentSection from "../../../components/comment/comment-section/CommentSection";
import ReportContainer from "../../../components/report/container/ReportContainer";
import SendPublication from "../../../components/send-publication/SendPublication";

interface CommentConfig {
    view_comments: boolean,
}

const generate_users = () => {
    const users = []

    for(let i = 0; i < 2500; i++) {
        const new_user = {
            user_name: `Pualina_12${i} 👩🏼‍🍳`,
            profile_photo: "images/profile_photos/chef Paula.jpeg"
        }

        users.push(new_user);
    } 

    return users;
}

const generate_comments = () => {
    const comments = [];

    for(let i = 0; i < 500; i++) {
        const new_comment = {
            profile_photo: "images/profile_photos/chef rush.jpeg",
            user_name: `Pepe el pollo`,
            description: "Estuvo muy bueno tu video, ojalá sea el último",
            time: "2 m",
            likes: 600
        }

        comments.push(new_comment);
    }

    return comments;
}

const Main: React.FC = () => {
    const [like, setLike] = useState<boolean>(false);
    const [saved, setSaved] = useState<boolean>(false);
    const [viewComment, setViewComment] = useState<boolean>(false);
    const [viewReport, setViewReport] = useState<boolean>(false);
    const [viewSendPost, setViewSendPost] = useState<boolean>(false);

    const view_send_post = () => {
        setViewSendPost(!viewSendPost);
    }

    const view_reports = () => {
        setViewReport(!viewReport);
    }

    const view_comments = () => {
        setViewComment(!viewComment);
    }

    const like_video = () => {
        setLike(!like);
    }

    const save_video = () => {
        setSaved(!saved);
    }

    return (
        <IonPage>
            <IonHeader>
                <Header/>
            </IonHeader>

            <IonContent fullscreen>
                <div className="center-page">
                    <video className="video-main" loop autoPlay muted>
                        <source src="videos/Download.mp4" type="video/mp4"></source>
                        El navegador que estás utilizando no acepta HTML5
                    </video>

                    <div className="page-content" style={(viewComment || viewReport || viewSendPost)? {background: "black", opacity: "0.7"} : {}}>
                        <div className="report-div">
                            <IonButton fill="clear" color="light" onClick={view_reports}>
                                <IonIcon className="report-icon" slot="icon-only" icon={notifications}></IonIcon>
                            </IonButton>
                        </div>

                        <div className="under-interaction">
                            <div className="video-interactions">
                                <IonButton className="video-option" fill="clear" color="light" onClick={like_video}>
                                    <IonIcon className="icon-option" slot="icon-only" style={like? {color: "red"} : {color: "#FFFF"}} icon={heart}></IonIcon>
                                </IonButton>

                                <IonButton className="video-option" fill="clear" color="light" onClick={view_comments}>
                                    <IonIcon className="icon-option" slot="icon-only" icon={chatbubbleSharp}></IonIcon>
                                </IonButton>

                                <IonButton className="video-option" fill="clear" color="light" onClick={save_video}>
                                    <IonIcon className="icon-option" slot="icon-only" style={saved? {color: "#ffdf00"} : {color: "#FFFF"}} icon={bookmark}></IonIcon>
                                </IonButton>

                                <IonButton className="video-option" fill="clear" color="light" onClick={view_send_post}>
                                    <IonIcon className="icon-option" slot="icon-only" icon={paperPlane}></IonIcon>
                                </IonButton>
                            </div>
                            <Footer/>
                        </div>
                    </div>

                    <CommentSection 
                        className={`post-comments-${viewComment? "visible" : "hidden"}`} 
                        profile_photo={"images/profile_photos/chef 1.jpg"} 
                        comments={generate_comments()} close={view_comments} 
                        view={viewComment}/>
                    <ReportContainer 
                        className={`report-${viewReport? "visible" : "hidden"}`} 
                        close={view_reports} 
                        view={viewReport}/>
                    <SendPublication 
                        className={`send-post-${viewSendPost? "visible" : "hidden"}`} 
                        users={generate_users()} 
                        close={view_send_post} 
                        view={viewSendPost}/>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Main;