import React from "react";
import Notification from "./Home/Notification";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import telephone from "@/assets/telephone.png";
import gmail from "@/assets/gmail.png";

const Navbarrrr = () => {
  return (
    <div>
      <Notification />
      <div className="flex justify-between sm:hidden">
        <div className="flex  flex-col p-4 ml-[10rem] sm:ml-0 sm:p-0 sm:hidden">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              height={200}
              width={200}
              className="p-4 sm:items-center sm:h-[3rem] sm:w-[8rem] sm:p-0 sm:mt-4 sm:ml-4 sm:mr-4 sm:mb-4 "
            />

            <span className=" mt-[-2rem] text-3xl font-bold ml-4 text-red sm:text-lg sm:ml-4">
              Bokaro Center
            </span>
          </Link>
        </div>
        <div className="p-4 items-center ml-5 sm:hidden">
          <h1 className="font-bold text-lg">Phone Number</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-5">
              <Image
                src={telephone}
                alt="phone"
                className="sm:hidden h-[1.7rem] w-[1.7rem]"
              />
              <span className="font-bold">+91 8207637632</span>
            </div>
            <div className="flex gap-5">
              <Image
                src={telephone}
                alt="phone"
                className="sm:hidden h-[1.7rem] w-[1.7rem]"
              />
              <span className="font-bold">+91 8207637632</span>
            </div>
            <div className="flex gap-5">
              <Image
                src={telephone}
                alt="phone"
                className="sm:hidden h-[1.7rem] w-[1.7rem]"
              />
              <span className="font-bold">+91 8207637632</span>
            </div>
          </div>
        </div>
        <div className="p-4 items-center ml-5 sm:hidden">
          <h1 className="font-bold text-lg">Email ID:</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-5">
              <Image
                src={gmail}
                alt="phone"
                className="sm:hidden h-[1.7rem] w-[1.7rem]"
              />
              <span className="font-bold">fiitjeebokaro@gmail.com</span>
            </div>
            <div className="flex gap-5">
              <Image
                src={gmail}
                alt="phone"
                className="sm:hidden h-[1.7rem] w-[1.7rem]"
              />
              <span className="font-bold">fiitjeebokaro@gmail.com</span>
            </div>
            <div className="flex gap-5">
              <Image
                src={gmail}
                alt="phone"
                className="sm:hidden h-[1.7rem] w-[1.7rem]"
              />
              <span className="font-bold">fiitjeebokaro@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="p-4 invisible">
          <button>he</button>
        </div>
      </div>
    </div>
  );
};

export default Navbarrrr;
