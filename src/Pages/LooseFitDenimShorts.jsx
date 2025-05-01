import React from 'react'
import { useEffect, useState } from 'react'
import img1 from '../assets/Images/Women/Loose Fit Denim Shorts/ZANDO23.04.202517139.jpg'
import img2 from '../assets/Images/Women/Loose Fit Denim Shorts/ZANDO23.04.202517144.jpg'
import img3 from '../assets/Images/Women/Loose Fit Denim Shorts/ZANDO23.04.202517145.jpg'
import img4 from '../assets/Images/Women/Loose Fit Denim Shorts/ZANDO23.04.202517149.jpg'
import img5 from '../assets/Images/Women/Loose Fit Denim Shorts/ZANDO23.04.202517150.jpg'
import Size from '../assets/Components/Size'
import ColorAvailable from '../assets/Components/ColorAvailable'
import Qty from '../assets/Components/Qty'

const images = [img2, img3, img4, img5]
const LooseFitDenimShorts = () => {
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
        <div className='w-1/2 max-sm:w-full my-6 '>
          <div>
            <img src={images[currentIndex]}
              alt={`$currentIndex + 1`}
              className="w-full object-cover transition-all duration-3000"
            />
          </div>
        </div>
        <div className='w-1/2 max-sm:w-full'>
          <ColorAvailable  src={img1} name="Loose Fit Denim Shorts"price="$14.95" qty="1" color="Blue"/>

          <Size model="Model is 161 cm tall / 43 kg weight and is wearing size 26."/>

           <Qty code="22225031271
" instruction="Loose fit denim short featuring side pockets with front button and zipper-up fastening."/>
         

        </div>


      </div>
    </div>
  )
}

export default LooseFitDenimShorts