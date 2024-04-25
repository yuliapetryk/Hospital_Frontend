import React, { useState } from "react";
import {  useLocation } from "react-router-dom"; 

import AppointmentForm from "./AppointmentForm";
import Appointments from "./Appointments";

function UserInfo() {
  const location = useLocation();
  const { user } = location.state;
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);
  
  return (
    <div>
      <h2 class= "subtitle">Вітаємо</h2>
      <p class= "subtitle">{user.lastName} {user.firstName} {user.patronymic}</p>
      <button onClick={() => {
         setShowAuthForm(true);
        setShowAppointments(false)
      }} className="button">Додати прийом</button>

      <button onClick={() => {
        setShowAppointments(true)
        setShowAuthForm(false)
      }} className="button">Переглянути прийоми</button>
      
       {showAuthForm && <AppointmentForm />}
       {showAppointments && <Appointments param={user.position}  id={user.id} /> }
    </div>
  );
}

export default UserInfo;
