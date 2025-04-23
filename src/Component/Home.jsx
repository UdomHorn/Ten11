import React from 'react'
import img1 from '../assets/Images/TEN11 - Puppy Love Collection App Banner.jpg'
import img2 from '../assets/Images/8J6A0448.jpg'
import img3 from '../assets/Images/8J6A0460.jpg'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return (
    <div className='pt-[48px] font-roboto'>
      <div>
        <div><img src={img1} alt="" /></div>

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
            <img src={img2} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
                12.59$
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Regular Fitted do...</p>
            </div>
          </div>
          <div>
            <img src={img2} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
                12.59$
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Regular Fitted do...</p>
            </div>
          </div>
        </div>
        <div className='flex gap-4 '>
        <div>
            <img src={img2} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
                12.59$
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Regular Fitted do...</p>
            </div>
          </div>
          <div>
            <img src={img2} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
                12.59$
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Regular Fitted do...</p>
            </div>
          </div>
        </div>
        </div>

        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-4'>
        <div className='flex gap-4  '>
          <div>
            <img src={img2} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
                12.59$
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Regular Fitted do...</p>
            </div>
          </div>
          <div>
            <img src={img2} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
                12.59$
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Regular Fitted do...</p>
            </div>
          </div>
        </div>
        <div className='flex gap-4 '>
        <div>
            <img src={img2} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
                12.59$
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Regular Fitted do...</p>
            </div>
          </div>
          <div>
            <img src={img2} alt="" />
            <div className='mt-3 p-1'>
            <div className='flex justify-between '>
              <div className='font-bold text-base '>
                12.59$
              </div>
              <div className='text-gray-400  '>
              <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <p className='text-sm'>Regular Fitted do...</p>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Home