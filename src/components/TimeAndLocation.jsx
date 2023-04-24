import React from 'react'
import { UilLocationPoint } from '@iconscout/react-unicons'

function TimeAndLocation() {
  return (
    <div>
      <div className='flex justify-between items-center'>

        <p className='text-white text-3xl flex items-center gap-2'>
          <UilLocationPoint size="25" className="text-white" />
          Bucharest
        </p>
        <p className='text-xl text-white font-extralight'>22:22, 22.12.2023</p>
      </div>
    </div>
  )
}

export default TimeAndLocation
