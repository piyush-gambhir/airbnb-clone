"use client";

import React from "react";
import Image from "next/image";

import { LOGIN_MODAL_DATA } from "./config";

export default function LoginModal() {
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(true);
  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };
  const handleLoginModalSubmit = () => {
    setIsLoginModalOpen(false);
  };
  return (
    (isLoginModalOpen && (
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 p-10">
        <div
          className=" relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto"
        >
          <div
            className={`
          translate
            duration-300
            h-full
            ${isLoginModalOpen ? "translate-y-0" : "translate-y-full"}
            ${isLoginModalOpen ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
            >
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
                  <p className="text-sm">
                    We’ll call or text you to confirm your number. Standard
                    message and data rates apply.
                    <span className="underline font-bold">Privacy Policy</span>.
                  </p>
                </div>
                <button
                  type="button"
                  className="w-full flex items-center justify-center py-4 mt-4 bg-rose-600 rounded-lg"
                  onClick={handleLoginModalSubmit}
                >
                  <p className="text-white font-bold">Continue</p>
                </button>
                <div className="mt-4">
                  {LOGIN_MODAL_DATA.socialLogin?.map((socialLogin) => (
                    <button
                      type="button"
                      className="w-full flex items-center justify-center py-2 my-2 bg-white border rounded-lg"
                      onClick={handleLoginModalSubmit}
                    >
                      <Image
                        className="hover:bg-gray-100 rounded-full p-1"
                        src={socialLogin.source}
                        alt={socialLogin.altText}
                        width={32}
                        height={32}
                      />
                      <p className="text-dark_grey font-semibold">
                        {socialLogin.title}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )) || <></>
  );
}
