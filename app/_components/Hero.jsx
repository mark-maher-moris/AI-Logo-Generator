'use client'

import React, { useState } from "react";
import Lookup from "../_data/Lookup";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
    const [logoTitle, setLogoTitle] = useState("");
    return (
         <div className=" flex items-center mt-10 flex-col gap-4 ">
              <p class="bg-gradient-to-r text-center from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ...">
  {Lookup.HeroHeading}
</p>
            <h1 >{Lookup.HeroSubheading}</h1>    
      
            <Input onChange={(e) => setLogoTitle(e.target.value)} className="h-16 max-w-sm border border-black/4 shadow-md shadow-blue-300 focus:border-indigo-50" placeholder={Lookup.WriteYourLogoName} />
            <Link href={'/create?='+logoTitle} className="w-full flex justify-center">
            <Button className="w-1/3 mt-9">{Lookup.Generate}</Button>
            </Link> 

        </div>
    );
};

export default Hero;




{/* <Link href={'/create?='+logoTitle}></Link> */}