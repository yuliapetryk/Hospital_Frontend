import React, { useState } from 'react';

export default function AppointmentForm() {
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      date: event.target.elements.data.value,
      doctorId: event.target.elements.doctorId.value,
      patientId: event.target.elements.patientId.value,
      diagnosis: event.target.elements.diagnosis.value,
      medication: event.target.elements.medication.value,
      procedure: event.target.elements.procedure.value,
      surgery: event.target.elements.surgery.value
    };


    try {
      const response = await fetch('http://localhost:3030/hospital/appointments_doctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSuccessMessage('Прийом успішно зафіксовано');
      event.target.reset(); 

    } catch (error) {
      console.error('Помилка під час відправлення даних на сервер:', error);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="subtitle" htmlFor="data">Дата:</label>
          <input type="text" id="data" name="data" />
        </div>

        <div className="input-container">
          <label className="subtitle" htmlFor="doctorId">Лікар:</label>
          <input type="text" id="doctorId" name="doctorId" />
        </div>

        <div className="input-container">
          <label className="subtitle" htmlFor="patientId">Пацієнт:</label>
          <input type="text" id="patientId" name="patientId" />
        </div>

        <div className="input-container">
          <label className="subtitle" htmlFor="diagnosis">Діагноз:</label>
          <input type="text" id="diagnosis" name="diagnosis" />
        </div>

        <div className="input-container">
          <label className="subtitle" htmlFor="medication">Ліки:</label>
          <input type="text" id="medication" name="medication" />
        </div>

        <div className="input-container">
          <label className="subtitle" htmlFor="procedure">Процедури:</label>
          <input type="text" id="procedure" name="procedure" />
        </div>

        <div className="input-container">
          <label className="subtitle" htmlFor="surgery">Операція:</label>
          <input type="text" id="surgery" name="surgery" />
        </div>

        <button className="button" type="submit">Створити</button>
      </form>
      {successMessage && <p class="subtitle">{successMessage}</p>}
    </div>
  );
}
