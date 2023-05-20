import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import RecomendedGroups from "@/components/RecomendedGroups";
import SignUp from "@/components/SignUp";

import { postData } from "@/components/PostData";


import { FaCaretDown } from "react-icons/fa";
import { MdGroupAdd, MdOutlineLocationOn, MdOutlineExitToApp } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import {RxCross2} from 'react-icons/rx';

import { useState } from "react";



export default function Home() {

  const [toggleJoin, setToggleJoin] = useState(true);
  const [signup, setSignUp] = useState(false);
  const [location, setLocation]=useState(false);


 


  return (
    <div>
      <Header toggleJoin={toggleJoin} setToggleJoin={setToggleJoin}/>
      <MobileHeader />
      <Hero />




{/* all posts for mobile menu ends here */}

<div className='sticky top-[72px] bg-[white] z-30'> 
<div className="hidden  max-w-[1300px] mx-auto px-[25px] border-b text-grey  lg:pt-8  mb-6 lg:flex justify-between pb-2  ">



{/* all posts navmenu bar starts here */}
<ul className="flex gap-7">
  <li className='font-medium hover:font-bold hover:underline cursor-pointer'>{`All Posts(32)`}</li>
  <li className='font-medium hover:font-bold hover:underline cursor-pointer'>Article</li>
  <li className='font-medium hover:font-bold hover:underline cursor-pointer'>Event</li>
  <li className='font-medium hover:font-bold hover:underline cursor-pointer'>Education</li>
  <li className='font-medium hover:font-bold hover:underline cursor-pointer'>Job</li>
</ul>
{/* all posts navmenu bar ends here */}

{/* write a post and join button starts here */}
<div className="flex items-center gap-4">
  <button className="flex items-center gap-3 bg-[#EDEEF0] px-4 py-2 rounded hover:bg-[grey] duration-100">
    <span>Write a post</span> <FaCaretDown />
  </button>

  
  <div onClick={()=>{ setToggleJoin(!toggleJoin)}}> {toggleJoin? <button className="text-[white] bg-[#2F6CE5] flex items-center gap-2 px-4 py-2 rounded hover:bg-[blue] duration-100" onClick={()=>setSignUp(true)}>
    <MdGroupAdd className="text-[24px]" /> <span>Join Group</span>
  </button>:<button onClick={()=>alert('Make sure that you want to leave')} className="text-[#6A6A6B] ] flex items-center gap-2 px-4 py-[6px] rounded border-[3px] duration-100" >
    <MdOutlineExitToApp className="text-[24px]" /> <span >Leave Group</span>
  </button>} </div>
  

</div>

{/* write a post and join button ends here */}
</div>
</div>




      {/* all categoy posts starts here */}
      <div className="max-w-[1300px] mx-auto">

        {/* all posts for mobile menu starts here */}
   <div className="flex justify-between px-4 mt-5 lg:hidden"> 
   
   <span className="text-[19px] font-[700]">{`Posts(368)`}</span>

  <div className="text-[18px] text-[#212529]  font-[500] bg-[#F1F3F5] px-3 py-2 rounded"> <span>Filter:</span> <select name="" className="w-[100px] bg-[#F1F3F5]">
    <option value="all" className="w-[120px]">All</option>
    <option value="article">Article</option>
    <option value="event">Event</option>
    <option value="education">Education</option>
    <option value="jobs">Jobs</option>
    </select></div>
   </div>
{/* all posts for mobile menu ends here */}
    
        <div className=" mt-4 flex justify-between gap-4">
          {/* left column starts here */}
          <div className="max-w-[100%] lg:max-w-[60%]">

            {postData?.map((posts)=> {
              return <PostCard key={posts.id} posts={posts}/>
              })}
           
           
          </div>
          {/* left column ends here */}

          {/* right columns starts here */}
          <div className=" hidden   w-[40%] lg:flex flex-col gap-10 mt-10 bg-[white] ">
           <div className='ml-auto w-[70%] border-b flex items-center pb-2 gap-2 sticky top-[200px] bg-[white] '> <MdOutlineLocationOn className='text-[25px]'/> <span><input type='text' id='location' placeholder={location? `Enter Your Location`: `Noida, India`} className='outline-none'/></span> <label for='location' className='ml-auto cursor-pointer' onClick={()=>setLocation(!location)}>{location? <RxCross2/>:<HiPencil className=' text-[25px]' />}</label></div>
           <div className='ml-auto w-[70%]  flex items-start pb-2 gap-2 sticky top-[250px] bg-[white] '><AiOutlineExclamationCircle className='text-[30px]'/>  <span className='relative top-1'>Your location will help us serve better and extend a personalised experience.</span>
          </div>
          
          {toggleJoin? '':<RecomendedGroups  />}
          
            </div>
          {/* right columns ends here */}
        </div>
      </div>

      {signup && <SignUp setSignUp={setSignUp}/>}
      {/* all categoy posts ends here */}
      {/* {toogleSignIn?<SignIn setToogleSignIn={setToogleSignIn} setSignUp={setSignUp} setToggleAuth={setToggleAuth} toggleAuth={toggleAuth}/> : ''}   */}
    </div>
  );
}
