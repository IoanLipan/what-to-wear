import React from 'react'
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons"

function TemperatureAndDetails() {
  return (
    <div>
      <div className='flex justify-center items-center py-6 text-xl text-cyan-300'>
        <p className='text-2xl'>Cloudy</p>
      </div>

      <div className='flex items-center justify-between text-white py-3'>
        <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-20' />
        <p className='text-4xl'>34°</p>

        <div className='flex flex-col space-y-2 text-white'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature className="mr-1" size={18} />
            Real feel:
            <span className='font-bold ml-1'>30°</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear className="mr-1" size={18} />
            Humidity:
            <span className='font-bold ml-1'>65%</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind className="mr-1" size={18} />
            Wind:
            <span className='font-bold ml-1'>3 km/h</span>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-around space-x-2 text-white text-sm py-3'>
        <div className='flex flex-col sm:flex-row items-center'>
          <UilSun />
          <p className='font-light'>Rise:</p>
          <span className='font-medium ml-1'>6:30 AM</span>
        </div>
        <div className='flex flex-col sm:flex-row items-center'>
          <UilSunset />
          <p className='font-light'>Set:</p>
          <span className='font-medium ml-1'>7:30 PM</span>
        </div>
        <div className='flex flex-col sm:flex-row items-center'>
          <UilArrowUp />
          <p className='font-light'>High:</p>
          <span className='font-medium ml-1'>33°</span>
        </div>
        <div className='flex flex-col sm:flex-row items-center'>
          <UilArrowDown />
          <p className='font-light'>Low:</p>
          <span className='font-medium ml-1'>24°</span>
        </div>
      </div>
    </div>
  )
}

export default TemperatureAndDetails
