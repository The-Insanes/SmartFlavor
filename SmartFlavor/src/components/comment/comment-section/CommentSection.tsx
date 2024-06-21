import "./CommentSection.css"
import { IonAvatar, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonList } from "@ionic/react";
import CommentContainer from "../comment-container/CommentContainer";
import { useEffect, useState } from "react";

interface Comment {
    profile_photo: string,
    user_name: string,
    description: string,
    time: string,
    likes: number
}

interface ContainerProps {
    className?: string | undefined
    comments?: Comment[] | undefined,
    profile_photo: string
}

const PAGE_SIZE = 10;

const CommentSection: React.FC<ContainerProps> = (props) => {
    const [comments, setComments] = useState<Comment[]>([])
    const [currentPage, setCurrentPage] = useState<number>(0);

    const loadMoreComments = () => {
        if(!props.comments) return;

        const nextPage = currentPage + 1;
        const startIndex = currentPage + PAGE_SIZE;
        const endIndex = nextPage * PAGE_SIZE;
        const newComments = props.comments.slice(startIndex, endIndex);

        setComments(prevUsers => [...prevUsers, ...newComments]);
        setCurrentPage(nextPage);
    }
    
    const handleScrollEvent = (ev: any) => {
        loadMoreComments();
        setTimeout(() => ev.target.complete(), 1000);
    }

    useEffect(() => {
        console.log(props.comments);
        setComments([]);
        setCurrentPage(0);
        loadMoreComments();

    }, [props.comments])


    return (
        <div className={props.className}>
            <div className="comment-section-container">
                <div className="rectangle-up-down"></div>
                
                <IonContent className="comment-list">
                    <IonList className="comment-items">
                        {comments.map((commment, index) => (
                            <CommentContainer className="user-comment" user_name={commment.user_name} num_likes={commment.likes} description={commment.description} profile_photo={commment.profile_photo} time={commment.time}/>
                        ))}
                    </IonList>

                    <IonInfiniteScroll onIonInfinite={(ev) => {handleScrollEvent(ev)}}>
                        <IonInfiniteScrollContent loadingText="Porfavor Espere..." loadingSpinner="bubbles"></IonInfiniteScrollContent>
                    </IonInfiniteScroll>
                </IonContent>

                <IonInput className="comment-input" placeholder="Agrega un comentario">
                    <IonAvatar className="comment-profile-avatar" slot="start">
                        <img src={props.profile_photo}></img>
                    </IonAvatar>
                </IonInput>
            </div>
        </div>
    );
}

export default CommentSection;