import React from 'react'
import img1 from '../assets/Images/Men/Regular T-Shirt.jpg'
import img2 from '../assets/Images/Men/Mesh Jersey T-Shirt.jpg'
import img3 from '../assets/Images/Men/Regular Printed T-Shirt.jpg'
import img4 from '../assets/Images/Men/Regular Sleeveless Tank Top.jpg'
import img5 from '../assets/Images/Men/Long Socks (1Pairs).jpg'
import img6 from '../assets/Images/Men/Low Cut Socks(2Pairs).jpg'
import img7 from '../assets/Images/Men/Regular Fitted T-Shirt.jpg'
import img8 from '../assets/Images/Men/Regular Knitted Short.jpg'
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
          <div onClick={() => setIsClick(!isClick)} className={` cursor-pointer ${isClick ? 'text-yellow-400' : 'text-gray-400'}`}>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </div>
        <p className='text-sm'>{title}</p>
      </div>
    </div>
  )
}
const Men = () => {
  return (
    <div className='pt-[48px] font-roboto w-[80%] max-md:w-full mx-auto'>
      <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-4'>
        <div className='flex gap-4  '>
          <HightLightCard src={img1} price="$8.95" title="Regular T-Shirt" />
          <HightLightCard src={img2} price="$13.95" title="Mesh Jersey T-Shirt" />
        </div>
        <div className='flex gap-4  '>
          <HightLightCard src={img3} price="$15.95" title="Regular Printed T-Shirt" />
          <HightLightCard src={img4} price="$16.95" title="Regular Sleeveless Tank Top" />
        </div>
      </div>

      <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-4 my-20'>
        <div className='flex gap-4  '>
          <HightLightCard src={img5} price="$1.58" title="Long Socks (1Pairs)" />
          <HightLightCard src={img6} price="$2.59" title="Low Cut Socks(2Pairs)" />
        </div>
        <div className='flex gap-4  '>
          <HightLightCard src={img7} price="$12.95" title="Regular Fitted T-Shirt" />
          <HightLightCard src={img8} price="$16.59" title="Regular Knitted Short" />
        </div>
      </div>
    </div>
  )
}

export default Men