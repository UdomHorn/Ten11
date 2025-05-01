import React from 'react'
import { useEffect, useState } from 'react'
import img1 from '../assets/Images/Men/WideLegDenim Jean/AFTERNOON15504.jpg'
import img2 from '../assets/Images/Men/WideLegDenim Jean/AFTERNOON15502.jpg'
import img3 from '../assets/Images/Men/WideLegDenim Jean/AFTERNOON15511.jpg'
import img4 from '../assets/Images/Men/WideLegDenim Jean/AFTERNOON15512.jpg'
import img5 from '../assets/Images/Men/WideLegDenim Jean/AFTERNOON15513.jpg'
import Size from '../assets/Components/Size'
import ColorAvailable from '../assets/Components/ColorAvailable'
import Qty from '../assets/Components/Qty'
import AddtoBag from '../assets/Components/AddtoBag'

const images = [img2, img3, img4, img5]

const WideLegDenimJean = () => {
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
            <ColorAvailable  src={img1} name="Wide Leg Denim Jean"price="$21.59" qty="1" color="Blue"/>
  
            <Size model="Model is 176 cm tall / 66 kg weight and is wearing size 30."/>
  
             <Qty code="21224121123" instruction="Wide leg denim jean featuring side pockets with front grahpic design printed and front button with zipper-up fastening."/>
           <AddtoBag/>
          </div>
  
  
        </div>
      </div>
    )
}

export default WideLegDenimJean