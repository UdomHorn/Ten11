import React from 'react'
import { faBookmark, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import img1 from '../assets/Images/Women/Women1/ZANDO01.04.202511281.jpg'
import img2 from '../assets/Images/Women/Women1/ZANDO01.04.202511282.jpg'
import img3 from '../assets/Images/Women/Women1/ZANDO01.04.202511284.jpg'
import img4 from '../assets/Images/Women/Women1/ZANDO01.04.202511292.jpg'
import img5 from '../assets/Images/Women/Women1/ZANDO01.04.202511293.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const images = [img2, img3, img4, img5]
const Women1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='  p-2.5 pt-[48px] font-roboto w-[80%] max-md:w-full mx-auto text-lg '>
      <div className='flex gap-8'>
        <div className='w-1/2  '>
          <div>
            <img src={images[currentIndex]}
              alt={`$currentIndex + 1`}
              className="w-full object-cover transition-all duration-3000"
            />
          </div>
        </div>
        <div className='w-1/2'>
          <div className='flex justify-between items-center'>
            <div>
              <p>Regular Fitted double T-Shirt</p>
            </div>
            <div className='flex gap-4'>
              <div className='text-gray-500 cursor-pointer'>
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <div className='cursor-pointer'><FontAwesomeIcon icon={faUpRightFromSquare} /></div>
            </div>
          </div>
          $12.59
          <div className=' mt-4 font-bold text-xl'>1 Color available</div>

          <div className='w-[160px] text-center'>
            <div className=' border border-black'>
              <img src={img1} alt="" />

            </div>
            <div>Black</div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Women1