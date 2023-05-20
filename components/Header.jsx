import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import { MdSearch } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

import SignUp from "./SignUp";


const Header = ({toggleJoin}) => {
  const [signup, setSignUp] = useState(false);
 

  

  const callAfunc = () => {
    setSignUp(!signup);

   //  setTimeout(() => {
   //    setSignUp(false);
   //  }, 1000);
  };

  return (
    <header className="hidden w-[100%] max-w-[2000px] shadow mx-auto px-24 h-[72px] font-[500] lg:flex justify-between items-center sticky top-0 bg-[white] z-40">
      {/* Main Logo Starts here */}
      <Link href="/">
        <Image src="/Logo.png" width="160" height="50" alt="logo" />
      </Link>
      {/* Main Logo ends here */}

      {/* Search_bar sterts here */}
      <div className="bg-[#F2F2F2] text-[#5C5C5C] flex items-center gap-3 rounded-[50px] py-2 px-4 pr-[30px]">
        <MdSearch className="text-[20px]" />{" "}
        <input
          type="text"
          className="w-[280px] outline-none bg-[#F2F2F2] "
          placeholder="Search for your favorite groups in ATG"
        />
      </div>
      {/* Search_bar ends here */}

      {/* create account or SignUp&LogIn starts here */}
      <div>{toggleJoin? <div className="flex gap-1  bg-white">
        <p>Create account.</p>
        <div className="flex items-center gap-1 cursor-pointer hover:text-[blue]">
          <span
            className="text-[#2F6CE5]"
            onClick={() => {callAfunc()}}
          >{`it's free`}</span>
          <FaCaretDown />
        </div>
        {signup && <SignUp setSignUp={setSignUp}/>}
        </div>: <div className="flex gap-2  bg-white">
        <Image src='/sridhar.png' width='40' height='40' alt='img'/>
        <div className="flex items-center gap-1 cursor-pointer hover:text-[blue]">
          <span
            className="text-[18px] "
            onClick={() => {callAfunc()}}
          >Sidharth Goyal</span>
          <FaCaretDown  className='ml-1'/>
        </div>
        {/* {signup && <SignUp setSignUp={setSignUp}/>} */}
        </div>}</div>

      



      
      {/* create account or SignUp&LogIn ends here */}
    </header>
  );
};

export default Header;
