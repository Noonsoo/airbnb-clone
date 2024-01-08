"use client";
import { useState } from "react";

import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/navigation";

function Header({ placeholder }) {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [placeholderText, setPlaceholderText] = useState('Search');

  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const startDateString = startDate.toISOString();
  const endDateString = endDate.toISOString();

  const handleSearch = () => {
    router.push(
      `/search?location=${search}&startDate=${startDateString}&endDate=${endDateString}&noOfGuests=${noOfGuests}`
    );
    setSearch("");
  };

  const resetInput = () => {
    setSearch("");
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <header className="sticky z-50 top-0 grid grid-cols-3 bg-white shadow-md p-5 md:px-10  ">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer">
        <Image
          alt="airbnb logo"
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className=" flex items-center border-2 py-2 ml-2  flex-grow rounded-full shadow-sm">
        
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent flex-grow outline-none md:text-lg"
          placeholder={ "Search"}
       
          type="text"
        />
        <SearchIcon className="h-8 hidden md:inline-flex text-white md:mr-2 bg-red-400   rounded-full p-2 cursor-pointer " />
      </div>
      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500  ">
        <p className="hidden lg :inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {search && (
        <div className="flex flex-col no-scrollbar col-span-3 mx-auto overflow-x-auto overflow-y-hidden whitespace-nowrap">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
            className="ant-calendar-range"

          />

          <div className="flex items-center mb-4 border-b ">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
            />
          </div>
          <div className="flex justify-around">
            <button onClick={resetInput} className="text-gray-500">
              Cancel
            </button>
            <button onClick={handleSearch} className="text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
