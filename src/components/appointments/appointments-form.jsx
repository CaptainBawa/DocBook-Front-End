import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../../redux/appointmentsSlice";
import { selectDoctors, fetchDoctors } from "../../redux/doctorsSlice";

const BookAppointment = () => {
  const doctors = useSelector(selectDoctors);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [city, setCity] = useState("");
  const [doctor, SetDoctor] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, doctors]);
  console.log(doctors);

  const cities = ["New York", "Los Angeles", "Chicago", "Houston"];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDate = new Date(appointmentDate).toISOString().split("T")[0];

    const appointmentData = {
      appointment_date: formattedDate,
      city: city,
      doctor: doctor,
      user_id: userId,
      doctor_id: "",
    };

    dispatch(createAppointment(appointmentData));
  };

  const handleChangeDate = (e) => {
    setAppointmentDate(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };
  const handleChangeDoctor = (e) => {
    SetDoctor(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <select name="doctor" value={doctor} onChange={handleChangeDoctor}>
          <option value="">Select doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>
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
