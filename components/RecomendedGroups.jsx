import React, { useState } from "react";
import Image from "next/image";


import { AiOutlineLike } from "react-icons/ai";



const RecomendedGroups = () => {
  const [follow, setFollow] = useState(false);
 const [activism, setActivism] = useState(false);
  const [mba, setMba] = useState(false);
  const [philosophy, setPhiloshopy] = useState(false);

  return (
    <div>
      <div className="ml-auto w-[70%]  flex items-center pb-2 ">
        <AiOutlineLike className="text-[30px]" />{" "}
        <span className="relative text-[20px] top-1 font-[500]">
          RECOMMENDED GROUPS
        </span>
      </div>

      {/* Individual groups stars here */}
      <div className="ml-auto w-[70%]  mt-5 px-2  flex flex-col items-center pb-2 gap-4 ">
       {/* Leisure group starts here */}
      <div  className="w-full flex  items-center gap-3 ">
    <Image src='/Leisure.png' width="42" height="42" alt="img" />
    <span className="font-[500]">Leisure</span>
    <button
      className={`ml-auto ${
        follow ? `bg-[#020202] text-[white]` : `bg-[#EDEEF0]`
      } px-4 py-1 rounded-[20px] hover:bg-[#020202] hover:text-[white] duration-100`}
      onClick={() => setFollow(!follow)}
    >
     
      {follow ? `Followed` : `Follow`}
    </button>
  </div>
{/* Leisure group ends here */}

  {/* Activism group starts here */}
      <div  className="w-full flex  items-center gap-3">
    <Image src='/Activism.png' width="42" height="42" alt="img" />
    <span className="font-[500]">Activism</span>
    <button
      className={`ml-auto ${
        activism ? `bg-[#020202] text-[white]` : `bg-[#EDEEF0]`
      } px-4 py-1 rounded-[20px] hover:bg-[#020202] hover:text-[white] duration-100`}
      onClick={() => setActivism(!activism)}
    >
     
      {activism ? `Followed` : `Follow`}
    </button>
  </div>
         {/* Activism group ends here */}

  {/* MBA group starts here */}
      <div  className="w-full flex  items-center gap-3">
    <Image src='/MBA.png' width="42" height="42" alt="img" />
    <span className="font-[500]">MBA</span>
    <button
      className={`ml-auto ${
        mba ? `bg-[#020202] text-[white]` : `bg-[#EDEEF0]`
      } px-4 py-1 rounded-[20px] hover:bg-[#020202] hover:text-[white] duration-100`}
      onClick={() => setMba(!mba)}
    >
     
      {mba ? `Followed` : `Follow`}
    </button>
  </div>
         {/* MBA group ends here */}

  {/* MBA group starts here */}
      <div  className="w-full flex  items-center gap-3">
    <Image src='/philosophy.png' width="42" height="42" alt="img" />
    <span className="font-[500]">Philosophy</span>
    <button
      className={`ml-auto ${
        philosophy ? `bg-[#020202] text-[white]` : `bg-[#EDEEF0]`
      } px-4 py-1 rounded-[20px] hover:bg-[#020202] hover:text-[white] duration-100`}
      onClick={() => setPhiloshopy(!philosophy)}
    >
     
      {philosophy ? `Followed` : `Follow`}
    </button>
  </div>
         {/* MBA group ends here */}
       
        
      </div>
      <div className='ml-auto w-[70%]  flex items-center pb-2 gap-2 mt-7 cursor-pointer'>  <span className="ml-auto text-[#2F6CE5] hover:text-[blue] duration-100">See more...</span>   </div>


      {/* Individual groups ends here */}
    </div>
  );
};

export default RecomendedGroups;
