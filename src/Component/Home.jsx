import React from 'react'
import img1 from '../assets/Images/TEN11 - Puppy Love Collection App Banner.jpg'
import img2 from '../assets/Images/8J6A0448.jpg'
import img3 from '../assets/Images/8J6A0460.jpg'
const Home = () => {
  return (
    <div>
      <div><img src={img1} alt="" /></div>

      <div className='w-[75%] h-full bg-red-200 flex justify-center items-center m-auto mt-4 gap-7'>
        <div><img src={img2} alt="" /></div>
        <div><img src={img3} alt="" /></div>
      </div>
    </div>
  )
}

export default Home