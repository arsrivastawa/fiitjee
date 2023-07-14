"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import iitb from "@/assets/ib.png";
import ib from "@/assets/iitb.jpg";
import iitd from "@/assets/iitd.jpg";
import iitm from "@/assets/iitm.jpg";
import iitkgp from "@/assets/iitkgp.jpg";
import iitr from "@/assets/iitr.jpg";
import iitk from "@/assets/iitk.jpg";
import iitg from "@/assets/iitg.jpg";
import iitdh from "@/assets/iitdh.jpg";
import iith from "@/assets/iith.jpg";
import iitbhu from "@/assets/iitbhu.jpg";
import iitbh from "@/assets/iitbh.jpg";

SwiperCore.use([Autoplay, Pagination]);

const Achivers = () => {
  const swiperRef = useRef(null);
  return (
    <div className="bg-[#F7F8FC]">
      <div className="p-[2rem] ml-[10rem] flex justify-center sm:p-0 sm:ml-2">
        <div className="herder p-4 text-5xl  sm:text-3xl font-bold sm:p-3 ">
          Our <span className="text-red">Achievers Study Here</span>
        </div>
      </div>
      <div className="overflow-hidden p-4 cursor-grabbing">
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          spaceBetween={4}
          pagination={{
            clickable: false,
          }}
          autoplay={{
            delay: 1000, // Adjust the delay (in milliseconds) as desired
            disableOnInteraction: false,
          }}
          loop={true}
          effect="fade"
          fadeEffect={{
            crossFade: true,
            Achivers: true,
          }}
          lazyPreloadPrevNext={true}
          className="mySwiper mt-5  w-[70rem] sm:w-[60rem] overflow-hidden"
        >
          <SwiperSlide className="p-4   ">
            <Image src={ib} className=" bg-yellow h-[10rem] " />
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <Image src={iitd} className=" h-[10rem] " />
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <Image src={iitm} className=" h-[10rem] " />
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <Image src={iitkgp} className=" h-[10rem]" />
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <Image src={iitr} className=" h-[10rem] " />
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <Image src={iitk} className="h-[10rem] " />
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <Image src={iitg} className="h-[10rem]" />
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <Image src={iitdh} className=" h-[10rem] " />
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <Image src={iith} className=" h-[10rem] " />
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <Image src={iitbhu} className="h-[10rem] " />
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <Image src={iitbh} className=" h-[10rem] " />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Achivers;
