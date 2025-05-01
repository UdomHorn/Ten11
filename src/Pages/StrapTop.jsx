import React from 'react'
import { useEffect, useState } from 'react'
import img1 from '../assets/Images/Women/Strap Top/ZANDO23.04.202517191.jpg'
import img2 from '../assets/Images/Women/Strap Top/ZANDO23.04.202517193.jpg'
import img3 from '../assets/Images/Women/Strap Top/ZANDO23.04.202517195.jpg'
import img4 from '../assets/Images/Women/Strap Top/ZANDO23.04.202517199.jpg'
import img5 from '../assets/Images/Women/Strap Top/ZANDO23.04.202517200.jpg'
import Size from '../assets/Components/Size'
import ColorAvailable from '../assets/Components/ColorAvailable'
import Qty from '../assets/Components/Qty'

const images = [img2, img3, img4, img5]
const StrapTop = () => {
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
          <ColorAvailable  src={img1} name="Strap Top"price="$9.59" qty="1" color="White"/>

          <Size model="Model is 161 cm tall / 43 kg weight and is wearing size XS."/>

           <Qty code="22225031260" instruction="Strap top featuring sleeves and v-neck."/>
         

        </div>


      </div>
    </div>
  )
}

export default StrapTop