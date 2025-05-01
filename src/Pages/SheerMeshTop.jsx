import React from 'react'
import { useEffect, useState } from 'react'
import img1 from '../assets/Images/Women/Sheer Mesh Top/ZANDO2204202516533.jpg'
import img2 from '../assets/Images/Women/Sheer Mesh Top/ZANDO2204202516534.jpg'
import img3 from '../assets/Images/Women/Sheer Mesh Top/ZANDO2204202516536.jpg'
import img4 from '../assets/Images/Women/Sheer Mesh Top/ZANDO2204202516545.jpg'
import img5 from '../assets/Images/Women/Sheer Mesh Top/ZANDO2204202516549.jpg'
import Size from '../assets/Components/Size'
import ColorAvailable from '../assets/Components/ColorAvailable'
import Qty from '../assets/Components/Qty'
import AddtoBag from '../assets/Components/AddtoBag'

const images = [img2, img3, img4, img5]
const SheerMeshTop = () => {
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
          <ColorAvailable  src={img1} name="Sheer Mesh Top"price="$12.59" qty="1" color="Milk White"/>

          <Size model="Model is 161 cm tall / 43 kg weight and is wearing size XS."/>

           <Qty code="22225031313" instruction="Sheer mesh top featuring long sleeves with ruffle and round neck."/>

           <AddtoBag/>
        </div>


      </div>
    </div>
  )
}

export default SheerMeshTop