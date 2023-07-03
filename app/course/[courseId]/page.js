import Image from "next/image";
import React from "react";
import Logo from "../../../assets/logo.png";

const Page = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-5 border-2 p-4 mt-4 w-[50vw] bg-primary">
        <Image src={Logo} />
        <span className="text-red bg-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ex
          accusamus explicabo magnam aliquam quaerat! Impedit vero vitae modi
          similique sapiente totam quos beatae excepturi!
        </span>
      </div>
      <div className="font-bold text-pink">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur et
        quisquam eveniet a eaque reiciendis mollitia, asperiores ea, corrupti
        sint aliquid ipsam aspernatur, error similique.
      </div>
    </>
  );
};

export default Page;
