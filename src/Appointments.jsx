import React from 'react'; 
import './Appointments.css';

class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { appointments: [] };
    this.handleExecute = this.handleExecute.bind(this); 

    let url = "http://localhost:3030/hospital/appointments_doctor";
   
    fetch(`${url}/${this.props.id}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then(result => {
        console.log(result); 
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
      fetch(`http://localhost:3030/hospital/status/${id}`, {
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
        <div className="appointments-container">
            <div class="form_container">
              <h3 сlass="subtitle">Ваші прийоми:</h3>
            </div>
          {this.state.appointments.length > 0 ? (
            <table className="appointments-table">
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.appointments.map((appointment, index) => (
                  <tr key={appointment.id}>
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
                      {appointment.surgery=== "" && this.props.param === "nurse" && !appointment.status && (
                        <button onClick={() => this.handleExecute(index, appointment.id)}>
                          Виконати
                        </button>
                      )}
                       {this.props.param === "doctor" && !appointment.status && (
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