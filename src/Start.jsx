import React, { useState } from "react";
import { AuthForm } from "./AuthForm";
function Start() {
  const [showAuthFormPatient, setShowAuthFormPatient] = useState(false); 
  const [showAuthFormDoctor, setShowAuthFormDoctor] = useState(false); 
  
  return (
    <div>
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

      {showAuthFormDoctor && <AuthForm mode={0} />}
      {showAuthFormPatient && <AuthForm mode={1} />}
    </div>
  );
}
 export default Start;