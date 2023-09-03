import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchDoctors,
  selectDoctors,
} from '../../redux/doctorsSlice';

function DoctorList() {
  const dispatch = useDispatch();
  const doctors = useSelector(selectDoctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % doctors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [doctors.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % doctors.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + doctors.length) % doctors.length,
    );
  };

  return (
    <div className="bg-gray-100 w-3/4 ">
      <div className="container  px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800">Doctor List</h2>
        <div className="mt-4 relative w-full">
          <div
            id="default-carousel"
            className="relative w-full "
            data-carousel="slide"
          >
            <div className="relative h-96  flex items-center justify-center">
              {doctors.map((doctor, index) => (
                <div
                  key={doctor.id}
                  className={`w-40 h-40 md:w-32 md:h-32 bg-white rounded-full mx-2 cursor-pointer transform ${
                    index === currentSlide ? 'scale-110' : 'scale-100'
                  } transition-transform ease-in-out duration-500`}
                  onClick={() => goToSlide(index)}
                >
                  <Link to={`/doctors/${doctor.id}`}>
                    <img
                      src={doctor.picture}
                      alt="{doctor.name}"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </Link>
                  <div className="text-sm text-center">{doctor.name}</div>
                </div>
              ))}
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              {doctors.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-lime-500' : 'bg-gray-300'
                  }`}
                  aria-current={index === currentSlide ? 'true' : 'false'}
                  aria-label={`Slide ${index + 1}`}
                  data-carousel-slide-to={index}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 left-2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white/30 dark:bg-gray-800/30 cursor-pointer group focus:outline-none"
              data-carousel-prev
              onClick={prevSlide}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-lime-500/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-white transform rotate-360"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 right-2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white/30 dark:bg-gray-800/30 cursor-pointer group focus:outline-none"
              data-carousel-next
              onClick={nextSlide}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-lime-500/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorList;
