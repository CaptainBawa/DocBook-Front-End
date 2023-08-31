// src/components/doctors/DoctorDetails.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation';
import {
  selectDoctors,
  selectDoctorsStatus,
  selectDoctorsError,
} from '../../redux/doctorsSlice';
import {
  selectAppointmentsStatus,
  selectAppointmentsError,
  createAppointment,
} from '../../redux/appointmentsSlice';

function DoctorDetails() {
  const { doctorId } = useParams();
  const dispatch = useDispatch();

  const doctors = useSelector(selectDoctors);
  const doctorsStatus = useSelector(selectDoctorsStatus);
  const doctorsError = useSelector(selectDoctorsError);

  const appointmentsStatus = useSelector(selectAppointmentsStatus);
  const appointmentsError = useSelector(selectAppointmentsError);

  const doctor = doctors.find((doc) => doc.id === parseInt(doctorId, 10));

  const handleAppointment = () => {
    dispatch(createAppointment({ doctor_id: doctor.id }));
  };

  if (doctorsStatus === 'loading' || appointmentsStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (doctorsStatus === 'failed' || appointmentsStatus === 'failed') {
    return (
      <div>
        Error:
        {doctorsError || appointmentsError}
      </div>
    );
  }

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <>
      <Navigation />
      <div className="w-10/12 mx-auto mt-8 object-position: right;">
        <div className="bg-white p-8 shadow-md rounded-md">
          <div className="flex items-center">
            <img
              src={doctor.picture}
              alt={doctor.name}
              className="rounded-full h-16 w-16"
            />
            <h2 className="text-lg font-semibold ml-4">{doctor.name}</h2>
          </div>
          <p className="mt-2 text-gray-600">{doctor.specialty}</p>
          <p className="mt-2">
            Email:
            {doctor.email}
          </p>
          <p className="mt-2">
            Phone:
            {doctor.phone_number}
          </p>
          <p className="mt-2">
            Adress:
            {doctor.addresses[0].street}
          </p>
          <p className="mt-2">
            City:
            {doctor.addresses[0].country}
          </p>
          <p className="mt-2">
            Price: $
            {doctor.price}
          </p>
          <button
            type="button"
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            onClick={handleAppointment}
          >
            Reserve Appointment
          </button>
        </div>
      </div>
    </>
  );
}

export default DoctorDetails;
