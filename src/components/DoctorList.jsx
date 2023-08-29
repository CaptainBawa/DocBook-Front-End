import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors, selectDoctors, selectDoctorsStatus, selectDoctorsError } from '../redux/doctorsSlice';

function DoctorList() {
  const dispatch = useDispatch();
  const doctors = useSelector(selectDoctors);
  const status = useSelector(selectDoctorsStatus);
  const error = useSelector(selectDoctorsError);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Doctor List</h2>
      {doctors.length === 0 ? (
        <div>No doctors available.</div>
      ) : (
      <div>
        {doctors.map((doctor) => (
            <div key={doctor.id}>
                <p>{doctor.name} - {doctor.specialty}</p>
                <img src={doctor.picture} alt={doctor.name} />
            </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default DoctorList;