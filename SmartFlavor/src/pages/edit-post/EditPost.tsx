import React from 'react';
import "./EditPost.css"
import { IonContent, IonPage } from '@ionic/react';
import EditPostContainer from '../../components/edit/post/EditPostContainer';


const EditPost: React.FC = () => {
  
    return (
      <IonPage>
        <IonContent >
          <EditPostContainer recipe={{
            id: 0,
            title: '',
            userImage: '',
            recipeImage: '',
            userName: '',
            likes: 0,
            description: ''
          }} onClose={function (): void {
            throw new Error('Function not implemented.');
          } }></EditPostContainer>
            {/*<div className='a'>
              <div className='b'></div>
              <div className='c'>
                <div className="c-1"></div>
                <div className="c-1"></div>
                <div className="c-1"></div>
              </div>
            </div>*/}
        </IonContent>
      </IonPage>
    );
  };
  
  export default EditPost;
  