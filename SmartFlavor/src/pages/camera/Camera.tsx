import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonPage } from "@ionic/react";
import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';
import "./Camera.css";
import { useEffect, useState, useRef } from "react";
import { arrowBack, colorWand, flashOff, flashSharp, reloadSharp } from "ionicons/icons";
import { Redirect } from "react-router";

const Camera: React.FC = () => {
    const [flash, setFlash] = useState<boolean>(false);
    const [position, setPosition] = useState<string>('rear');
    const [videoData, setVideoData] = useState<any>();
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [regresar, setRegresar] = useState<boolean>(false);
    const recordTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
        await CameraPreview.setFlashMode({ flashMode: flash ? 'off' : 'on' });
    };

    const startRecordVideo = async () => {
        setIsRecording(true);
        const cameraOptions: CameraPreviewOptions = {
            position: position,
            width: window.screen.width,
            height: window.screen.height
        };
        await CameraPreview.startRecordVideo(cameraOptions);
    };

    const stopRecordVideo = async () => {
        const resultRecordVideo = await CameraPreview.stopRecordVideo();
        setVideoData(resultRecordVideo);
        setIsRecording(false);
    };

    const switchCamera = async () => {
        await CameraPreview.flip();
        setPosition(position === 'rear' ? 'front' : 'rear');
    };

    const handleCaptureButtonMouseDown = () => {
        recordTimeoutRef.current = setTimeout(() => {
            startRecordVideo();
        }, 1000);
    };

    const handleCaptureButtonMouseUp = () => {
        if (recordTimeoutRef.current) {
            clearTimeout(recordTimeoutRef.current);
            recordTimeoutRef.current = null;
        }

        if (isRecording) {
            stopRecordVideo();
        } else {
            takePicture();
        }
    };

    return (
        <IonPage>
            <IonHeader></IonHeader>
            
            <IonContent id="cameraPreview" className="cameraPreview" fullscreen>
                {regresar && <Redirect to="/user-home"></Redirect>}
                <div className="camera-interaction">
                    <div className="top-interactions">
                        <div className="first-buttons">
                            <IonButton className="camera-button" fill="clear" color="light" onClick={(e) => {setRegresar(!regresar)}}>
                                <IonIcon className="camera-icon" icon={arrowBack}></IonIcon>
                            </IonButton>

                            <IonButton className="camera-button" fill="clear" color="light" onClick={switchCamera}>
                                <div>
                                    <IonIcon className="camera-icon" icon={reloadSharp}></IonIcon>
                                    <IonLabel>Girar</IonLabel>
                                </div>
                            </IonButton>
                        </div>
                        
                        <div className="second-buttons">
                            <IonButton className="camera-button" fill="clear" color="light" onClick={toggleFlash}>
                                <div>
                                    {flash ? (
                                        <IonIcon className="camera-icon" icon={flashSharp}></IonIcon>
                                    ) : (
                                        <IonIcon className="camera-icon" icon={flashOff}></IonIcon>
                                    )}
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
                                    <img src="images/thumbnails/post_1.jpeg" alt="thumbnail"></img>
                                </div>
                                <IonLabel>Cargar</IonLabel>
                            </div>
                        </IonButton>

                        <IonButton 
                            className={`camera-button ${isRecording ? 'is-recording' : ''}`} 
                            fill="clear" 
                            color="light" 
                            onMouseDown={handleCaptureButtonMouseDown} 
                            onMouseUp={handleCaptureButtonMouseUp}
                        >
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
};

export default Camera;
