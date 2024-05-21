
import React from 'react';

class PatientCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const generateRandomNumber = () => {
      return Math.floor(Math.random() * 100000000); 
  };

  const data = {
    id: generateRandomNumber(),
    last_name: event.target.elements.lastName.value,
    first_name: event.target.elements.firstName.value,
    patronymic: event.target.elements.patronymic.value,
    sex: event.target.elements.sex.value,
    date_of_birth: event.target.elements.data.value,
    phone: event.target.elements.phone.value,
    password: event.target.elements.password.value
    };
      console.log(data)
    try {
        let  url = "http://localhost:3030/hospital/appointments_patient";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      this.setState({ successMessage: 'Ви успішно зареєструвалися' });
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
            <label className="subtitle" htmlFor="lastName">Прізвище:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>

          <div className="input-container">
            <label className="subtitle" htmlFor="firstName">Ім'я:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>

          <div className="input-container">
            <label className="subtitle" htmlFor="patronymic">По батькові:</label>
            <input type="text" id="patronymic" name="patronymic" />
          </div>

          <div className="input-container">
          <label className="subtitle">Стать:</label>
          <div className="switch-container">
            <input type="radio" id="female" name="sex" value="F" />
            <label htmlFor="female" className="switch-label">F</label>
            <input type="radio" id="male" name="sex" value="M" />
            <label htmlFor="male" className="switch-label">M</label>
          </div>
        </div>

          <div className="input-container">
            <label className="subtitle" htmlFor="data">Дата народження:</label>
            <input type="text" id="data" name="data" />
          </div>

          <div className="input-container">
            <label className="subtitle" htmlFor="phone">Телефон:</label>
            <input type="text" id="phone" name="phone" />
          </div>

          <div className="input-container">
            <label className="subtitle" htmlFor="password">Пароль:</label>
            <input type="password" id="password" name="password" />
          </div>

          <button className="button" type="submit">Створити</button>
        </form>
        {this.state.successMessage && <p className="subtitle">{this.state.successMessage}</p>}
      </div>
    );
  }
}

export default PatientCreate;
