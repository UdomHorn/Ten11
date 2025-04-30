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
      <div className='sm:flex gap-8'>
        <div className='w-1/2 max-sm:w-full  '>
          <div>
            <img src={images[currentIndex]}
              alt={`$currentIndex + 1`}
              className="w-full object-cover transition-all duration-3000"
            />
          </div>
        </div>
        <div className='w-1/2 max-sm:w-full'>
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
          <div className=' my-4 font-bold text-xl'>1 Color available</div>

          <div className='w-[160px]  max-sm:w-[100px] text-center '>
            <div className=' border border-black'>
              <img src={img1} alt="" />

            </div>
            <div className='text-sm my-4'>Black</div>
          </div>

          <div className='flex justify-between items-center my-4'>
            <div className='text-2xl font-bold'>Size</div>
          <div className='text-sm underline cursor-pointer'>Size Guide</div>
          </div>

         
           <div className='flex text-center gap-2 flex-wrap pb-6'>
           <div className='w-[70px] p-2 bg-gray-100 
             cursor-pointer'>XS</div>
            <div className='w-[70px] p-2 bg-gray-100 
             cursor-pointer'>S</div>
            <div className='w-[70px] p-2 bg-gray-100 
             cursor-pointer'>M</div>
            <div className='w-[70px] p-2 bg-gray-100 
             cursor-pointer'>L</div>
            <div className='w-[70px] p-2 bg-gray-100 
             cursor-pointer'>XL</div>
           </div>
           <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-black'></div>
            <div className='text-sm text-gray-700'>
            Model is 161 cm tall / 43 kg weight and is wearing size S.
            </div>
           </div>

           <div className='text-2xl font-bold py-6'>Qty</div>
         

        </div>


      </div>
    </div>
  )
}

export default Women1