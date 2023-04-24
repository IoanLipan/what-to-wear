import React, { useState } from 'react';
import { UilFavorite, UilTimes } from '@iconscout/react-unicons'

function PopularLocations() {

  const [showPopular, setShowPopular] = useState(false);

  const openPopular = () => {
    setShowPopular(true);
  }

  const closePopular = () => {
    setShowPopular(false);
  }

  const cities = [
    {
      id: 1,
      title: 'Paris'
    },
    {
      id: 2,
      title: 'London'
    },
    {
      id: 3,
      title: 'New York'
    },
    {
      id: 4,
      title: 'Sydney'
    },
  ]
  return <div className="text-white flex justify-start items-center">
    { showPopular
      ? <div className='flex z-10 h-12 w-11/12 absolute items-center justify-around bg-gradient-to-r from-cyan-700 to-blue-700
              transition duration-300 ease-in-out transform border-transparent rounded-xl'>
          {cities.map((city) => (
            <button key={city.id} className='text-white text-lg font-medium mr-1'>
              {city.title}
            </button>))
          }
          <UilTimes onClick={closePopular} className='button-scale-on-hover' />
        </div>
      : <UilFavorite onClick={openPopular} className='button-scale-on-hover' />
    }
  </div>
}

export default PopularLocations
