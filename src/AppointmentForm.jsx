import React from 'react';

 export default function AppointmentForm() {

  const handleSubmit = async (event) => {
    event.preventDefault(); // Зупинити стандартну поведінку форми, щоб сторінка не перезавантажувалася

    // Отримати значення полів форми
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
      const response = await fetch('http://localhost:3030/hospital/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Дані успішно відправлені на сервер');
      // Очистити поля форми або виконати інші дії
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

        <button class="button" type="submit">Створити</button>
      </form>
    </div>
  );
}