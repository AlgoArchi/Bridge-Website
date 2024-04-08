"use client";
import React from "react";
import { TESelect } from "tw-elements-react";

export default function NetworkSelectInput(): JSX.Element {
  const customTheme = {
    selectOptionSelected: 'bg-gray-400 text-white',
    selectLabel: 'pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate text-white transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-white dark:peer-focus:text-white pt-[0.30rem] leading-[1.6] peer-focus:-translate-y-[0.9rem] dark:text-neutral-200 peer-focus:text-primary dark:peer-focus:text-primary',
    selectOptionActive: 'flex flex-row items-center justify-between w-full px-4 truncate select-none hover:bg-gray-500 hover:text-black cursor-pointer bg-gray-400'
  };

  const data = [
    { text: "Bitcoin", value: 1 },
    { text: "Ethereum", value: 2 },
    { text: "Binance", value: 3 },
    { text: "Polygon", value: 4 },
    { text: "Solana", value: 5 },
    { text: "Arbitrum", value: 6 },
    { text: "Base", value: 7 },
  ];

  return (
    <div className="flex justify-center">
      <div className="relative mb-3 md:w-30 pt-5">
        <TESelect
          className="shadow-xl text-[#f0eaea] bg-[#888282]"
          placeholder="Chain Receiver"
          preventFirstSelection
          data={data}
          label="Chain Receiver"
          theme={customTheme} />
      </div>
    </div>
  );
}
