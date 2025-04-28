import React from 'react'
import img4 from '../assets/Images/ZANDO01.04.202511292-cr-450x672.jpg'
import img5 from '../assets/Images/ZD__5329-cr-450x672.jpg'
import img6 from '../assets/Images/ZANDO9936-cr-450x672.jpg'
import img7 from '../assets/Images/ZANDO270320259290-cr-450x672.jpg'
import { useEffect, useState } from 'react'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// I want to change color to favorite icon by default gray color and click change color to yellow 
const HightLightCard = ({ src, price, title }) => {
  const [isClick, setIsClick] = useState(0)
  return (
    <div>
      <img src={src} alt="" />
      <div className='mt-3 p-1'>
        <div className='flex justify-between '>
          <div className='font-bold text-base '>
            {price}
          </div>
          <div onClick={()=> setIsClick(!isClick)} className={` cursor-pointer ${isClick ? 'text-yellow-400':'text-gray-400'}`}>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </div>
        <p className='text-sm'>{title}</p>
      </div>
    </div>
  )
}
const Women = () => {
  return (
    <div className='pt-[48px] font-roboto'>
          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-4'>
            <div className='flex gap-4  '>
              <HightLightCard src={img4} price="$12.59" title="Regular Fitted double T-Shirt" />
              <HightLightCard src={img5} price="$18.59" title="Tartan Maxi Skirt" />
            </div>
            <div className='flex gap-4  '>
              <HightLightCard src={img6} price="$20.95" title="Kniited Fitted Cardigan" />
              <HightLightCard src={img7} price="$17.59" title="Gathering Midi Dress" />
            </div>
          </div>
        </div>
  )
}

export default Women