import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAppointment } from "../../redux/appointmentsSlice";

const BookAppointment = ({ username, selectedDoctorName }) => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  const cities = ["New York", "Los Angeles", "Chicago", "Houston"];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDate = new Date(appointmentDate).toISOString().split('T')[0];

    const appointmentData = {
        appointment_date: formattedDate,
        city: city,
        username: username, 
        doctor_name: selectedDoctorName, 
        user_id: userId, 
        doctor_id: doctorId, 
      };

    dispatch(createAppointment(appointmentData));
  };

  const handleChangeDate = (e) => {
    setAppointmentDate(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: {username}</label>
      </div>
      <div>
        <label>Doctor's Name: {selectedDoctorName}</label>
      </div>
      <div>
        <label>
          Appointment Date:
          <input
            type="date"
            name="appointmentDate"
            value={appointmentDate}
            onChange={handleChangeDate}
          />
        </label>
      </div>
      <div>
        <label>
          City:
          <select name="city" value={city} onChange={handleChangeCity}>
            <option value="">Select a city</option>
            {cities.map((cityOption) => (
              <option key={cityOption} value={cityOption}>
                {cityOption}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit">Book appointment</button>
    </form>
  );
};

export default BookAppointment;
