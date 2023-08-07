"use client";

import React from "react";
import Image from "next/image";

export default function LoginModal() {
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };
  const handleLoginModalSubmit = () => {
    setIsLoginModalOpen(false);
  };
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 p-10">
      <div className="flex flex-col relative w-full lg:w-1/2 md:w-2/3 xl:w-2/5 bg-white">
        <div className="flex flex-row items-center px-6">
          <button
            type="button"
            className="cursor-pointer select-none"
            onClick={handleLoginModalClose}
          >
            <Image
              className="hover:bg-gray-100 rounded-full p-1"
              src="/icons/common/close_icon_grey.svg"
              alt="close icon"
              width={32}
              height={32}
            />
          </button>
          <header className="text-lg font-bold">Log in or sign up</header>
        </div>
        <div className="flex flex-col p-6">
          <h3 className="mb-2 text-2xl leading-7 font-semibold">
            Welcome to Airbnb
          </h3>
          <div>
            <p className="text-xs">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply. <span className="underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
