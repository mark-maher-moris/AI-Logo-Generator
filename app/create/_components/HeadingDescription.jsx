import React from "react";



export default function HeadingDescription({title,description}) {
    return (
      <>
       <h2 className="text-3xl">{title}</h2>
       <h3 className="text-1xl text-gray-500">{description}</h3>
      
      </>
    );
}