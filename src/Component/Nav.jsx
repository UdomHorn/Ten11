import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faMagnifyingGlass,faBell,faGear} from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/Images/logo.png'
const Nav = () => {
  return (
    <div className=''>
      <div className='flex justify-center items-center   '>

      <div className='flex justify-between  w-[80%] items-center p-2.5 max-md:w-full '>
        <div className='flex gap-2 items-center text-2xl ' ><FontAwesomeIcon icon={faBars}/>
        <div className='w-[150px] hidden max-md:block ' ><img src={logo} alt="" /></div></div>

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