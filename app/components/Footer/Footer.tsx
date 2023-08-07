"use client";

import React from "react";
import Image from "next/image";

import { FOOTER_DATA } from "./config";

export default function Footer(): React.ReactElement {
  // const languageContext = React.useContext(LanguageContext);
  // const currencyContext = React.useContext(CurrencyContext);
  const [isSupportResourcesMenuOpen, setIsSupportResourcesMenuOpen] =
    React.useState(false);
  return (
    <div className="flex flex-row px-20 pb-4 pt-3 justify-between items-center border-t-[0.5px] border-black-80 text-md text-gray-800 font-normal font-sans">
      <div className="flex flex-row gap-2">
        <p className="flex flex-row gap-1 items-center">
          <span className="text-md">©</span> 2023 Airbnb, Inc.
        </p>
        <button
          className="flex flex-row justify-between items-center gap-2"
          type="button"
        >
          <span className="">Destinations</span>
        </button>
      </div>
      <div className="flex flex-row gap-4 font-medium">
        <button
          className="flex flex-row justify-between items-center gap-2"
          type="button"
        >
          <Image
            src={FOOTER_DATA?.language?.icon?.source}
            alt={FOOTER_DATA?.language?.icon?.altText}
            width={12}
            height={12}
          />
          <span className="">{FOOTER_DATA?.language?.label}</span>
        </button>
        <button
          className="flex flex-row justify-between items-center gap-2"
          type="button"
        >
          <Image
            src={FOOTER_DATA?.currency?.icon?.source}
            alt={FOOTER_DATA?.currency?.icon?.altText}
            width={12}
            height={12}
          />
          <span className="">{FOOTER_DATA?.currency?.label}</span>
        </button>

        <button
          className="flex flex-row justify-between items-center gap-2"
          type="button"
        >
          <span className="">{FOOTER_DATA?.supportResources?.label}</span>
          <Image
            src={FOOTER_DATA?.supportResources?.icon?.source}
            alt={FOOTER_DATA?.supportResources?.icon?.altText}
            width={12}
            height={12}
            className={`${isSupportResourcesMenuOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}
