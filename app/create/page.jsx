'use client'
import React, { useState }  from "react";
import LogoTitle from "./_components/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft , ArrowRight } from "lucide-react";
import LogoDescription from "./_components/LogoDescription";
import LogoColorPalette from "./_components/LogoColorPalette";
import LogoDesigns from "./_components/LogoDesigns";
import LogoIdea from "./_components/LogoIdea";

   export default   function CreatLogo(){
const [step , setStep ] = useState (1);
const[formData , setFormData] = useState({});
const onHandleInputChange = (field , value) => {
    setFormData(prev => ({...prev , [field] : value}))
}
console.log(formData)
    return (
        <div className="border rounded-md p-10 flex flex-col gap-5">
       
       { 
       step == 1?
        <LogoTitle onHandleInputChange={(v)=>onHandleInputChange("title" , v)} />
        : step == 2 ?
         <LogoDescription onHandleInputChange={(v)=>onHandleInputChange("description" , v)}/>  
         :step == 3 ?    
          <LogoColorPalette onHandleInputChange={(v)=>onHandleInputChange("palette" , v)}/>  
          : step == 4 ? 
          <LogoDesigns onHandleInputChange={(v)=>onHandleInputChange("design" , v)}/> 
          : step == 5 ?
          <LogoIdea onHandleInputChange={(v)=>onHandleInputChange("idea" , v)}/>
          : null  
         }
       
        <div className="flex justify-evenly">
            
           { step != 1 ?
            <Button onClick={() => setStep(step - 1)}  className="bg-gray-400 hover:bg-gray-500"> <ArrowLeft/> Previous</Button>
:null}
            <Button onClick={() => setStep(step + 1)}>  <ArrowRight/>  Next</Button>
        </div>


        </div>
    )
}