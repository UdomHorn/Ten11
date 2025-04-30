import React from 'react'
import { useState } from 'react'
const Qty = ({code,instruction}) => {
  const [qty, setQty] = useState(1)

  const decrease =()=>{
    if(qty > 1){
      setQty(prev => prev - 1)
    }
  }
  return (
    <div className='' >
      <div  className='text-2xl font-bold  py-6'>Qty</div>
      <div className='flex text-center gap-2 flex-wrap pb-6'>
        <div className='w-[70px] p-2 bg-gray-100 
                     cursor-pointer' onClick={decrease} >-
        </div>

        <div className='w-[70px] p-2 bg-gray-100 
                     '>{qty}
        </div>

        <div className='w-[70px] p-2 bg-gray-100 
                     cursor-pointer' onClick={()=>setQty(qty+1)}>+
        </div>
                    
      </div>

      <div className='text-base font-bold'>{code}</div>
      <div className='text-base text-gray-600'>{instruction}</div>
    </div>
  )
}

export default Qty