import React from "react";
import {  useLocation } from "react-router-dom"; 
function UserInfo() {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div>
      <h2 class= "subtitle">Вітаємо</h2>
      <p class= "subtitle">{user.lastName} {user.firstName} {user.patronymic}</p>
    </div>
  );
}

export default UserInfo;
