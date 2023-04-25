import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import PopularLocations from './PopularLocations'

function SearchBar({setQuery}) {
  return (
    <div className='flex justify-center w-full my-6 sm:px-4 text-white items-center'>
      <div className='flex w-3/4 justify-start gap-2 items-center'>
        <PopularLocations setQuery={setQuery} />
        <input className='border-8 pl-2 border-transparent rounded-3xl outline-none text-black capitalize placeholder:lowercase w-full' placeholder='Search location...'></input>
        <UilSearch size="25" className="text-cyan-600 relative right-10 button-scale-on-hover" />
        <UilLocationPoint size="25" className="text-white relative right-6 button-scale-on-hover" />
      </div>
      <div className='flex w-1/4 justify-end gap-2 text-xl'>
        <button name="metric" className='button-scale-on-hover'>°C</button>
        <p> | </p>
        <button name="imperial" className='button-scale-on-hover'>°F</button>
      </div>
    </div>
  )
}

export default SearchBar
