import React from 'react'; 

class PatientAppointments extends React.Component {
    constructor(props) {
      super(props);
      this.state = { appointments: [] };
  
      let  url = "http://localhost:3030/hospital/appointments_patient";
  
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
    
      render() {
        return (
          <div>
            {this.state.appointments.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Doctor ID</th>
                    <th>Diagnosis</th>
                    <th>Medication</th>
                    <th>Procedure</th>
                    <th>Surgery</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.appointments.map((appointment, index) => (
                    <tr key={appointment.date}>
                      <td>{appointment.date}</td>
                      <td>{appointment.doctorId}</td>
                      <td>{appointment.diagnosis}</td>
                      <td>{appointment.medication}</td>
                      <td>{appointment.procedure}</td>
                      <td>{appointment.surgery}</td>
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
    
   export default PatientAppointments