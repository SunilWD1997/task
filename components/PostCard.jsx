import React, { useState } from "react";
import Image from "next/image";

import { TbDots } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";

import ThreeDotPopUp from "./ThreeDotPopUp";

const PostCard = () => {
  const [threeDot, setThreeDot] = useState(false);

  return (
    <div className=" flex flex-col gap-5 pb-3 my-4 shadow-lg lg:shadow-0 lg:border  rounded">
      {/* Post Image starts here */}
      <Image
        src="/post_1.png"
        width="1000"
        height="100"
        alt="post"
        className=""
      />
      {/* Post Image ends here */}
      {/* Post type title Image starts here */}
      <div className="px-4">
        <Image src="/article.png" width="100" height="100" alt="" />
      </div>
      {/* Post type title Image ends here */}

      {/* Post title starts here */}
      <div className="text-[black] flex justify-between px-4">
        <h3 className="w-[70%] text-[22px] font-[600px]">
          What if famous brands had regular fonts? Meet RegulaBrands!
        </h3>

{/* three dot starts here */}
        <div className="relative">
        <div
          onClick={() => {
            setThreeDot(!threeDot);
          }}
          className={`flex justify-center items-center w-[40px] h-[30px] ${
            threeDot ? `bg-[grey]` : ``
          } rounded hover:bg-[grey] `}
        >
          <TbDots className="text-[20px] cursor-pointer" />
        </div>
         {threeDot && <ThreeDotPopUp/>}

        </div>
        {/* three dot starts here */}
      </div>
      {/* Post title ends here */}

      {/* post short description starts  */}
      <p className="text-[19px] text-[#5C5C5C] px-4">
        I’ve worked in UX for the better part of a decade. From now on, I plan
        to rei…
      </p>
      {/* post short description ends  */}

      {/* posted of profile details starts here */}
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <Image src="/profile_1.png" width="60" height="60" alt="img" />
          <div>
          <h4 className=" text-[20px] font-[600px]">Sarthak Kamra</h4>
          <span className=" lg:hidden">1.4K views</span>
          </div>
          
        </div>

        <div className="flex items-center gap-2">
          <AiOutlineEye className=" hidden text-[20px] lg:block" />
          <span className="hidden lg:block">1.4K Views</span>
          <div className="bg-[#EDEEF0] w-[90px] lg:w-[50px] h-[40px] flex  justify-center items-center gap-3 ml-[20px] rounded cursor-pointer hover:bg-[grey]">
            <BsShareFill  />
            <span className="lg:hidden">Share</span>
          </div>
        </div>
      </div>
      {/* posted of profile details ends here */}
    </div>
  );
};

export default PostCard;
