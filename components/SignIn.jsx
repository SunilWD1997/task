import React from "react";
import Link from "next/link";
import Image from "next/image";

import {RxCross2} from 'react-icons/rx';
import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';

import SignUp from "./SignUp";


const SignIn = ({setSignUp, setToggleAuth, setToogleSignIn}) => {


  return (
    <div className="w-[100%] h-screen  fixed left-0  top-0 bg-[#4b4949] z-50 opacity-90 flex items-end items:end lg:items-center justify-center">
      
      <div className=" bg-white rounded-t-[30px] lg:rounded-md  relative pb-[125px] lg:pb-5  z-40">
         
         <div>
       <p className="w-[100%] text-[green] bg-green-100 px-8 py-2 rounded-t-[10px] hidden lg:block">{`Let's learn, share & inspire each other with our passion for computer engineering. Sign up now`}</p>
     
     <div className="flex justify-between px-5 py-4" > <h2 className="text-[20px] font-bold hidden lg:block">Sign In</h2> <h2 className="text-[20px] font-bold  lg:hidden">Welcom back!</h2>  <p className='hidden lg:block'><span>{`Don't have an account yet?`}</span> <span onClick={()=>setToggleAuth(true)} className="text-[blue] cursor-pointer">Create new for free!</span> </p></div>
         
        
         <div className="flex justify-between gap-10 px-5">
           {/* left column starts here */}
          <div className="w-[95vw]  md:w-[80vw] lg:w-[50%]">
          <form action="">
 
  <div>
  <input type="" name="" id="" placeholder="Email" className="w-[100%] border rounded-t py-[6px] px-2 outline-none"/>
  </div>
  <div>
  <input type="" name="" id="" placeholder="Password" className="w-[100%] border border-t-0 rounded-b py-[6px] px-2 outline-none"/>
  </div>
 
<div className="text-center my-4">
  
  <div className=" flex items-center justify-between">
  <div className="text-[white] text-[15px]  py-[10px] rounded-[25px] font-bold bg-[blue] w-[50%] lg:w-[100%] hover:bg-[#4343f1] cursor-pointer" onClick={()=>setSignUp(false)}><Link href='/'>Sign In</Link></div>
  <span className='underline text-[#495057] font-[600] lg:hidden' onClick={()=>setToggleAuth(true)}>or, create Account </span>

     </div>
  

</div>
</form>

{/* sign up with facebook & google account starts here */}
<div className="border p-2 flex justify-center items-center gap-2 rounded cursor-pointer hover:bg-[#cacaca] duration-100" ><FaFacebook className="text-[20px] text-[blue]"/> <span>Sign up with Facebook</span></div>
<div className="border p-2 mt-2 flex justify-center items-center gap-2 rounded cursor-pointer hover:bg-[#cacaca] duration-100"><FcGoogle className="text-[20px]"/> <span>Sign up with Google</span></div>
{/* sign up with facebook & google account ends here */}

<div className=" text-center mt-3 cursor-pointer hover:text-[grey]"> <p className="">Forgot Password? </p> </div>
<div>

</div>

          </div>
{/* left column ends here */}

{/* right column starts here */}
<div className="hidden lg:flex flex-col items-center w-[50%]"> 

 <Image src='/Group.png' width='300' height='100' alt='img' className=""/>

  
</div>
{/* right column ends here */}
         </div>
         </div>
    
          
      <div onClick={()=>{setSignUp(false)}} className="absolute top-[18px] lg:top-[-35px] right-[20px] lg:right-[-10px] bg-[grey] text-[white] lg:text-[black] lg:bg-white w-[24px] h-[24px] flex items-center justify-center p-[2px] rounded-full cursor-pointer hover:bg-[grey] duration-100">
      <RxCross2 />

      </div>
      
      </div>


    </div>
  );
};

export default SignIn;
