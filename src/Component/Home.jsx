import React from 'react'
import img1 from '../assets/Images/TEN11 - Puppy Love Collection App Banner.jpg'
import img12 from '../assets/Images/TEN11 - Grand Prix App banner.jpg'
import img2 from '../assets/Images/8J6A0448.jpg'
import img3 from '../assets/Images/8J6A0460.jpg'
import img4 from '../assets/Images/ZANDO01.04.202511292-cr-450x672.jpg'
import img5 from '../assets/Images/ZD__5329-cr-450x672.jpg'
import img6 from '../assets/Images/ZANDO9936-cr-450x672.jpg'
import img7 from '../assets/Images/ZANDO270320259290-cr-450x672.jpg'
import img8 from '../assets/Images/IMG_0162 copy-cr-450x672.jpg'
import img9 from '../assets/Images/DSC07491-cr-450x672.jpg'
import img10 from '../assets/Images/Pomelo studio11594-cr-450x672.jpg'
import img11 from '../assets/Images/IMG_0162 copy-cr-450x672(1).jpg'
import { useEffect, useState } from 'react'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { div, h2 } from 'framer-motion/client'

const Collection = ({ src, title }) => {
  return (
    <div>
      <img src={src} alt="" />
      <div className='flex justify-center items-center text-center mt-3'>
        <div className=' w-[94%] font-roboto font-bold text-base p-3  border border-gray-500 '>{title}</div>
      </div>
    </div>
  )

}

const HightLightCard = ({ src, price, title }) => {
  const [isClick, setisClick] = useState(0)
  return (
    <div>
      <img src={src} alt="" />
      <div className='mt-3 p-1'>
        <div className='flex justify-between '>
          <div className='font-bold text-base '>
            {price}
          </div>
          <div onClick={() => setisClick(!isClick)} className={`${isClick ? 'text-yellow-400' : 'text-gray-400'}`}>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </div>
        <p className='text-sm'>{title}</p>
      </div>
    </div>
  )
}

const images = [img1, img12]

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div className='pt-[48px] font-roboto'>

      {/* <div>
        <div> 
          <img src={images[currentIndex]}
           alt={`$currentIndex + 1`} 
           className="w-full object-cover transition-all duration-3000"
           />
        </div>

        <div className='w-[75%] max-md:w-[94%] h-full  flex justify-center items-center m-auto mt-4 gap-7'>
        <div>
          <img src={img2} alt="" />
          <div className='flex justify-center items-center text-center mt-3'>
          <div className=' w-[94%] font-roboto font-bold text-base p-3  border border-gray-500 '>Women Collection</div>
          </div>
        </div>
        <div>
          <img src={img3} alt="" />
          <div className='flex justify-center items-center text-center mt-3'>
          <div className=' w-[94%]  font-roboto font-bold text-base p-3  border border-gray-500 '>Men Collection</div>
          </div>
        </div>
        </div>
        <div className='w-full text-3xl font-bold mt-10 px-1.5 py-2.5 '>
          This Week's Hilights
        </div>

        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-4'>
        <div className='flex gap-4  '>
          <div>
            <img src={img4} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
                $12.59
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Regular Fitted double T-Shirt</p>
            </div>
          </div>
          <div>
            <img src={img5} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
              $18.59
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Tartan Maxi Skirt</p>
            </div>
          </div>
        </div>
        <div className='flex gap-4 '>
        <div>
            <img src={img6} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
              $20.95
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Kniited Fitted Cardigan</p>
            </div>
          </div>
          <div>
            <img src={img7} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
              $17.59
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Gathering Midi Dress</p>
            </div>
          </div>
        </div>
        </div>

        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-4 mt-20'>
        <div className='flex gap-4  '>
          <div>
            <img src={img8} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
              $21.59
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Wide Leg Denim Jean</p>
            </div>
          </div>
          <div>
            <img src={img9} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
              $15.95
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Loose Fit Dyat T-Shirt</p>
            </div>
          </div>
        </div>
        <div className='flex gap-4 '>
        <div>
            <img src={img10} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
              $18.95
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Loose Fit T-Shirts With Printed</p>
            </div>
          </div>
          <div>
            <img src={img11} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
              $21.59
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Wide Leg Loose Fit Jean.</p>
            </div>
          </div>
        </div>
        </div>

      </div> */}

      <div>
        <img src={images[currentIndex]}
          alt={`$currentIndex + 1`}
          className="w-full object-cover transition-all duration-3000"
        />
      </div>
      <div className='w-[75%] max-md:w-[94%] h-full  flex justify-center items-center m-auto mt-4 gap-7'>
        <Collection src={img2} title="Women Collection" />
        <Collection src={img3} title="Men Collection" />
      </div>

      <div className='w-full text-3xl font-bold mt-10 px-1.5 py-2.5 '>
        This Week's Hilights
      </div>

      <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-4'>
        <div className='flex gap-4  '>
          <HightLightCard src={img4} price="$12.59" title="Regular Fitted double T-Shirt" />
          <HightLightCard src={img5} price="$18.59" title="Tartan Maxi Skirt" />
        </div>
        <div className='flex gap-4  '>
          <HightLightCard src={img6} price="$20.95" title="Kniited Fitted Cardigan" />
          <HightLightCard src={img7} price="$17.59" title="Gathering Midi Dress" />
        </div>
      </div>

      <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-4 mt-20'>
        <div className='flex gap-4  '>
          <HightLightCard src={img8} price="$21.59" title="Wide Leg Denim Jean" />
          <HightLightCard src={img9} price="$15.95" title="Loose Fit Dyat T-Shirt" />
        </div>
        <div className='flex gap-4  '>
          <HightLightCard src={img10} price="$18.95" title="Loose Fit T-Shirts With Printed" />
          <HightLightCard src={img11} price="$21.59" title="Wide Leg Loose Fit Jean." />
        </div>
      </div>
    </div>
  )
}

export default Home