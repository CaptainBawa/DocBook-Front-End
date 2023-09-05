import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchAppointments,
  selectAppointments,
  selectAppointmentsStatus,
  selectAppointmentsError,
  deleteAppointment,
} from '../../redux/appointmentsSlice';
import Navigation from '../Navigation';

function Appointments() {
  const dispatch = useDispatch();
  const appointments = useSelector(selectAppointments);
  const status = useSelector(selectAppointmentsStatus);
  const error = useSelector(selectAppointmentsError);

  const handleDeleteAppointment = (appointmentId) => {
    dispatch(deleteAppointment(appointmentId));
  };

  useEffect(() => {
    document.body.classList.add('appointments-body-background');

    dispatch(fetchAppointments());

    return () => {
      document.body.classList.remove('appointments-body-background');
    };
  }, [dispatch]);
  return (

    <div className="flex">
      <Navigation />
      <div className="w-5/6 flex justify-center flex-col">
        <h2 className="text-center font-bold text-2xl">Appointments</h2>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && (
          <div>
            Error:
            {error}
          </div>
        )}
        <table className="table-auto w-3/6 md:w-full items-center">
          <thead>
            <tr>
              <th className="">Date</th>
              <th className="">Patient's name</th>
              <th className="">Doctor's name</th>
              <th className="">Fees($)</th>
              <th className="">Doctor's contact</th>
              <th className="">Appointments Location</th>
              <th className="">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="border py-2">{appointment.appointment_date}</td>
                <td className="border py-2">{appointment.user.username}</td>
                <td className="border py-2">{appointment.doctor.name}</td>
                <td className="border py-2">{appointment.doctor.price}</td>
                <td className="border py-2">{appointment.doctor.email}</td>
                <td className="border py-2">{appointment.city}</td>
                <td className="border py-2">
                  <button
                    type="button"
                    onClick={() => handleDeleteAppointment(appointment.id)}
                    className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full cancel-app"
                  >
                    Cancel Appointment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Appointments;
