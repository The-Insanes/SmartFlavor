import React from 'react';
import { IonInput, IonItem } from '@ionic/react';
import './input-bar.css';
import { TextFieldTypes } from '@ionic/core';

interface InputBarProps {
  label: string;
  type?: TextFieldTypes;
  value: string;
  onChange: (e: CustomEvent) => void;
}

const InputBar: React.FC<InputBarProps> = ({ label, type = 'text', value, onChange }) => {
  return (
    <IonItem className="input-bar-container" lines="none">
      <IonInput 
        className="input-bar" 
        type={type} 
        value={value} 
        onIonChange={onChange} 
        placeholder={label} 
      />
    </IonItem>
  );
};

export default InputBar;
