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

const Appointments = () => {
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
<div className="flex flex-col md:flex-row">
  <Navigation />

  <div className="w-full md:w-5/6 flex flex-col justify-center">
    <h2 className="text-center font-bold text-2xl">Appointments</h2>
    {status === 'loading' && <div>Loading...</div>}
    {status === 'failed' && (
      <div>
        Error:
        {error}
      </div>
    )}
    <div className="overflow-x-auto">
      <table className="table-auto w-full md:w-3/4 sm:w-11/12">
        <thead>
          <tr>
            <th className="text-sm sm:text-base">Date</th>
            <th className="text-sm sm:text-base">Patient's name</th>
            <th className="text-sm sm:text-base">Doctor's name</th>
            <th className="text-sm sm:text-base">Fees($)</th>
            <th className="text-sm sm:text-base">Doctor's contact</th>
            <th className="text-sm sm:text-base">Appointments Location</th>
            <th className="text-sm sm:text-base">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="border py-2 text-sm sm:text-base">{appointment.appointment_date}</td>
              <td className="border py-2 text-sm sm:text-base">{appointment.user.username}</td>
              <td className="border py-2 text-sm sm:text-base">{appointment.doctor.name}</td>
              <td className="border py-2 text-sm sm:text-base">{appointment.doctor.price}</td>
              <td className="border py-2 text-sm sm:text-base">{appointment.doctor.email}</td>
              <td className="border py-2 text-sm sm:text-base">{appointment.city}</td>
              <td className="border py-2">
                <button
                  type="button"
                  onClick={() => handleDeleteAppointment(appointment.id)}
                  className="bg-red-500 hover:bg-green-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-full cancel-app"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
};

export default Appointments;
