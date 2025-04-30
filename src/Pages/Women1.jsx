import React from 'react'
import { faBookmark, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import img1 from '../assets/Images/Women/Women1/ZANDO01.04.202511281.jpg'
import img2 from '../assets/Images/Women/Women1/ZANDO01.04.202511282.jpg'
import img3 from '../assets/Images/Women/Women1/ZANDO01.04.202511284.jpg'
import img4 from '../assets/Images/Women/Women1/ZANDO01.04.202511292.jpg'
import img5 from '../assets/Images/Women/Women1/ZANDO01.04.202511293.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Size from '../assets/Components/Size'
import ColorAvailable from '../assets/Components/ColorAvailable'
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
          <ColorAvailable  src={img1} name="Regular Fitted double T-Shirt"price="$12.59" qty="1"/>

          <Size model="Model is 161 cm tall / 43 kg weight and is wearing size S."/>

           <div className='text-2xl font-bold py-6'>Qty</div>
         

        </div>


      </div>
    </div>
  )
}

export default Women1