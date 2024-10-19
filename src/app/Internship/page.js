import React from "react";
import Image from "next/image";
import Dream from "@/public/dream.svg"; 

const Internship = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image 
        src={Dream} 
        alt="Dream" 
        width={256}
        className="mb-4" 
      />
      <h1 className="text-3xl font-bold mb-4">
        Welcome to the Internship Page!
      </h1>
    </div>
  );
};

export default Internship;
