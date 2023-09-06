import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import Navigation from '../Navigation';
import {
  selectDoctors,
  selectDoctorsStatus,
  selectDoctorsError,
} from '../../redux/doctorsSlice';
import {
  selectAppointmentsStatus,
  selectAppointmentsError,
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
      <div>
        <div>
          <div>
            <img
              src={doctor.picture}
              alt={doctor.name}
              className="doc-img"
            />
          </div>
          <div className="detials-div">
            <h2 className="lead">{doctor.name}</h2>
            <p className="pop1">
              {' '}
              -
              {doctor.specialty}
            </p>
            <p className="pop  popa">
              <strong>Email: &nbsp;  </strong>
              {doctor.email}
            </p>
            <p className="pop">
              <strong>Phone: &nbsp;  </strong>
              {doctor.phone_number}
            </p>
            <p className="pop popb">
              <strong>Address: &nbsp;  </strong>
              {doctor.addresses[0].street}
            </p>
            <p className="pop">
              <strong>City: &nbsp;  </strong>
              {doctor.addresses[0].city}
            </p>
            <p className="pop popb">
              <strong>State: &nbsp;  </strong>
              {doctor.addresses[0].state}
            </p>
            <p className="pop">
              <strong>Country: &nbsp;  </strong>
              {doctor.addresses[0].country}
            </p>
            <p className="pop popc">
              <strong>Price: &nbsp;  </strong>
              {' '}
              $
              {doctor.price}
            </p>
          </div>
          <button
            type="button"
            className="pop-btn mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
          >
            <NavLink to="/appointments-form">Reserve Appointment</NavLink>
          </button>
          <button
            type="button"
            className="popi-btn mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
          >
            <NavLink to="/home">&larr;</NavLink>
          </button>

        </div>
      </div>
    </>
  );
}

export default DoctorDetails;
