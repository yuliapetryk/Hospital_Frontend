import './App.css'
import Appoinments from './Appointments'
import React, { useState } from 'react';
import { AuthFormPatient, AuthFormDoctor } from './AuthForm'; 
import  AppointmentForm  from './AppointmentForm'; 
import  Appointments  from './Appointments'; // Припускаючи, що це шлях до вашого файлу з формами


function App() {
  const [showAuthFormPatient, setShowAuthFormPatient] = useState(false); // Стан для відображення форми
  const [showAuthFormDoctor, setShowAuthFormDoctor] = useState(false); // Стан для відображення форми

  return (
    <div className="App">
      <div>
        <img src="/icon-medicine.png" className="logo" alt=" logo" />
        <img src="/icon-doctor.png" className="logo doctor" alt="doctor logo" />
      </div>
      <h3 className="subtitle">Приватна поліклініка</h3>
      <h1 className="title">ProfiMed</h1>
      <h3 className="subtitle">Увійти як:</h3>
      
      <button onClick={() => {
        if (!showAuthFormDoctor) {
        setShowAuthFormDoctor(true);
        setShowAuthFormPatient(false);
     }
  }} className="button">Лікар</button>

      <button onClick={() => {
        if (!showAuthFormPatient) {
        setShowAuthFormPatient(true);
       setShowAuthFormDoctor(false);
       
  }
}} className="button">Пацієнт</button>

      {showAuthFormDoctor && <AuthFormDoctor />}
      {showAuthFormPatient && <AuthFormPatient />}
      {/* <div><Appoinments /></div> */} 

    <AppointmentForm />
    </div>
  );
}

export default App;

