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

      <div className="table_wrapper w-full md:w-5/6 flex flex-col justify-center">
        <h2 className="text-center font-bold text-2xl">Appointments</h2>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && (
        <div>
          Error:
          {error}
        </div>
        )}
        <div className="overflow-x-auto">
          <table className="table-auto w-full sm:w-11/12 md:w-3/4 lg:w-4/5">
            <thead>
              <tr>
                <th className="text-xs sm:text-base md:text-sm lg:text-base">Date</th>
                <th className="text-xs sm:text-base md:text-sm lg:text-base">Patient's name</th>
                <th className="text-xs sm:text-base md:text-sm lg:text-base">Doctor's name</th>
                <th className="text-xs sm:text-base md:text-sm lg:text-base">Fees($)</th>
                <th className="text-xs sm:text-base md:text-sm lg:text-base">Doctor's contact</th>
                <th className="text-xs sm:text-base md:text-sm lg:text-base">Appointments Location</th>
                <th className="text-xs sm:text-base md:text-sm lg:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="border py-2 text-xs sm:text-base md:text-sm lg:text-base">{appointment.appointment_date}</td>
                  <td className="border py-2 text-xs sm:text-base md:text-sm lg:text-base">{appointment.user.username}</td>
                  <td className="border py-2 text-xs sm:text-base md:text-sm lg:text-base">{appointment.doctor.name}</td>
                  <td className="border py-2 text-xs sm:text-base md:text-sm lg:text-base">{appointment.doctor.price}</td>
                  <td className="border py-2 text-xs sm:text-base md:text-sm lg:text-base">{appointment.doctor.email}</td>
                  <td className="border py-2 text-xs sm:text-base md:text-sm lg:text-base">{appointment.city}</td>
                  <td className="">
                    <button
                      type="button"
                      onClick={() => handleDeleteAppointment(appointment.id)}
                      className="bg-red-500 hover:bg-green-700 text-white font-bold py-1 px-2 sm:py-1 sm:px-1  md:py-2 md:px-2 lg:py-2 lg:px-4 rounded-full cancel-app"
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
