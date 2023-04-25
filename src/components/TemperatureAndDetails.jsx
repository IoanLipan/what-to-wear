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
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService'

function TemperatureAndDetails({ weather: {
  details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
} }) {
  return (
    <div>
      <div className='flex justify-center items-center py-6 text-xl text-cyan-300'>
        <p className='text-2xl'>{details}</p>
      </div>

      <div className='flex items-center justify-between text-white py-3'>
        <img src={iconUrlFromCode(icon)} alt="" className='w-20' />
        <p className='text-4xl'>{`${temp.toFixed()}°`}</p>

        <div className='flex flex-col space-y-2 text-white'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature className="mr-1" size={18} />
            Real feel:
            <span className='font-bold ml-1'>{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear className="mr-1" size={18} />
            Humidity:
            <span className='font-bold ml-1'>{`${humidity.toFixed()}%`}</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind className="mr-1" size={18} />
            Wind:
            <span className='font-bold ml-1'>{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-around space-x-2 text-white text-sm py-3'>
        <div className='flex flex-col sm:flex-row items-center'>
          <UilSun />
          <p className='font-light'>Rise:</p>
          <span className='font-medium ml-1'>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </div>
        <div className='flex flex-col sm:flex-row items-center'>
          <UilSunset />
          <p className='font-light'>Set:</p>
          <span className='font-medium ml-1'>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </div>
        <div className='flex flex-col sm:flex-row items-center'>
          <UilArrowUp />
          <p className='font-light'>High:</p>
          <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span>
        </div>
        <div className='flex flex-col sm:flex-row items-center'>
          <UilArrowDown />
          <p className='font-light'>Low:</p>
          <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span>
        </div>
      </div>
    </div>
  )
}

export default TemperatureAndDetails
