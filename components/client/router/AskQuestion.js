"use client";
import React from "react";
import { useRouter } from "next/navigation";
import PopupModal from "@/components/modal/popupModal";
import useToggle from "@/components/hooks/useToggle";
import StatusPost from "@/components/modal/statusPost";

export default function AskQuestion({ session }) {
  const [isPopupOpen, togglePopup] = useToggle();
  const [isWritePopupOpen, toggleWritePopup] = useToggle();

  const handleSubmit = () => {
    // handle the submit action here
    togglePopup();
  };

  const handleWriteSubmit = () => {
    // handle the submit action here
    toggleWritePopup();
  };

  return (
    <div>
      <div className="flex flex-col pt-2 text-base bg-white rounded-2xl shadow-sm max-w-[570px] max-md:pr-5 mt-2  min-w-0  md:min-w-[570px] text-stone-500">
        <div className="flex gap-4 self-start ml-6 max-md:ml-2.5">
          <img
            loading="lazy"
            srcSet={session?.user?.image || "Profile.svg"}
            alt="User Profile"
            className="shrink-0 rounded-full w-[40px]"
          />
          <div
            className="flex-auto my-auto cursor-pointer"
            onClick={toggleWritePopup}
          >
            লিখো যা তুমি লিখতে চাও...
          </div>
        </div>
        <div className="flex gap-5 justify-between items-center pl-6 mt-2 py-3 whitespace-nowrap rounded-none bg-gray-300 bg-opacity-10 max-md:flex-wrap max-md:pl-5 max-md:mt-10">
          <div
            className="flex flex-1 gap-1.5 self-stretch my-auto cursor-pointer"
            onClick={togglePopup}
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/241e28d4d055bd79319f299f7e950abf0fbe5a06287a38def2c3c67d9602458a?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              alt="Ask Icon"
              className="shrink-0 aspect-[0.92] fill-black fill-opacity-0 w-[22px]"
            />
            <div className="my-auto text-sm md:text-base">জিজ্ঞাসা করুন</div>
          </div>

          <div className="flex flex-1 gap-1.5 self-stretch my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/63077ea6ac4d4bd6c6448b7572f8fe9f9f8b21d00796832e2d2e0dbdfdb232d3?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              alt="Answer Icon"
              className="shrink-0 aspect-[0.92] fill-black fill-opacity-0 w-[22px]"
            />
            <div className="my-auto text-sm md:text-base">উত্তর দিন</div>
          </div>
          <div className="flex flex-1 gap-1.5 self-stretch my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/95315f8e8b981429a7799c86d9d79fc42012e8f374a81b6168a54ead38b929ba?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              alt="Post Icon"
              className="shrink-0 aspect-[0.92] fill-black fill-opacity-0 w-[22px]"
            />
            <div className="my-auto text-sm md:text-base">পোষ্ট করুন</div>
          </div>
        </div>
      </div>
      <PopupModal
        isOpen={isPopupOpen}
        onClose={togglePopup}
        onSubmit={handleSubmit}
      />
      <StatusPost
        isOpen={isWritePopupOpen}
        onClose={toggleWritePopup}
        onSubmit={handleWriteSubmit}
      />
    </div>
  );
}
