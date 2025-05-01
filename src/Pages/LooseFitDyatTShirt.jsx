import React from 'react'
import { useEffect, useState } from 'react'
import img1 from '../assets/Images/Men/LooseFitDyat T-Shirt/DSC07491.jpg'
import img2 from '../assets/Images/Men/LooseFitDyat T-Shirt/DSC07532.jpg'
import img3 from '../assets/Images/Men/LooseFitDyat T-Shirt/DSC07540.jpg'
import img4 from '../assets/Images/Men/LooseFitDyat T-Shirt/TAKK0034.jpg'
import img5 from '../assets/Images/Men/LooseFitDyat T-Shirt/ZANDO10APR202513258.jpg'
import Size from '../assets/Components/Size'
import ColorAvailable from '../assets/Components/ColorAvailable'
import Qty from '../assets/Components/Qty'

const images = [img2, img3, img4, img5]
const LooseFitDyatTShirt = () => {
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
            <ColorAvailable  src={img1} name="Loose Fit Dyat T-Shirt"price="$15.95" qty="1" color="Dark Gray"/>
  
            <Size model="Model is 176 cm tall / 66 kg weight and is wearing size M."/>
  
             <Qty code="2122411988" instruction="Loose fit dyat t-shirt featuring short sleeves with front graphic design printed and round neck."/>
           
  
          </div>
  
  
        </div>
      </div>
    )
}

export default LooseFitDyatTShirt