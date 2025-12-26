"use client"
import ImageComp from "@/components/ImageComp";
import { useRouter } from "next/navigation";
import React from "react";

const PostModal = () => {

  const router = useRouter();

  const closeModal = ()=>{
    router.back();
  }

  return (
    <div className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
        {/* TOP */}
        <div className="flex justify-between">
          <div className="cursor-pointer" onClick={closeModal}>X</div>
          <div className="text-iconBlue font-bold">Drafts</div>
        </div>
        {/* CENTER */}
        <div className="py-8 flex gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <ImageComp
              src="general/avatar.png"
              alt="Tanishk Agarwal"
              w={100}
              h={100}
            />
          </div>
          <input type="text" className="flex-1 bg-transparent outline-none text-lg" placeholder="What is happening?!" />
        </div>
        {/* BOTTOM */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
              <ImageComp
                src="icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            <ImageComp
              src="icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageComp
              src="icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageComp
              src="icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageComp
              src="icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageComp
              src="icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
