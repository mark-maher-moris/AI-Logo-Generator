'use client'

import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import { Input } from "@/components/ui/input"
import { useSearchParams } from "next/navigation";


export default function LogoTitle({onHandleInputChange}) {
    const searchParam = useSearchParams();
    const [title ,setTitle] = useState(searchParam.get("title")??"");
    return (
    <div className="flex flex-col gap-4">
      <HeadingDescription title={"Logo Title"} description={"Description"}/>

      <Input 
      defaultValue={title}
      onChange={(e) => {setTitle(e.target.value),

        onHandleInputChange(e.target.value)
      }}
      className="h-16 max-w-xl border border-black/4 shadow-md shadow-blue-300 focus:border-indigo-50" placeholder={"Descripe the logo more"} />

</div>
    );
}