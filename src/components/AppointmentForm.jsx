
import React from 'react';

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.props.id);

    const data = {
      date: event.target.elements.data.value,
      doctorId: this.props.id,
      patientId: event.target.elements.patientId.value,
      diagnosis: event.target.elements.diagnosis.value,
      medication: event.target.elements.medication.value,
      procedure: event.target.elements.procedure.value,
      surgery: event.target.elements.surgery.value,
    };

    try {
      const response = await fetch('http://localhost:3030/hospital/appointments_doctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      this.setState({ successMessage: 'Прийом успішно зафіксовано' });
      event.target.reset();
    } catch (error) {
      console.error('Помилка під час відправлення даних на сервер:', error);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label className="subtitle" htmlFor="data">Дата:</label>
            <input type="text" id="data" name="data" />
          </div>

          <div className="input-container">
            <label className="subtitle" htmlFor="patientId">ID Пацієнта:</label>
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
        {this.state.successMessage && <p className="subtitle">{this.state.successMessage}</p>}
      </div>
    );
  }
}

export default AppointmentForm;
