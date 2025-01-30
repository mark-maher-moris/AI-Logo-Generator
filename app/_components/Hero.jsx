import React from "react";
import Lookup from "../_data/Lookup";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
const Hero = () => {
    return (
         <div className=" flex items-center mt-10 flex-col gap-4 ">
              <p class="bg-gradient-to-r text-center from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ...">
  {Lookup.HeroHeading}
</p>
            <h1 >{Lookup.HeroHeading}</h1>    
      
            <Input className="h-16 max-w-sm border border-black/4 shadow-md shadow-blue-300 focus:border-indigo-50" placeholder={Lookup.WriteYourLogoName} />
<Button className="w-1/3 mt-9">{Lookup.Generate}</Button>
               
        </div>

/* <div class="
mx-auto blur-0 border-t-4 border-t-black border-b-4 border-b-black 
 flex max-w-sm items-center gap-x-4 rounded-xl bg-cyan-500  p-6 shadow-lg shadow-cyan-500/80 outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
</div> */





    );
};

export default Hero;

