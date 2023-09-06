import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import {
  fetchDoctors, selectDoctors, selectDoctorsStatus, selectDoctorsError,
  deleteDoctor,
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
    dispatch(deleteDoctor(doctorId));
  };

  return (
    <div className="w-full md:w-10/12 mx-auto">
      <button
        type="button"
      >
        <NavLink
          to="/home"
          activeClassName="active"
          className=" p-2 rounded-full"
        >
          <FontAwesomeIcon icon={faCircleArrowLeft} className="w-10 h-10 pt-4 text-lime-500 hover:bg-slate-300" />
        </NavLink>
      </button>
      <h2 className="text-center font-bold text-3xl mt-6 mb-8 text-black">Doctor List</h2>
      {status === 'loading' && (
      <div className="text-center text-gray-600 animate-pulse">
        Loading...
      </div>
      )}
      {status === 'failed' && (
      <div className="text-center text-red-500">
        Error:
        {' '}
        {error}
      </div>
      )}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-lime-500 text-white">
              <th className="px-6 py-3 text-left">Doctor Name</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4 text-gray-800">{doctor.name}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
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
    </div>

  );
};

export default DeleteDoctor;
