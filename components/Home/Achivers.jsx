import Image from "next/image";
import React from "react";
// import { iitb } from "@/assets/iitb.png";
// import logo from "@/assets/logo.png";
import logo from "@/assets/iitb.png";

const Achivers = () => {
  return (
    <div className="bg-yellow flex items-center mt-[-2rem] justify-center ">
      <div className=" w-[90%] sm:w-[100%]">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-primary text-5xl items-center font-bold p-4">
            Our Achiever's Study here
          </h1>
        </div>

        <div className="flex gap-10 overflow-hidden">
          <Image
            src={logo}
            height={300}
            width={300}
            alt="iitb"
            className="text-primary  "
          />
          <Image
            src={logo}
            height={300}
            width={300}
            alt="iitb"
            className="text-primary  "
          />
          <Image
            src={logo}
            height={300}
            width={300}
            alt="iitb"
            className="text-primary  "
          />
          <Image
            src={logo}
            height={300}
            width={300}
            alt="iitb"
            className="text-primary  "
          />
        </div>
      </div>
    </div>
  );
};

export default Achivers;
