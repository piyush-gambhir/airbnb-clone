"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { HEADER_DATA } from "./config";

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);
  const [isNavbarExpanded, setIsNavbarExpanded] = React.useState(false);

  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/");
  };
  const handleAirbnbYourHomeClick = () => {
    router.push("/host/homes");
  };
  const handleAnywhereClick = () => {
    setIsNavbarExpanded(true);
  };
  const handleAnyweekClick = () => {
    setIsNavbarExpanded(true);
  };
  const handleAddGuestsClick = () => {
    setIsNavbarExpanded(true);
  };
  const handleSearchClick = () => {
    setIsNavbarExpanded(true);
  };

  const handleUserMenuButtonClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLoginSignUpButtonClick = () => {};

  const handleHelpCenterButtonClick = () => {
    router.push("/help");
  };

  return (
    <div className="flex flex-col">
      <div
        className={`h-20 flex flex-row justify-between items-center sm:px-10 2xl:px-20 text-dark_gray ${
          isNavbarExpanded ? "scale-y-200" : "border-b-[1px] border-black-10"
        }`}
      >
        <div className="rounded-xl border-transparent">
          <Image
            onClick={handleLogoClick}
            className="cursor-pointer select-none sm:hidden md:hidden lg:block"
            src="/images/logo_with_name.png"
            alt="Airbnb Logo"
            width={102}
            height={32}
          />
          <Image
            onClick={handleLogoClick}
            className="cursor-pointer select-none hidden sm:block md:block lg:hidden"
            src="/images/logo.png"
            alt="Airbnb Logo"
            width={32}
            height={32}
          />
        </div>
        <div className="flex px-6">
          <div className="flex flex-row py-2 rounded-full border-[1px] border-black-80 text-sm shadow-md hover:shadow-lg transition-shadow duration-150 ease-in">
            <button
              type="button"
              className="flex flex-row items-center gap-2 cursor-pointer select-none"
              onClick={handleAnywhereClick}
            >
              <div className="px-4 border-r-[1px] font-semibold">Anywhere</div>
            </button>
            <button
              type="button"
              className="flex flex-row items-center gap-2 cursor-pointer select-none"
              onClick={handleAnyweekClick}
            >
              <div className="px-4 border-r-[1px] font-semibold">Anywheek</div>
            </button>
            <button
              type="button"
              className="flex flex-row items-center gap-2 cursor-pointer select-none"
              onClick={handleAddGuestsClick}
            >
              <div className="px-4 text-light_gray">Add guests</div>
            </button>
            <button type="button" className="pr-2" onClick={handleSearchClick}>
              <div className="bg-rose-500 rounded-full p-2">
                <Image
                  className=""
                  src="/icons/header/search_icon_white.svg"
                  width={16}
                  height={16}
                  alt="search-icon"
                ></Image>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-right">
          <div className="flex flex-row items-center justify-right">
            <button
              type="button"
              className="appearance-none py-2 px-4 rounded-full hover:bg-gray-100"
              onClick={handleAirbnbYourHomeClick}
            >
              <div>Airbnb your home</div>
            </button>
            <button
              type="button"
              className="rounded-full focus:outline-2 focus:outline-black"
            >
              <div className="p-3 rounded-full hover:bg-gray-100">
                <Image
                  className=""
                  src="/icons/header/globe_icon.svg"
                  width={16}
                  height={16}
                  alt="search-icon"
                ></Image>
              </div>
            </button>
          </div>
          <div className="rounded-full p">
            <button
              type="button"
              className="flex items-center p-1 border-[1px] border-gray-300 rounded-full focus:outline-2 focus:outline-black hover:shadow-md transition-shadow duration-150 ease-in"
              onClick={handleUserMenuButtonClick}
            >
              <div className="flex flex-row items-center gap-2 pl-2 justify-between rounded-full">
                <Image
                  className=""
                  src="/icons/header/menu_icon.svg"
                  width={16}
                  height={16}
                  alt="search-icon"
                />
                <Image
                  className=""
                  src="/icons/header/user_icon.svg"
                  width={32}
                  height={32}
                  alt="search-icon"
                />
              </div>
            </button>
          </div>
          {isUserMenuOpen && (
            <div className="flex flex-col absolute right-20 top-16 mt-2 w-56 bg-white rounded-lg shadow-xl">
              <div className="flex flex-col py-2">
                <button
                  type="button"
                  className="flex items-center w-full gap-2 p-2 border-black-80 rounded-lg hover:bg-gray-100"
                  onClick={handleLoginSignUpButtonClick}
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  className="flex flex-row items-center gap-2 p-2 border-black-80 rounded-lg hover:bg-gray-100"
                  onClick={handleLoginSignUpButtonClick}
                >
                  Login
                </button>
              </div>
              <div className="flex flex-col border-b-[1px] border-gray-300"></div>
              <div className="flex flex-col py-2">
                <button
                  type="button"
                  className="flex items-center w-full gap-2 p-2 border-black-80 rounded-lg hover:bg-gray-100"
                  onClick={handleAirbnbYourHomeClick}
                >
                  Airbnb your home
                </button>
                <button
                  type="button"
                  className="flex flex-row items-center gap-2 p-2 border-black-80 rounded-lg hover:bg-gray-100"
                  onClick={handleLoginSignUpButtonClick}
                >
                  Help Center
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-row gap-6 items-center px-20 py-8">
        <button
          type="button"
          className="flex flex-row items-center gap-2 p-3 border-[1px] border-gray-300 rounded-lg cursor-pointer select-none"
          onClick={() => {}}
        >
          <Image
            className=""
            src="/icons/header/filter_icon.svg"
            width={12}
            height={12}
            alt="filter-icon"
          ></Image>
          <div className="text-sm text-dark_gray font-medium">Filters</div>
        </button>
      </div>
    </div>
  );
}
