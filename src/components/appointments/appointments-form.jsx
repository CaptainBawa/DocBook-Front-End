import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAppointment } from '../../redux/appointmentsSlice';
import { selectUsers, fetchUsers } from '../../redux/usersSlice';
import { selectDoctors, fetchDoctors } from '../../redux/doctorsSlice';

function BookAppointment() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const doctors = useSelector(selectDoctors);

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers());
    }
    if (!doctors.length) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, users, doctors]);

  const loggedInUser = users.find((user) => user.username);
  const userId = loggedInUser ? loggedInUser.id : '';

  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];

  const [formData, setFormData] = useState({
    appointment_date: '',
    doctor_id: '',
    user_id: '',
    city: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(createAppointment({ ...formData, user_id: userId }));
      setFormData({
        appointment_date: '',
        doctor_id: '',
        user_id: '',
        city: '',
      });
      window.location.href = '/my-appointments';
    } catch (error) {
      throw new Error('Failed to book appointment');
    }
  };

  return (
    <div className="w-full bg-lime-500">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <select
          name="doctor_id"
          value={formData.doctor_id}
          onChange={handleInputChange}
        >
          <option value="">Select a Doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="appointment_date"
          value={formData.appointment_date}
          onChange={handleInputChange}
          placeholder="Select Appointment Date"
        />

        <select
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        >
          <option value="">Select a City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookAppointment;
