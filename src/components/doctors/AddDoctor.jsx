import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { selectUsers, fetchUsers} from "../../redux/usersSlice";

function AddDoctor() {
  const dispatch = useDispatch();
  const user = useSelector(selectUsers)
//   console.log(user)
  const [doctorData, setDoctorData] = useState({
    name: "",
    specialty: "",
    picture: "",
    phone_number: "",
    price: "",
  });

  const [isDoctorCreated, setIsDoctorCreated] = useState(false);
useEffect(() =>{
    dispatch(fetchUsers())
},[dispatch])
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDoctorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createDoctor(doctorData));
    setIsDoctorCreated(true);
    setDoctorData({
      name: "",
      specialty: "",
      picture: "",
    });
  };

  return (
    <div>
      {!isDoctorCreated ? (
        <div>
          <h2>Add new Doctor</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={doctorData.name}
              onChange={handleChange}
              placeholder="Doctor's Name"
            />
            <input
              type="text"
              name="specialty"
              value={doctorData.specialty}
              onChange={handleChange}
              placeholder="Specialty"
            />
            <input
              type="text"
              name="picture"
              value={doctorData.picture}
              onChange={handleChange}
              placeholder="Doctor's picture URL"
            />
            <input
              type="number"
              phone_number="" 
            />
            <button type="submit">Create doctor</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Doctor Created Successfully</h2>
          <button onClick={() => setIsDoctorCreated(false)}>
            Create Another Doctor
          </button>
        </div>
      )}
    </div>
  );
}

export default AddDoctor;
