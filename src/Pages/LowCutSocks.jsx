import React from 'react'
import { useEffect, useState } from 'react'
import img1 from '../assets/Images/Men/Low Cut Socks(2Pairs)/Pomelo studio11438 copy.jpg'
import img2 from '../assets/Images/Men/Low Cut Socks(2Pairs)/Pomelo studio11438 copy1.jpg'
import img3 from '../assets/Images/Men/Low Cut Socks(2Pairs)/Pomelo studio11438.jpg'
// import img4 from '../assets/Images/Men/Loose Fit T-Shirts With Printed/Pomelo studio11592.jpg'
// import img5 from '../assets/Images/Men/Loose Fit T-Shirts With Printed/Pomelo studio11604.jpg'
import Size from '../assets/Components/Size'
import ColorAvailable from '../assets/Components/ColorAvailable'
import Qty from '../assets/Components/Qty'
import AddtoBag from '../assets/Components/AddtoBag'

const images = [img2, img3, img1]
const LowCutSocks = () => {
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
            <ColorAvailable  src={img1} name="Low Cut Socks(2Pairs)"price="$2.59" qty="1" color="White"/>
  
            <Size />
  
            <Qty code="2122407749" />
          
            <AddtoBag/>
  
          </div>
  
  
        </div>
      </div>
    )
}

export default LowCutSocks