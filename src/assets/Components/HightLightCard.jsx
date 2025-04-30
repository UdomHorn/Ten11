import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

// I want to change color to favorite icon by default gray color and click change color to yellow 
const HightLightCard = ({ page,src, price, title }) => {
  const [isClick, setIsClick] = useState(0)
  return (
    <div>
      <Link to={page}>
      <img src={src} alt="" />
      </Link>
      <div className='mt-3 p-1'>
        <div className='flex justify-between '>
          <div className='font-bold text-base '>
            {price}
          </div>
          <div onClick={() => setIsClick(!isClick)} className={` cursor-pointer ${isClick ? 'text-yellow-400' : 'text-gray-400'}`}>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </div>
        <p className='text-sm'>{title}</p>
      </div>
    </div>
  )
}


export default HightLightCard