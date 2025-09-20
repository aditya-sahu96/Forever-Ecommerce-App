import React from 'react'
import { useNavigate } from 'react-router-dom'

const BreadCrumpsCart = ({title}) => {
  const navigate = useNavigate()
  return (
    <div className='max-w-4xl mx-auto my-10'>
      <h1 className='text-xl text-gray-700 font-semibold '><span className='cursor-pointer' onClick={()=>navigate('/')}>Home</span> / <span className='cursor-pointer' onClick={()=>navigate('/cart')}>Cart</span></h1>
    </div>
  )
}

export default BreadCrumpsCart