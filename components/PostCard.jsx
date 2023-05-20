import React, { useState } from "react";
import Image from "next/image";

import { TbDots } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";




import ThreeDotPopUp from "./ThreeDotPopUp";

const PostCard = ({posts}) => {
  const [threeDot, setThreeDot] = useState(false);

  return (
    <div className=" flex flex-col gap-5 pb-3 my-4 shadow-lg lg:shadow-0 lg:border  rounded">
      {/* Post Image starts here */}
     {posts?.postImg && <Image
        src={posts?.postImg}
        width="1000"
        height="100"
        alt="post"
        className=""
      />} 
      {/* Post Image ends here */}
      {/* Post type title Image starts here */}
      <div className="px-[25px] pt-2">
        <Image src={posts?.postTypeImg} width="100" height="50" alt="img"  className="  "/>
      </div>
      {/* Post type title Image ends here */}

      {/* Post title starts here */}
      <div className="text-[black] flex justify-between px-[25px]">
        <h3 className="w-[70%] text-[22px] font-[600px]">
          {posts?.postHeading}
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
      <p className="text-[19px] text-[#5C5C5C] px-[25px]">
        {posts?.para}
      </p>
      {/* post short description ends  */}

{/* posts date and address starts here */}

{posts?.postTimeLine && <div className="flex items-center px-[25px] gap-[50px] font-[600]"><div className="flex items-center gap-2"><span className="text-[20px]"> <Image src={posts?.postTimeLine?.logo1} width='20' height='20' alt='img'/> </span> <span>{posts?.postTimeLine?.desc1}</span></div> <div className="flex items-center gap-1"><span><Image src={posts?.postTimeLine?.logo2} width='15' height='20' alt='img'/></span>  <span className="text-[20px]">{posts?.postTimeLine?.desc2}</span></div>  </div>}
{/* posts date and address ends here */}


{/* posts button Visit starts */}
{posts?.buttomData && <buttom className={posts?.cName}>{posts?.buttomData}</buttom>}
{/* posts button Visit ends */}

      {/* posted of profile details starts here */}
      <div className="flex justify-between items-center px-[25px]">
        <div className="flex items-center gap-2">
          <Image src={posts?.profileImg} width="50" height="50" alt="img" />
          <div>
          <h4 className=" text-[20px] font-[600px]">{posts?.name}</h4>
          <span className=" lg:hidden">{posts?.views} views</span>
          </div>
          
        </div>

        <div className="flex items-center gap-2">
          <AiOutlineEye className=" hidden text-[20px] lg:block" />
          <span className="hidden lg:block">{posts?.views} Views</span>
          <div className="bg-[#EDEEF0] w-[90px] lg:w-[50px] h-[36px] flex  justify-center items-center gap-3 ml-[20px] rounded cursor-pointer hover:bg-[grey]">
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
