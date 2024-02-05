"use client";
import React from "react";

type Props = {
  data: any[];
};

export default function ListBox({ data }: Props) {
  return (
    <div className="flex flex-col items-center justify-start w-full p-2 gap-2">
      <div className="grid grid-cols-12 gap-3 p-5 border w-full xl:w-3/4 rounded-md bg-neutral-200 font-semibold text-center">
        <p className="col-span-1">Code</p>
        <p className="col-span-3">Name</p>
        <p className="col-span-4">Native</p>
        <p className="col-span-2">Phone</p>
        <p className="col-span-2">Emoji</p>
      </div>
      <div className="flex flex-col items-center justify-start xl:w-3/4 max-h-[600px] overflow-auto gap-3">
        {data.map((country, key) => {
          return (
            <button
              className="grid grid-cols-12 gap-3 p-5 border w-full rounded-md"
              key={key}
            >
              <p className="col-span-1">{country.code}</p>
              <p className="col-span-3">{country.name}</p>
              <p className="col-span-4">{country.native}</p>
              <p className="col-span-2">{country.phone}</p>
              <p className="col-span-2 text-lg">{country.emoji}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
