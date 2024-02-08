import { Country } from "@/types";
import React from "react";

type Props = {
  handleClick: (index: number) => void;
  country: Country;
  index: number;
  activeIndex: number | null;
};

export default function ListItem({
  handleClick,
  country,
  index,
  activeIndex,
}: any) {
  return (
    <button
      className={`grid grid-cols-12 gap-3 p-5 border w-full rounded-md ${
        activeIndex === index ? "bg-green-300" : ""
      } hover:border-slate-500 transition-all cursor-pointer`}
      onClick={() => handleClick(index)}
    >
      <p className="col-span-1">{country.code}</p>
      <p className="col-span-3">{country.name}</p>
      <p className="col-span-4">{country.continent.name}</p>
      <p className="col-span-2">{country.phone}</p>
      <p className="col-span-2 text-lg">{country.emoji}</p>
    </button>
  );
}
