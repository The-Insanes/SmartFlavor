import React, { useState } from 'react';
import { IonAvatar, IonImg } from '@ionic/react';
import './EditProfileContainer.css';
import InputEditBar from '../../input/input-editbar/input-editbar';

const EditProfileContainer: React.FC = () => {
  const [nombreValue, setNombreValue] = useState("Nombre XXXX");
  const [usuarioValue, setUsuarioValue] = useState("Usuario XXXX");
  const [presentacionValue, setPresentacionValue] = useState("-------<br/>------<br/>----------");
  const [sexoValue, setSexoValue] = useState("X");

  const handleNombreChange = (newValue: string) => {
    setNombreValue(newValue);
  };

  const handleUsuarioChange = (newValue: string) => {
    setUsuarioValue(newValue);
  };

  const handlePresentacionChange = (newValue: string) => {
    setPresentacionValue(newValue);
  };

  const handleSexoChange = (newValue: string) => {
    setSexoValue(newValue);
  };

  const handleConfirmChanges = () => {
    // Simulación de la actualización del perfil en el backend
    setTimeout(() => {
      console.log("Cambios confirmados:", nombreValue, usuarioValue, presentacionValue, sexoValue);
      alert("Perfil actualizado exitosamente");
    }, 1000);
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-header">
        <div className="edit-profile-title">Editar perfil</div>
      </div>
      <div className="edit-profile-photo">
        <IonAvatar className="profile-avatar">
          <IonImg src="images/profile_photos/chef 1.jpg" />
        </IonAvatar>
        <div className="edit-profile-photo-text">Cambiar Foto</div>
      </div>
      <InputEditBar label="Nombre" value={nombreValue} onChange={handleNombreChange} />
      <InputEditBar label="Nombre de Usuario" value={usuarioValue} onChange={handleUsuarioChange} />
      <InputEditBar label="Presentación" value={presentacionValue} onChange={handlePresentacionChange} />
      <InputEditBar label="Sexo" value={sexoValue} onChange={handleSexoChange} />
      <div className="edit-profile-confirm">
        <button className="edit-profile-confirm-button" onClick={handleConfirmChanges}>
          Confirmar Cambios
        </button>
      </div>
    </div>
  );
};

export default EditProfileContainer;
