"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import { format } from "date-fns";
import Footer from "./Footer";
import Header from "./Header";
import InfoCard from "./InfoCard";
import Maps from "./Maps";

function Search({ searchResults }) {
  const searchParams = useSearchParams();

  const startDate = searchParams.get("startDate");
  const location = searchParams.get("location");
  const endDate = searchParams.get("endDate");
  const noOfGuest = searchParams.get("noOfGuest");
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  console.log(searchResults);
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays -{range}- {noOfGuest} number of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden p-2 lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                price={item.price}
                total={item.total}
                star={item.star}
              />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Maps searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
