import React, {useState} from 'react'
import Image from 'next/image'

import SignUp from './SignUp';

import {MdArrowBack} from 'react-icons/md'

const Hero = () =>{
const [signup, setSignUp] = useState(false);

  return (
    <div className='relative  bg-[#7b868f]'>
      <Image src='/hero.jpg'width='1400' height='100' alt='hero' className='w-[100%] h-[50vh] object-cover mix-blend-multiply '/>
        
         <div className='lg:hidden w-[100%] absolute top-[30px] flex justify-between items-center px-[5%]'> <MdArrowBack className='text-[white] text-[35px] cursor-pointer hover:text-[grey]'/>  <button className='text-[20px] text-[white] border px-4 py-2 rounded cursor-pointer hover:bg-[#a1a1a1]' onClick={()=>{setSignUp(true)}}>Join Group</button></div>  

      <div className='text-[white] absolute top-[70%] md:top-[68%] left-[5%] lg:left-[16%]'>
        <h2 className='text-[25px] lg:text-[42px] font-[700]'>Computer Engineering</h2>
        <p  className='text-[18px] font-[400]'>142,765 Computer Engineers follow this</p>
      </div>
      {signup && <SignUp setSignUp={setSignUp}/>}
    </div>
  )
}

export default Hero