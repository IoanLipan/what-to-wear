import React, { useState } from 'react';
import { UilFavorite, UilTimes } from '@iconscout/react-unicons'

function PopularLocations({setQuery, weather, units}) {
  const [showPopular, setShowPopular] = useState(false);

  const openPopular = () => { setShowPopular(true); }

  const closePopular = () => { setShowPopular(false); }

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

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = (units === "metric") ? 20 : 68;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  }

  return <div className="text-white flex justify-start items-center">
    { showPopular
      ? <div className={`flex z-10 h-14 w-11/12 absolute items-center justify-around
              bg-gradient-to-l ${formatBackground}
              transition duration-300 ease-in-out transform border-transparent rounded-xl`}>
          {cities.map((city) => (
            <button onClick={() => setQuery({q: city.title})} key={city.id} className='text-white text-lg font-medium mr-1'>
              {city.title}
            </button>))
          }
          <UilTimes size="30" onClick={closePopular} className='button-scale-on-hover' />
        </div>
      : <UilFavorite size="30" onClick={openPopular} className='button-scale-on-hover' />
    }
  </div>
}

export default PopularLocations
