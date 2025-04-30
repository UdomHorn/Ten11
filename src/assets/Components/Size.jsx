import { div } from 'framer-motion/client'
import React from 'react'

const Size = ({model}) => {
  return (
    <div>
      <div className='flex justify-between items-center my-4'>
            <div className='text-2xl font-bold'>Size</div>
          <div className='text-sm underline cursor-pointer'>Size Guide</div>
          </div>

         
           <div className='flex text-center gap-2 flex-wrap pb-6'>
           <div className='w-[70px] p-2 bg-gray-100 
             cursor-pointer'>XS</div>
            <div className='w-[70px] p-2 bg-gray-100 
             cursor-pointer'>S</div>
            <div className='w-[70px] p-2 bg-gray-100 
             cursor-pointer'>M</div>
            <div className='w-[70px] p-2 bg-gray-100 
             cursor-pointer'>L</div>
            <div className='w-[70px] p-2 bg-gray-100 
             cursor-pointer'>XL</div>
           </div>
           
           <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-black'></div>
            <div className='text-sm text-gray-700'>
            {model}
            </div>
           </div>

    </div>
  )
}

export default Size