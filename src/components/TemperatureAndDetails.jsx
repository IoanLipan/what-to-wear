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
    <div className='flex flex-col items-center text-white'>
      <p className="text-3xl sm:py-6">{details}</p>

      <div className='flex flex-wrap sm:flex-row gap-4 sm:gap-0 items-center justify-around w-full'>
        <img src={iconUrlFromCode(icon)} alt="" className='w-20 sm:w-32 md:w-40' />
        <p className='text-5xl font-medium'>{`${temp.toFixed()}°`}</p>
        <div className='flex scale-150 items-center pr-4'>
          <UilTemperature className="mr-1" size={18} />
          <p className='font-light'>Real feel:</p>
          <span className='font-bold ml-1'>{`${feels_like.toFixed()}°`}</span>
        </div>
      </div>

      <div className='flex flex-wrap justify-evenly md:gap-8 lg:gap-12 '>

     <div className="show-weather-detail">
          <UilArrowUp />
          <p className='font-light'>High:</p>
          <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span>
        </div>

     <div className="show-weather-detail">
          <UilArrowDown />
          <p className='font-light'>Low:</p>
          <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span>
        </div>

     <div className="show-weather-detail">
          <UilTear className="mr-1" size={18} />
          <p className='font-light'>Humidity:</p>
          <span className='font-bold ml-1'>{`${humidity.toFixed()}%`}</span>
        </div>

     <div className="show-weather-detail">
          <UilWind className="mr-1" size={18} />
          <p className='font-light'>Wind:</p>
          <span className='font-bold ml-1'>{`${speed.toFixed()} km/h`}</span>
        </div>

     <div className="show-weather-detail">
          <UilSun />
          <p className='font-light'>Rise:</p>
          <span className='font-medium ml-1'>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </div>

     <div className="show-weather-detail">
          <UilSunset />
          <p className='font-light'>Set:</p>
          <span className='font-medium ml-1'>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </div>
      </div>
    </div>
  )
}

export default TemperatureAndDetails
