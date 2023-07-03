"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import hourglass from "@/assets/hourglass.png";
import one from "@/assets/Topper/1.jpg";

// import "./styles.css";

SwiperCore.use([Autoplay, Pagination]);

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <div className="bg-[#F7F8FC]">
      <div className="p-[2rem] ml-[10rem]  sm:p-0 sm:ml-2">
        <div className="herder p-4 text-5xl  sm:text-3xl font-bold sm:p-3 ">
          Our <span className="text-red">Achievers</span>
        </div>
      </div>
      <div className="overflow-hidden cursor-grabbing">
        <Swiper
          ref={swiperRef}
          slidesPerView={2.2}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000, // Adjust the delay (in milliseconds) as desired
            disableOnInteraction: false,
          }}
          loop={true}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          className="mySwiper  mt-5 w-[70rem] sm:w-[60rem] overflow-hidden"
        >
          <SwiperSlide className="p-4   overflow-hidden">
            <div className="space-y-4 rounded-xl px-5 bg-primary-light py-7   shadow-xl md:w-[456px] md:py-10  w-[30rem] sm:w-[22rem]">
              {" "}
              <p className="  sm:w-[20rem]  p-1 text-[#777C85] md:min-h-[150px] md:text-start">
                During entire session it is mandatory that we should Practice
                more questions rather than theory so that work is superbly done
                by Babbar bhaiya Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quos corporis similique, ex ducimus deserunt
                ut dicta atque cupiditate dolores omnis.
              </p>
              <div className="flex gap-5">
                <Image
                  src={one}
                  className="rounded-full h-[3rem] mt-2 w-[3rem]"
                />
                <div className="flex flex-col mt-3">
                  <h2 className="font-bold">Pratik Srivastava</h2>
                  <span>Batch 2k12</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <div className="space-y-4 rounded-xl px-5 bg-primary-light py-7   shadow-xl md:w-[456px] md:py-10  w-[30rem] sm:w-[22rem]">
              {" "}
              <p className="  sm:w-[20rem]  p-1 text-[#777C85] md:min-h-[150px] md:text-start">
                During entire session it is mandatory that we should Practice
                more questions rather than theory so that work is superbly done
                by Babbar bhaiya Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quos corporis similique, ex ducimus deserunt
                ut dicta atque cupiditate dolores omnis.
              </p>
              <div className="flex gap-5">
                <Image
                  src={hourglass}
                  className="rounded-full h-[2rem] mt-2 w-[2rem]"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Pratik Srivastava</h2>
                  <span>Batch 2k12</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <div className="space-y-4 rounded-xl px-5 bg-primary-light py-7   shadow-xl md:w-[456px] md:py-10  w-[30rem] sm:w-[22rem]">
              {" "}
              <p className="  sm:w-[20rem]  p-1 text-[#777C85] md:min-h-[150px] md:text-start">
                During entire session it is mandatory that we should Practice
                more questions rather than theory so that work is superbly done
                by Babbar bhaiya Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quos corporis similique, ex ducimus deserunt
                ut dicta atque cupiditate dolores omnis.
              </p>
              <div className="flex gap-5">
                <Image
                  src={hourglass}
                  className="rounded-full h-[2rem] mt-2 w-[2rem]"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Pratik Srivastava</h2>
                  <span>Batch 2k12</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <div className="space-y-4 rounded-xl px-5 bg-primary-light py-7   shadow-xl md:w-[456px] md:py-10  w-[30rem] sm:w-[22rem]">
              {" "}
              <p className="  sm:w-[20rem]  p-1 text-[#777C85] md:min-h-[150px] md:text-start">
                During entire session it is mandatory that we should Practice
                more questions rather than theory so that work is superbly done
                by Babbar bhaiya Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quos corporis similique, ex ducimus deserunt
                ut dicta atque cupiditate dolores omnis.
              </p>
              <div className="flex gap-5">
                <Image
                  src={hourglass}
                  className="rounded-full h-[2rem] mt-2 w-[2rem]"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Pratik Srivastava</h2>
                  <span>Batch 2k12</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <div className="space-y-4 rounded-xl px-5 bg-primary-light py-7   shadow-xl md:w-[456px] md:py-10  w-[30rem] sm:w-[22rem]">
              {" "}
              <p className="  sm:w-[20rem]  p-1 text-[#777C85] md:min-h-[150px] md:text-start">
                During entire session it is mandatory that we should Practice
                more questions rather than theory so that work is superbly done
                by Babbar bhaiya Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quos corporis similique, ex ducimus deserunt
                ut dicta atque cupiditate dolores omnis.
              </p>
              <div className="flex gap-5">
                <Image
                  src={hourglass}
                  className="rounded-full h-[2rem] mt-2 w-[2rem]"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Pratik Srivastava</h2>
                  <span>Batch 2k12</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <div className="space-y-4 rounded-xl px-5 bg-primary-light py-7   shadow-xl md:w-[456px] md:py-10  w-[30rem] sm:w-[22rem]">
              {" "}
              <p className="  sm:w-[20rem]  p-1 text-[#777C85] md:min-h-[150px] md:text-start">
                During entire session it is mandatory that we should Practice
                more questions rather than theory so that work is superbly done
                by Babbar bhaiya Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quos corporis similique, ex ducimus deserunt
                ut dicta atque cupiditate dolores omnis.
              </p>
              <div className="flex gap-5">
                <Image
                  src={hourglass}
                  className="rounded-full h-[2rem] mt-2 w-[2rem]"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Pratik Srivastava</h2>
                  <span>Batch 2k12</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <div className="space-y-4 rounded-xl px-5 bg-primary-light py-7   shadow-xl md:w-[456px] md:py-10  w-[30rem] sm:w-[22rem]">
              {" "}
              <p className="  sm:w-[20rem]  p-1 text-[#777C85] md:min-h-[150px] md:text-start">
                During entire session it is mandatory that we should Practice
                more questions rather than theory so that work is superbly done
                by Babbar bhaiya Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quos corporis similique, ex ducimus deserunt
                ut dicta atque cupiditate dolores omnis.
              </p>
              <div className="flex gap-5">
                <Image
                  src={hourglass}
                  className="rounded-full h-[2rem] mt-2 w-[2rem]"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Pratik Srivastava</h2>
                  <span>Batch 2k12</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <div className="space-y-4 rounded-xl px-5 bg-primary-light py-7   shadow-xl md:w-[456px] md:py-10  w-[30rem] sm:w-[22rem]">
              {" "}
              <p className="  sm:w-[20rem]  p-1 text-[#777C85] md:min-h-[150px] md:text-start">
                During entire session it is mandatory that we should Practice
                more questions rather than theory so that work is superbly done
                by Babbar bhaiya Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quos corporis similique, ex ducimus deserunt
                ut dicta atque cupiditate dolores omnis.
              </p>
              <div className="flex gap-5">
                <Image
                  src={hourglass}
                  className="rounded-full h-[2rem] mt-2 w-[2rem]"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Pratik Srivastava</h2>
                  <span>Batch 2k12</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
