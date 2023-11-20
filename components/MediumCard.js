import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300">
      <div className="relative h-80 w-80 ">
        <Image
          className="rounded-xl"
          src={img}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h2>{title}</h2>
    </div>
  );
}

export default MediumCard;
