import React from 'react';
import './AuthForm.css'
export function AuthFormPatient() {
  return (
    <div>
      <form>
        <div className="input-container">
          <label className="subtitle" htmlFor="phone">Номер телефону:</label>
          <input type="text" id="phone" name="phone" />
        </div>

        <div className="input-container">
          <label className="subtitle" htmlFor="password">Пароль:</label>
          <input type="password" id="password" name="password" />
        </div>

        <button class="button" type="submit">Увійти</button>
      </form>
    </div>
  );
}

export function AuthFormDoctor() {
    return (
      <div>
        <form>
          <div className="input-container">
            <label className="subtitle" htmlFor="id">ID:</label>
            <input type="text" id="id" name="id" />
          </div>
  
          <div className="input-container">
            <label className="subtitle" htmlFor="password">Пароль:</label>
            <input type="password" id="password" name="password" />
          </div>
  
          <button class="button" type="submit">Увійти</button>
        </form>
      </div>
    );
  }

  

