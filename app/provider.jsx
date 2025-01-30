import React from "react";
import Header from "./_components/Header";

function Provider({ children }) {
    return (
    
   
   <div>

     <Header></Header>
   
   <div className="px-10 lg:px-20 xl:px-30 2xl:px-40 p-10">
         
       
        {children}</div>
   </div>);
}

export default Provider