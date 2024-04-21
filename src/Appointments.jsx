import React from 'react'; 


class Appointments extends React.Component {
    constructor(props) {
      super(props);
      console.log("Hehe"); 
      this.state = { appointments: [] };
      this.handleExecute = this.handleExecute.bind(this); // Прив'язка контексту для обробника подій
      fetch("http://localhost:3030/hospital/appointments")
        .then(response => response.json())
        .then(result => {
          console.log(result); // Виведення у консоль результату запиту
          this.setState({
            appointments: result
          });
        })
        .catch(error => console.error('Error:', error)); 
    }
    handleExecute(index, id) {
      const updatedAppointments = [...this.state.appointments];
      updatedAppointments[index].status = true;
      this.setState({ appointments: updatedAppointments });
      fetch(`http://localhost:3030/hospital/appointments/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }})
      .then(response => response.json())
      .then(data => console.log('Status updated:', data))
      .catch(error => console.error('Error updating status:', error));
    }
    
  
    render() {
      return (
        <div>
          {this.state.appointments.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Doctor ID</th>
                  <th>Patient ID</th>
                  <th>Diagnosis</th>
                  <th>Medication</th>
                  <th>Procedure</th>
                  <th>Surgery</th>
                  <th>Status</th>
                  <th>Action</th> {/* Доданий стовпчик для дій */}
                </tr>
              </thead>
              <tbody>
                {this.state.appointments.map((appointment, index) => (
                  <tr key={appointment.date}>
                    <td>{appointment.id}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.doctorId}</td>
                    <td>{appointment.patientId}</td>
                    <td>{appointment.diagnosis}</td>
                    <td>{appointment.medication}</td>
                    <td>{appointment.procedure}</td>
                    <td>{appointment.surgery}</td>
                    <td>{appointment.status ? 'Yes' : 'No'}</td>
                    <td>
                      {/* Відображення кнопки тільки для записів зі статусом false */}
                      {!appointment.status && (
                        <button onClick={() => this.handleExecute(index, appointment.id)}>
                          Виконати
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      );
    }
  }
  
 export default Appointments