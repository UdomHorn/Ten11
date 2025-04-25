import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faMagnifyingGlass,faBell,faGear,faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/Images/logo.png'
const Nav = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className='fixed  w-full top-0 left-0 z-10'>
      <div className='w-full overflow-hidden
       bg-white flex justify-center items-center   '>

      <div className='flex justify-between  w-[80%] items-center p-2.5 max-md:w-full '>
        <div className='flex gap-2 items-center text-2xl ' >
          <div className='cursor-pointer' onClick={() => setShowLogin(true)}>
          <FontAwesomeIcon icon={faBars}/>
          </div>
        <div className="flex items-center justify-center bg-red-500">
      <AnimatePresence>
        {showLogin && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLogin(false)}
            />

            {/* Login Modal */}
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 w-full max-w-md bg-white rounded-sm shadow-2xl p-8"
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: '-50%', x: '-50%', scale: 1 }}
              exit={{ opacity: 0, y: -100, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <form className='font-roboto'>
              <div className=" text-2xl font-bold ">Shop Preference</div>
              <p className='text-sm mb-2'>Select a category you prefer. You can change this later in the Settings.</p>
              
              <input type="radio" className='cursor-pointer ' />
              <label htmlFor="" className='text-base cursor-pointer '>Women</label><br />
             
              <input type="radio" className='cursor-pointer ' />
              <label htmlFor="" className='text-base cursor-pointer '>Men</label><br />
              
              <button className='w-full bg-black text-white mt-4'>OK</button>
              <button
                onClick={() => setShowLogin(false)}
                className="absolute top-3 right-4 text-black text-3xl"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
        </div>

        <div className='w-[120px] hidden max-md:block ' ><img src={logo} alt="" /></div></div>

        <div className='w-[250px] max-md:hidden max-xl:w-[150px]' ><img src={logo} alt="" /></div>

        <div className='   flex text-xl gap-5'>
          <div className=''><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
          <div><FontAwesomeIcon icon={faBell} /></div>
          <div><FontAwesomeIcon icon={faGear} /></div>
          <div className='font-roboto'>Login</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Nav