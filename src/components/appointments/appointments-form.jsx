import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAppointment } from '../../redux/appointmentsSlice';
import { selectUsers, fetchUsers } from '../../redux/usersSlice';
import { selectDoctors, fetchDoctors } from '../../redux/doctorsSlice';
import BookAppointmentNavigation from './BookAppointmentNavigation';

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
    <div className="min-h-screen bg-lime-400 flex justify-center items-center flex-col">
      <h2 className="font-bold text-2xl underline mb-4">Book Appointment</h2>
      <BookAppointmentNavigation />
      <form onSubmit={handleSubmit} className="px-3 flex flex-col w-full space-y-6 max-w-xl">
        <select
          name="doctor_id"
          value={formData.doctor_id}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
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
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
        />

        <select
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
        >
          <option value="">Select a City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button type="submit" className="w-full bg-lime-500 text-white px-4 py-2 rounded-lg hover:bg-lime-600 transition duration-300">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookAppointment;
