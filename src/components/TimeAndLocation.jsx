import React from 'react'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { formatToLocalTime } from '../services/weatherService'

function TimeAndLocation({ weather: {dt, timezone, name, country}}) {
  return (
    <div>
      <div className='flex flex-col-reverse sm:flex-row justify-between items-center'>

        <p className='text-white text-3xl flex items-center gap-2'>
          <UilLocationPoint size="25" className="text-white" />
          {`${name},${country}`}
        </p>
        <p className='text-xl text-white font-extralight'>{formatToLocalTime(dt, timezone)}</p>
      </div>
    </div>
  )
}

export default TimeAndLocation
