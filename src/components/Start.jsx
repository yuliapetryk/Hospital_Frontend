import React, { useState } from "react";
import { AuthForm } from "../auth/AuthForm";
import  PatientCreate from "../components/PatientCreate";
function Start() {
  const [showAuthFormPatient, setShowAuthFormPatient] = useState(false); 
  const [showFormAddPatient, setShowFormAddPatient] = useState(false); 
  const [showAuthFormDoctor, setShowAuthFormDoctor] = useState(false); 
  
  return (
    <div>
      <h3 className="subtitle">Увійти як:</h3>
        <div>
      <button onClick={() => {
        if (!showAuthFormDoctor) {
          setShowFormAddPatient(false);
          setShowAuthFormDoctor(true);
          setShowAuthFormPatient(false);
        }
      }} className="button">Лікар</button>

      <button onClick={() => {
        if (!showAuthFormPatient) {
          setShowFormAddPatient(false);
          setShowAuthFormPatient(true);
          setShowAuthFormDoctor(false);
        }
      }} className="button">Пацієнт</button>
</div>
      <button onClick={() => {
        if (!showFormAddPatient) {
        setShowFormAddPatient(true);
         setShowAuthFormPatient(false);
         setShowAuthFormDoctor(false);
        }
      }} className="button_white">Зареєструватися</button>

      {showAuthFormDoctor && <AuthForm mode={0} />}
      {showAuthFormPatient && <AuthForm mode={1} />}
      {showFormAddPatient && <PatientCreate  />}
    </div>
    
  );
}
 export default Start;