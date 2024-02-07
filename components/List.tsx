"use client";
import { getContinents, getCountries } from "@/services";
import { Continent, Country } from "@/types";
import React, { useState } from "react";

export default function ListBox() {
  const continents: Continent[] | null = getContinents();
  const {
    data: countries,
    isLoading,
  }: { data: Country[] | null; isLoading: boolean } = getCountries();
  const [cont, setContinent] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [flag, setFlag] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFlag(false);
    setSearch(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFlag(false);
    setContinent(e.target.value);
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-start w-full p-2 gap-2">
      <div className="grid grid-cols-12 w-full xl:w-3/4 gap-4">
        <input
          type="text"
          placeholder="Search"
          className="col-span-6 border border-neutral-500 px-2 py-1 rounded-md outline-none focus:border-neutral-700"
          onChange={handleInputChange}
        />
        <select
          className="col-span-3 border border-neutral-500 px-2 py-1 rounded-md outline-none focus:border-neutral-700"
          onChange={handleSelectChange}
        >
          <option value="">All</option>
          {continents?.map((continent: Continent | null) => (
            <option value={continent?.code} key={continent?.code}>
              {continent?.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-12 gap-3 p-5 border w-full xl:w-3/4 rounded-md bg-neutral-200 font-semibold text-center">
        <p className="col-span-1">Code</p>
        <p className="col-span-3">Name</p>
        <p className="col-span-4">Continent</p>
        <p className="col-span-2">Phone</p>
        <p className="col-span-2">Emoji</p>
      </div>

      <div className="flex flex-col items-center justify-start xl:w-3/4 max-h-[600px] overflow-auto gap-3">
        {isLoading ? (
          <div className="text-2xl font-semibold">Loading...</div>
        ) : (
          countries
            ?.filter((country: Country) =>
              cont !== "" ? country.continent.code === cont : true
            )
            ?.filter((country: Country) =>
              country.name.toLowerCase().includes(search.toLowerCase())
            )
            ?.map((country: Country, index: number) => {
              if (!flag && index >= 10) {
                setFlag(true);
                setActiveIndex(9);
              } else if (!flag) {
                setFlag(true);
                setActiveIndex(index);
              }
              return (
                <button
                  className={`grid grid-cols-12 gap-3 p-5 border w-full rounded-md ${
                    activeIndex === index ? "bg-green-300" : ""
                  } hover:border-slate-500 transition-all cursor-pointer`}
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  <p className="col-span-1">{country.code}</p>
                  <p className="col-span-3">{country.name}</p>
                  <p className="col-span-4">{country.continent.name}</p>
                  <p className="col-span-2">{country.phone}</p>
                  <p className="col-span-2 text-lg">{country.emoji}</p>
                </button>
              );
            })
        )}
      </div>
    </div>
  );
}
