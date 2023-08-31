import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDoctors, selectDoctors, selectDoctorsStatus, selectDoctorsError,
  deleteDoctor
} from '../redux/doctorsSlice';

const DeleteDoctor = () => {
  const dispatch = useDispatch();
  const doctors = useSelector(selectDoctors);
  const status = useSelector(selectDoctorsStatus);
  const error = useSelector(selectDoctorsError);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const handleDelete = (doctorId) => {
    // Implement your delete logic here using doctorId
    dispatch(deleteDoctor(doctorId));
  };

  return (
    <div className="w-10/12 flex flex-col mx-auto">
      <h2 className="text-center font-bold text-2xl">Doctor List</h2>
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
            <th className="px-4 py-2">Doctor Name</th>
            <th className="px-4 py-2">Actions </th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td className="border px-4 py-2">{doctor.name}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(doctor.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteDoctor;
