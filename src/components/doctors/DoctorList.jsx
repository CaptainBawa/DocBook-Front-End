import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDoctors, selectDoctors, selectDoctorsStatus, selectDoctorsError,
} from '../../redux/doctorsSlice';


function DoctorList() {
  const dispatch = useDispatch();
  const doctors = useSelector(selectDoctors);
  const status = useSelector(selectDoctorsStatus);
  const error = useSelector(selectDoctorsError);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

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
      <div className="flex ">
        {doctors.map((doctor) => (
          <div key={doctor.id}>
            <div className="bg-white p-4 shadow-md rounded-full">
              <p className="text-lg font-semibold mb-2">
                {doctor.name}
                {' '}
                -
                {doctor.specialty}
              </p>
              <img src={doctor.picture} alt={doctor.name} className="rounded-full h-9/12 w-9/12" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
