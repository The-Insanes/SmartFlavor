import { IonButton, IonContent, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonLabel, IonList } from "@ionic/react";
import "./PublicationContainer.css"
import { useEffect, useState } from "react";

interface Post {
    url: string
}

interface ContainerProps {
    className?: string | undefined,
    posts?: Post[] | undefined,
}

const PAGE_SIZE = 60;

const PublicationContainer: React.FC<ContainerProps> = (props) => {
    const [posts, setPost] = useState<Post[]>([])
    const [currentPage, setCurrentPage] = useState(0);

    const loadMorePosts = () => {
        if (!props.posts) return;
    
        const nextPage = currentPage + 1;
        const startIndex = currentPage * PAGE_SIZE;
        const endIndex = nextPage * PAGE_SIZE;
        const newPosts = props.posts.slice(startIndex, endIndex);
    
        setPost(prevPosts => [...prevPosts, ...newPosts]);
        setCurrentPage(nextPage);
    };

    const handleScrollEvent = (ev: any) => {
        loadMorePosts();
        setTimeout(() => ev.target.complete(), 1000);
    }

    useEffect(() => {
        setPost([]); // Resetear elementos al cambiar los comentarios
        setCurrentPage(0); // Resetear la página al cambiar los comentarios
        loadMorePosts(); // Cargar la primera página
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.posts]);

    
    return (
        <div className={props.className}>
            <div className="publication-container">
                <IonContent className="scroll-container">
                    <IonList className="post-list">   
                        {posts?.map((post, index) => (
                            <IonButton className="thumbnails-button" fill="clear" size="small" key={index}>
                                <IonImg className="thumbnails-post" src={post.url}></IonImg>
                            </IonButton>
                        ))}
                    </IonList>
                    <IonInfiniteScroll onIonInfinite={(ev) => {handleScrollEvent(ev)}}>
                        <IonInfiniteScrollContent loadingText="Porfavor Espere..." loadingSpinner="bubbles"></IonInfiniteScrollContent>
                    </IonInfiniteScroll>
                </IonContent>
            </div>
        </div>
    );
}

export default PublicationContainer;