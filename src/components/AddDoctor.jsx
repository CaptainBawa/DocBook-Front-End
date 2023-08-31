import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDoctor } from '../redux/doctorsSlice';
function AddDoctor() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    picture: '',
    specialty: '',
    price: '',
    user_id: '1',
    addresses_attributes: [
      {
        country: '',
        city: '',
        state: '',
        street: '',
      },
    ],
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleAddressChange = (e, index) => {
    const { name, value } = e.target;
    const updatedAddresses = formData.addresses_attributes
      .map((address, i) => (i === index ? { ...address, [name]: value } : address));
    setFormData((prevData) => ({
      ...prevData,
      addresses_attributes: updatedAddresses,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createDoctor(formData));
      setFormData({
        name: '',
        email: '',
        phone_number: '',
        picture: '',
        specialty: '',
        price: '',
        user_id: '1',
        addresses_attributes: [
          {
            country: '',
            city: '',
            state: '',
            street: '',
          },
        ],
      });
    } catch (error) {
      throw new Error('Failed to add a doctor');
    }
  };
  return (
    <div className=" top-0 left-0 w-full h-screen flex justify-center items-center">
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/4">
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Doctor's Name"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Doctor's Email"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
        />
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleInputChange}
          placeholder="Doctor's Phone Number"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
        />
        <input
          type="text"
          name="picture"
          value={formData.picture}
          onChange={handleInputChange}
          placeholder="Doctor's Picture"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
        />
        <input
          type="text"
          name="specialty"
          value={formData.specialty}
          onChange={handleInputChange}
          placeholder="Doctor's Specialty"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Doctor's Price"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
        />
        <input
          type="text"
          name="country"
          value={formData.addresses_attributes[0].country}
          onChange={(e) => handleAddressChange(e, 0)}
          placeholder="Doctor's country"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-lime-400"

        />

        <input
          type="text"
          name="city"
          value={formData.addresses_attributes[0].city}
          onChange={(e) => handleAddressChange(e, 0)}
          placeholder="Doctor's city"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-lime-400"

        />

        <input
          type="text"
          name="state"
          value={formData.addresses_attributes[0].state}
          onChange={(e) => handleAddressChange(e, 0)}
          placeholder="Doctor's state"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-lime-400"

        />

        <input
          type="text"
          name="street"
          value={formData.addresses_attributes[0].street}
          onChange={(e) => handleAddressChange(e, 0)}
          placeholder="Doctor's street"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
        />
        <button
          type="submit"
          className="w-full bg-lime-500 text-white px-4 py-2 rounded-lg hover:bg-lime-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  
  
  
  );
}
export default AddDoctor