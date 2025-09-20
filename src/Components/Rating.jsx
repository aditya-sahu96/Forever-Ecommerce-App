import React from 'react'
import { FaStar } from "react-icons/fa";

const Rating = ({rate, totalRate}) => {
  return (
    <div className='h-[15px] w-[75px] flex justify-between items-center'>
        {
            Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className={i<rate ? "text-yellow-400": "text-gray-400" }/>
            ))
        }
        <p className='text-xs'>({totalRate})</p>
    </div>
  )
}

export default Rating