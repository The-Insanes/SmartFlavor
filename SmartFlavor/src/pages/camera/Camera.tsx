import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonPage } from "@ionic/react";
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions } from '@capacitor-community/camera-preview';
import "./Camera.css";
import { useEffect, useRef, useState } from "react";
import { arrowBack, colorWand, flashlight, flashOff, flashSharp, reloadSharp } from "ionicons/icons";
import { Flashlight } from '@ionic-native/flashlight';

const Camera: React.FC = () => {
    const [flash, setFlash] = useState<boolean>(false);
    const [position, setPosition] = useState<string>('rear');
    const [videoData, setVideoData] = useState<any>();

    useEffect(() => {
        startCamera();
        
        return () => {
            stopCamera();
        };
    }, []);
  
    const startCamera = async () => {
      const cameraPreviewOptions: CameraPreviewOptions = {
        position: 'rear',
        parent: 'cameraPreview',
        className: 'cameraPreview',
        toBack: true,
        width: window.screen.width,
        height: window.screen.height
      };

      await CameraPreview.start(cameraPreviewOptions);
    };
  
    const stopCamera = async () => {
       await CameraPreview.stop();
    };
  
    const takePicture = async () => {
        
      const result = await CameraPreview.capture({
        quality: 85
      });
      const imageUrl = 'data:image/jpeg;base64,' + result.value;
      // Aquí podrías manejar la imagen capturada, por ejemplo, guardarla o mostrarla en la interfaz
    };

    const toggleFlash = async () => {
        setFlash(!flash);

        await CameraPreview.setFlashMode({flashMode: `${flash? 'on' : 'off'}`});
    };

    const recordVideo = async () => {
        const cameraOptions: CameraPreviewOptions = {
            position: position,
            width: window.screen.width,
            height: window.screen.height
        };
        
        await CameraPreview.startRecordVideo(cameraOptions);
    }

    const stopRecord = async () => {
        const resultRecordVideo = await CameraPreview.stopRecordVideo();
        setVideoData(resultRecordVideo);

    }

    const switchCamera = async () => {
        await CameraPreview.flip();

        if(position === 'rear') {
            setPosition('front');
        }
        else {
            setPosition('rear');
        }
    };
    

    return(
        <IonPage>
            <IonHeader></IonHeader>
            
            <IonContent id="cameraPreview" className="cameraPreview" fullscreen>
                <div className="camera-interaction">
                    <div className="top-interactions">
                        <div className="first-buttons">
                            <IonButton className="camera-button" fill="clear" color="light">
                                <IonIcon className="camera-icon" icon={arrowBack}></IonIcon>
                            </IonButton>

                            <IonButton className="camera-button" fill="clear" color="light">
                                <div>
                                    <IonIcon className="camera-icon" icon={reloadSharp} onClick={switchCamera}></IonIcon>
                                    <IonLabel>Girar</IonLabel>
                                </div>
                            </IonButton>
                        </div>
                        
                        <div className="second-buttons">
                            <IonButton className="camera-button" fill="clear" color="light" onClick={toggleFlash}>
                                <div>
                                    {flash?
                                        <IonIcon className="camera-icon" icon={flashSharp}></IonIcon>
                                        :
                                        <IonIcon className="camera-icon" icon={flashOff}></IonIcon>
                                    }
                                    <IonLabel>Flash</IonLabel>
                                </div>
                            </IonButton>
                        </div>
                    </div>

                    <IonLabel>{videoData}</IonLabel>

                    <div className="under-interact">
                        <IonButton className="camera-button" fill="clear" color="light">
                            <div>
                                <div className="galery">
                                    <img src="images/thumbnails/post_1.jpeg"></img>
                                </div>
                                <IonLabel>Cargar</IonLabel>
                            </div>
                        </IonButton>

                        <IonButton className="camera-button" fill="clear" color="light" onClick={takePicture} onTouchStart={recordVideo} onTouchEnd={stopRecord}>
                            <div className="circle-1">
                                <div className="circle-2"></div>
                            </div>
                        </IonButton>

                        <IonButton className="camera-button" fill="clear" color="light">
                            <div>
                                <IonIcon className="camera-icon" icon={colorWand}></IonIcon>
                                <IonLabel>Efectos</IonLabel>
                            </div>
                        </IonButton>
                    </div>
                </div>
            </IonContent>

            <IonFooter></IonFooter>
        </IonPage>
    );
}

export default Camera;