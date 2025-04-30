import React from 'react'
import { useEffect, useState } from 'react'
import img1 from '../assets/Images/Women/TartanMaxiSkirt/ZD__5324.jpg'
import img2 from '../assets/Images/Women/TartanMaxiSkirt/ZD__5325.jpg'
import img3 from '../assets/Images/Women/TartanMaxiSkirt/ZD__5329.jpg'
import img4 from '../assets/Images/Women/TartanMaxiSkirt/ZD__5337.jpg'
import img5 from '../assets/Images/Women/TartanMaxiSkirt/ZD__5324.jpg'
import Size from '../assets/Components/Size'
import ColorAvailable from '../assets/Components/ColorAvailable'
import Qty from '../assets/Components/Qty'
const images = [img2, img3, img4, img5]
const TartanMaxiSkirt = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='  p-2.5 pt-[48px] font-roboto w-[80%] max-md:w-full mx-auto text-lg '>
      <div className='sm:flex gap-8 my-6'>
        <div className='w-1/2 max-sm:w-full  '>
          <div>
            <img src={images[currentIndex]}
              alt={`$currentIndex + 1`}
              className="w-full object-cover transition-all duration-3000"
            />
          </div>
        </div>
        <div className='w-1/2 max-sm:w-full'>
          <ColorAvailable  src={img1} name="Tartan Maxi Skirt"price="$18.59" qty="1" color="Karo yellow"/>

          <Size model="Model is 165 cm tall / 45kg weight and is wearing size XS."/>
          
           <Qty code="22224121174" instruction="Tartan maxi skirt featuring side pockets and elastic waistband."/>
         
         <div className='w-full py-3 mt-6 mb-20 bg-black text-white text-center font-bold hover:opacity-90  duration-300 ease-in-out'>Add to bag</div>

        </div>


      </div>
    </div>
  )
}

export default TartanMaxiSkirt