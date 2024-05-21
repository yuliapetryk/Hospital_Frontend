import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function PatientAppointments() {
  const [appointments, setAppointments] = useState([]);
  const { user } = useLocation().state;
  const url = "http://localhost:3030/hospital/appointments_patient";
  
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`${url}/${user.id}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          }
        });
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchAppointments();
  }, [url, user.id]);

  return (
    <div>
      {appointments.length > 0 ? (
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
            {appointments.map((appointment, index) => (
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

export default PatientAppointments;
