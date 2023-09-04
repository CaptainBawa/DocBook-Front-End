import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

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

  // checking if doctor exist
  if (!doctor) {
    return <div className="hidden">Doctor not found</div>;
  }

  return (

    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left ">
            <img
              src={doctor.picture}
              alt={doctor.name}
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mx-auto md:mx-0"
            />
            <h2 className="text-3xl font-semibold text-gray-800 mt-6">
              {doctor.name}
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              {doctor.specialty}
            </p>
            <div className="text-gray-800">
              <p className="mb-2">
                <strong>Email:</strong>
                {' '}
                {doctor.email}
              </p>
              <p className="mb-2">
                <strong>Phone:</strong>
                {' '}
                {doctor.phone_number}
              </p>
              <p className="mb-2">
                <strong>Address:</strong>
                {' '}
                {doctor.addresses[0].street}
                ,
                {' '}
                {doctor.addresses[0].city}
                ,
                {' '}
                {doctor.addresses[0].state}
                ,
                {' '}
                {doctor.addresses[0].country}
              </p>
              <p className="mb-2">
                <strong>Price:</strong>
                {' '}
                $
                {doctor.price}
              </p>
            </div>
            <button
              type="button"
              onClick={handleAppointment}
              className="mt-4  bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Reserve Appointment
            </button>
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 ml-4 rounded-md transition duration-300 ease-in-out"
            >
              <NavLink to="/home">&larr; Go Back</NavLink>
            </button>

          </div>

        </div>

      </div>
    </div>

  );
}

export default DoctorDetails;
