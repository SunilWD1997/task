import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";

import {RxCross2} from 'react-icons/rx';
import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';

import SignIn from "./SignIn";

const SignUp = ({setSignUp}) => {

  const[toggleAuth, setToggleAuth]= useState(true)

  const toogleSignUp = () =>{
    // setSignUp(false);
    setToggleAuth(false)
  }

  return (

   <div> {toggleAuth?<div className=" w-[100%] h-screen  fixed left-0 top-0 bg-[#4b4949] z-50 opacity-90 flex items-end lg:items-center justify-center">
      
   <div className=" bg-white rounded-t-[30px] lg:rounded-md opacity-100 relative pb-5 z-40">
      
      <div>
    <p className="hidden  w-[100%] lg:block text-[green] bg-green-100 px-8 py-2 rounded-t-[10px]">{`Let's learn, share & inspire each other with our passion for computer engineering. Sign up now`}</p>
  
  <div className="flex justify-between px-5 py-4" > <h2 className="text-[20px] font-bold">Create Account</h2> <p className='hidden lg:block'><span>Already have an account?</span> <span onClick={()=> toogleSignUp()} className="text-[blue] hover:text-[#a4a4fa] cursor-pointer">Sign In</span> </p></div>
      
     
      <div className="flex justify-between  px-5">
        {/* left column starts here */}
       <div className=" w-[95vw]  md:w-[80vw] lg:w-[50%]">
       <form action="">
<div className="flex justify-between w-[100%]">
 <input type="text" name="" id="" placeholder="First Name" className="border  py-[6px] px-2 outline-none rounded-tl w-[50%]"/>
 <input type="text" name="" id="" placeholder="Last Name" className="border border-l-0 py-[6px] px-2 outline-none rounded-tr w-[50%]"/>
</div>
<div>
<input type="" name="" id="" placeholder="Email" className="w-[100%] border border-y-0 py-[6px] px-2 outline-none"/>
</div>
<div>
<input type="" name="" id="" placeholder="Password" className="w-[100%] border  py-[6px] px-2 outline-none"/>
</div>
<div>
<input type="" name="" id="" placeholder="Confirm Password" className="w-[100%] border border-t-0 rounded-b py-[6px] px-2 outline-none"/>
</div>
<div className="text-center my-4">
  <div className='flex justify-between items-center'><button className="text-[white] text-[15px]  py-[10px] rounded-[25px] font-bold bg-[blue] w-[50%] lg:w-[100%] hover:bg-[#4343f1]">Create Account</button>
   <span className='underline text-[#495057] font-[600] lg:hidden' onClick={()=> toogleSignUp()}>or, SignIn </span>
</div>
</div>
</form>

{/* sign up with facebook & google account starts here */}
<div className="border p-2 flex justify-center items-center gap-2 rounded cursor-pointer hover:bg-[#cacaca] duration-100"><FaFacebook className="text-[20px] text-[blue]"/> <span>Sign up with Facebook</span></div>
<div className="border p-2 mt-2 flex justify-center items-center gap-2 rounded cursor-pointer hover:bg-[#cacaca] duration-100"><FcGoogle className="text-[20px]"/> <span>Sign up with Google</span></div>
{/* sign up with facebook & google account ends here */}

<p className='w-[300px] mx-auto mt-5 text-center text-[#212529] lg:hidden'>By signing up, you agree to our Terms & conditions, Privacy policy </p>
<div>

</div>
       </div>
{/* left column ends here */}

{/* right column starts here */}
<div className="hidden  lg:flex flex-col items-center w-[50%]"> 

<Image src='/Group.png' width='300' height='100' alt='img' className=""/>

<p className="text-[11px]">By signing up, You agree to our Terms & conditions, Privacy policy</p>
</div>
{/* right column ends here */}
      </div>
      </div>
 
       
   <div onClick={()=>{setSignUp(false)}} className="absolute top-[18px] lg:top-[-35px] right-[20px] lg:right-[-10px] bg-[grey] text-[white] lg:text-[grey] lg:bg-white w-[24px] h-[24px] flex items-center justify-center p-[2px] rounded-full cursor-pointer hover:bg-[grey] duration-100">
   <RxCross2 />

   </div>
   
   </div>


 </div>: <SignIn setSignUp={setSignUp} setToggleAuth={setToggleAuth} toggleAuth={toggleAuth}/>} </div>
   
    
  );
};

export default SignUp;
