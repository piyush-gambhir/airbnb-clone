"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { HEADER_DATA } from "./config";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center px-20 py-7 border-b-[1px] border-black-10">
        <div className="rounded-xl border-transparent">
          <Image
            onClick={() => router.push("/")}
            className="cursor-pointer select-none"
            src="/images/logo_with_name.png"
            alt="Airbnb Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-row rounded-full"></div>
        <div className="">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
      <div className="flex flex-row gap-2 justify-between items-center px-20 py-8">
        <div className="flex flex-row gap-10">
          {HEADER_DATA?.filterCategories?.slice(0, 16).map((item) => (
            <div className="flex flex-col gap-2 items-center justify-center cursor-pointer select-none">
              <img
                className=""
                src={item.icon}
                width={24}
                height={24}
                alt="filter-icon"
              />
              <div className="text-sm">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="">
          <button
            type="button"
            className="flex flex-row items-center gap-2 p-2 border-2 border-black-80 rounded-lg cursor-pointer select-none"
            onClick={() => {}}
          >
            <Image
              className=""
              src=""
              width={10}
              height={10}
              alt="filter-icon"
            ></Image>
            <div className="">Filters</div>
          </button>
        </div>
      </div>
    </div>
  );
}
