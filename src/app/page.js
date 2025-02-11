import React from "react";
import Dream from "@/public/dream.svg";
import Image from "next/image";

const Dashboard = () => {
  const userName = "Kunal Singla";

  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center p-10 rounded-lg">
        <Image src={Dream} alt="Dream" width={256} className="mb-4" />{" "}
        <h1 className="text-3xl font-bold m-4">Welcome to the Dashboard!</h1>
      </div>
    </div>
  );
};

export default Dashboard;
