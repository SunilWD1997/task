import React from 'react'

const ThreeDotPopUp = () => {
  return (
    <div className='absolute top-8 right-0 shadow-lg flex flex-col gap-2 w-[180px] px-[12px] py-[8px] border rounded z-10 bg-[white]'>
        <p className='hover:text-[grey] cursor-pointer' >Edit</p>
        <p className='hover:text-[grey] cursor-pointer'>Report</p>
        <p className='hover:text-[grey] cursor-pointer'>Option 3</p>
    </div>
  )
}

export default ThreeDotPopUp