import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import PopularLocations from './PopularLocations'

function SearchBar({ setQuery, units, setUnits, weather }) {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  return (
    <div className='flex justify-center w-full my-6 sm:px-4 text-white items-center'>
      <div className='flex w-3/4 justify-start gap-2 items-center'>
        <PopularLocations setQuery={setQuery} units weather={weather} />
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyDown={handleEnterKey}
          className='border-8 pl-2 border-transparent rounded-3xl outline-none text-black capitalize placeholder:lowercase w-full'
          placeholder='Search location...'
        />
        <UilSearch size="25"
          className="text-cyan-600 relative right-10 button-scale-on-hover"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          onClick={handleLocationClick}
          size="25"
          className="text-white relative right-6 button-scale-on-hover"
        />
      </div>
      <div className='flex w-1/4 justify-end gap-2 text-xl'>
        <button
          onClick={handleUnitsChange}
          name="metric"
          className='button-scale-on-hover'
        >
          °C
        </button>
        <p> | </p>
        <button
          onClick={handleUnitsChange}
          name="imperial"
          className='button-scale-on-hover'
        >
          °F
        </button>
      </div>
    </div>
  )
}

export default SearchBar
