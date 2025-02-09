'use client'
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import LogoDesign from "@/app/_data/LogoDesign";
import Image from "next/image";

export default function LogoDesigns({onHandleInputChange, formData}) {
  const [selectedOption, setSelectedOption] = useState(formData?.design); // Initialize with null

  return (
    <div className="my-10">
      <HeadingDescription title={"Choose Your Logo Designs Reference"} description={""} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {LogoDesign.map((design, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 cursor-pointer ${selectedOption === design.title ? 'border-2 border-indigo-500' : ''}`}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
          >
            <Image
              className="w-full rounded-xl h-[190px] object-cover"
              src={design.image}
              width={100}
              height={100}
              alt={design.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}