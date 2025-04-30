import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
const ColorAvailable = ({src,name,price,qty,color}) => {
  const [isClick, setIsClick] = useState(0)
  return (
    <div>
<div className='flex justify-between items-center'>
            <div>
              <p>{name}</p>
            </div>
            <div className='flex gap-4'>
              <div onClick={() => setIsClick(!isClick)} className={ `cursor-pointer ${isClick ? 'text-yellow-400' : 'text-gray-400'}`}>
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <div className='cursor-pointer'><FontAwesomeIcon icon={faUpRightFromSquare} /></div>
            </div>
          </div>
          <div className='text-gray-500 font-bold'>{price}</div>
            <div className=' my-4 font-bold text-xl'>{qty} Color available</div>

          <div className='w-[160px]  max-sm:w-[100px] text-center '>
            <div className=' border border-black'>
              <img src={src} alt="" />

            </div>
            <div className='text-sm my-4'>{color}</div>
          </div>
</div>

  )
}

export default ColorAvailable