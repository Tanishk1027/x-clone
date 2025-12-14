import Feed from "@/components/Feed";
import ImageComp from "@/components/ImageComp";
import Link from "next/link";
import React from "react";

const UserPage = () => {
  return (
    <div className="">
      {/* PROFILE TITLE */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <ImageComp src="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Tanishk Agarwal</h1>
      </div>
      {/* INFO */}
      <div className="">
        {/* COVER & AVATAR CONTAINER */}
        <div className="relative w-full">
          {/* COVER */}
          <div className="w-full aspect-[3/1] relative">
            <ImageComp src="general/cover.jpg" alt="" w={600} h={200} />
          </div>
          {/* AVATAR */}
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-black border-4 bg-gray-300 absolute left-4 -translate-y-1/2">
            <ImageComp src="general/avatar.png" alt="" w={200} h={200} />
          </div>
        </div>
        <div className="flex w-full items-center justify-end p-2 gap-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageComp src="icons/more.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageComp src="icons/explore.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageComp src="icons/message.svg" alt="more" w={20} h={20} />
          </div>
          <button className="py-2 px-4 text-black bg-white font-bold rounded-full">
            Follow
          </button>
        </div>
        {/* USER DETAILS */}
        <div className="p-4 flex flex-col gap-2">
          {/* USERNAME & HANDLE */}
          <div className="">
            <h1 className="text-2xl font-bold">Tanishk Agarwal</h1>
            <span className="text-textGray text-sm">@Tanishk</span>
          </div>
          <p>Tanishk Agarwal Vlogs</p>
          {/* JOBS & LOCATION DATE */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <ImageComp src="icons/userLocation.svg" alt="" w={20} h={20} />
              <span>India</span>
            </div>
            <div className="flex items-center gap-2">
              <ImageComp src="icons/date.svg" alt="" w={20} h={20} />
              <span>Joined June 2024</span>
            </div>
          </div>
        {/* FOLLOWING & FOLLOWERS */}
        <div className="flex gap-4">
            <div className="flex items-center gap-2">
                <span className="font-bold">100</span>
                <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-bold">100</span>
                <span className="text-textGray text-[15px]">Following</span>
            </div>
        </div>
        </div>
      </div>
      {/* FEED */}
      <Feed/>
    </div>
  );
};

export default UserPage;
