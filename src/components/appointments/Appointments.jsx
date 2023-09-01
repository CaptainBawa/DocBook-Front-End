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

    <>
      <Navigation />
      <div className="Biggie">
        <h2 className="text-center font-bold text-2xl">Appointments</h2>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && (
          <div>
            Error:
            {error}
          </div>
        )}
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Patient's name</th>
              <th className="px-4 py-2">Doctor's name</th>
              <th className="px-4 py-2">Fees($)</th>
              <th className="px-4 py-2">Doctor's contact</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="border px-4 py-2">{appointment.appointment_date}</td>
                <td className="border px-4 py-2">{appointment.user.username}</td>
                <td className="border px-4 py-2">{appointment.doctor.name}</td>
                <td className="border px-4 py-2">{appointment.doctor.price}</td>
                <td className="border px-4 py-2">{appointment.doctor.email}</td>
                <td className="border px-4 py-2">
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
    </>
  );
}

export default Appointments;
