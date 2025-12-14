"use client";

import React, { useState } from "react";
import ImageComp from "./ImageComp";
import { shareAction } from "@/actions";
import Image from "next/image";
import ImageEditor from "./ImageEditor";

export type settingsType = {
  type: "original" | "wide" | "square";
  sensitive: boolean; // true means media is blur and not visible.
};

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [settings, setSettings] = useState<settingsType>({
    type: "original",
    sensitive: false,
  });

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('called');
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  console.log(media);

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form
      className="p-4 flex gap-4"
      action={(formData) => shareAction(formData, settings)}
    >
      {/* AVATAR */}
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <ImageComp src="general/avatar.png" alt="" w={100} h={100} />
      </div>
      {/* OTHERS */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          placeholder="What is happening?!"
          name="desc"
          className="bg-transparent outline-none placeholder:text-textGray"
        />
        {/* PREVIEW IMAGE */}
        {media?.type.includes("image") && previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={previewURL}
              alt=""
              width={600}
              height={600}
              className={`w-full ${
                settings.type === "original"
                  ? "h-full object-contain"
                  : settings.type === "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
              }`}
            />
            <div
              className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </div>
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
              onClick={() => setMedia(null)}
            >
              X
            </div>
          </div>
        )}
        {media?.type.includes("video") && previewURL && (
          <div className="relative">
            <video src={previewURL} controls />
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
              onClick={() => setMedia(null)}
            >
              X
            </div>
          </div>
        )}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              onChange={handleMediaChange}
              id="file"
              className="hidden"
              name="file"
              accept="image/*,video/*" // accept only images and video
            />
            <label htmlFor="file">
              <ImageComp
                src="icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
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
    </form>
  );
};

export default Share;
