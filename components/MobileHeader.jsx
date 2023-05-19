import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {ImPencil} from 'react-icons/im'



const MobileHeader = () => {

  
  return (
   <header className='flex items-center px-[5%] h-[60px] lg:hidden sticky top-[-3px] bg-[white] z-40 shadow'>
   <div className=' w-[100%] flex justify-between items-center'><Link href='/' className='text-[20px]  '><Image src='/Logo.png' width='120' height='100' alt='logo'/> </Link> <p className='flex gap-4 items-center'><span className='w-[17px] h-[17px] bg-[#868E96]'></span><span className='w-[17px] h-[17px] bg-[#868E96] rounded-full'></span><span><Image src='/triangle.png' width='18' height='18' alt='img'/> </span></p></div>
   <div className='z-40 w-[54px] h-[54px]  rounded-full shadow-md fixed right-4 bottom-4 bg-gradient-to-b from-[#FF5C5C] to-[#F0568A] flex justify-center items-center'><ImPencil className='text-white text-[20px]'/> </div>
   </header>
  )
}

export default MobileHeader