import React from "react";
import HeadingDescription from "./HeadingDescription";
import { Input } from "@/components/ui/input"


export default function LogoDescription(onHandleInputChange) {
    return (
      <div>
    <HeadingDescription title={"Describe Your Logo"} description={"Write your imagination , ideas so AI can generate your logo as you want"}></HeadingDescription>
      
      
    <input 
      onChange={(e) => onHandleInputChange(e.target.value)}
      className="h-16 max-w-xl border border-black/4 shadow-md shadow-blue-300 focus:border-indigo-50" placeholder={"Descripe the logo more"} />

      </div>
    );
}