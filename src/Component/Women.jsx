import React from 'react'
import img1 from '../assets/Images/Women/Tube Top Floral Printed.jpg'
import img2 from '../assets/Images/Women/Strap Top.jpg'
import img3 from '../assets/Images/Women/Loose Fit Denim Shorts.jpg'
import img4 from '../assets/Images/Women/Mini Zip-Skirt.jpg'
import img5 from '../assets/Images/Women/Mini Pleats Skirt.jpg'
import img6 from '../assets/Images/Women/Sheer Mesh Top.jpg'
import img7 from '../assets/Images/Women/Regular Fitted Long Sleeves T-Shirt.jpg'
import img8 from '../assets/Images/Women/Strapless Top With Mesh.jpg'
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
    <div className='pt-[48px] font-roboto  w-[80%] max-md:w-full mx-auto'>
          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-4'>
            <div className='flex gap-4  '>
              <HightLightCard src={img1} price="$7.95" title="Tube Top Floral Printed" />
              <HightLightCard src={img2} price="$9.59" title="Strap Top" />
            </div>
            <div className='flex gap-4  '>
              <HightLightCard src={img3} price="$14.95" title="Loose Fit Denim Shorts" />
              <HightLightCard src={img4} price="$16.59" title="Mini Zip-Skirt" />
            </div>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-4 my-20'>
            <div className='flex gap-4  '>
              <HightLightCard src={img5} price="$16.59" title="Mini Pleats Skirt" />
              <HightLightCard src={img6} price="$12.59" title="Sheer Mesh Top" />
            </div>
            <div className='flex gap-4  '>
              <HightLightCard src={img7} price="$15.59" title="Regular Fitted Long Sleeves T-Shirt" />
              <HightLightCard src={img8} price="$13.95" title="Strapless Top With Mesh" />
            </div>
          </div>
        </div>
  )
}

export default Women