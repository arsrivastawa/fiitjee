import Link from "next/link";
import React from "react";
import aboutUs from "@/assets/aboutUs.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-[#F7F8FC]  ">
      <div className="p-4 w-[80%] sm:w-[100%]  ml-[10rem] sm:ml-0">
        <h1 className="font-bold text-5xl sm:text-3xl  p-4 ">
          About <span className="text-red">FIITJEE </span>
        </h1>
        <div className="flex flex-wrap gap-5 p-4">
          <Image src={aboutUs} alt="about" className="w-[35rem]" />
          <div className=" w-[48%] sm:w-[100%]">
            <p className="   p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, cum ut quidem eius non dolor a perferendis, eligendi
              iure voluptates nobis! Alias repudiandae, nisi nobis voluptate est
              consectetur voluptas fugiat autem eum molestias ipsa error
              voluptatibus id incidunt nemo vel voluptatem sunt rerum, corrupti
              modi! Vero consequuntur adipisci sunt quasi?
            </p>
            <p className="  p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, cum ut quidem eius non dolor a perferendis, eligendi
              iure voluptates nobis! Alias repudiandae, nisi nobis voluptate est
              consectetur voluptas fugiat autem eum molestias ipsa error
              voluptatibus id incidunt nemo vel voluptatem sunt rerum, corrupti
              modi! Vero consequuntur adipisci sunt quasi?
            </p>
            <Link href="/" className="p-4">
              <button className="p-3 text-lg rounded-md text-primary-light bg-red ">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
