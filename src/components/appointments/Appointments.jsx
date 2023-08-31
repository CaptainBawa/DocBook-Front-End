import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchAppointments,
  selectAppointments,
  selectAppointmentsStatus,
  selectAppointmentsError,
} from '../../redux/appointmentsSlice';
import Navigation from '../Navigation';

function Appointments() {
  const dispatch = useDispatch();
  const appointments = useSelector(selectAppointments);
  const status = useSelector(selectAppointmentsStatus);
  const error = useSelector(selectAppointmentsError);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <div className="w-10/12 flex flex-col mx-auto">
        <h2 className="text-center font-bold text-2xl">Appointments</h2>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && (
        <div>
          Error:
          {error}
        </div>
        )}
        <div className="flex">
          {appointments.map((appointment) => (
            <div key={appointment.id}>
              {/* Wrap each doctor card in a Link */}
              <div className="bg-white p-4 shadow-md rounded-full">
                <p className="text-lg font-semibold mb-2">
                  {appointment.appointment_date}
                </p>
                <p className="text-lg font-semibold mb-2">
                  {appointment.user.username}
                </p>
                <p className="text-lg font-semibold mb-2">
                  {appointment.doctor.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Appointments;
