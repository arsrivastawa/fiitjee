"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import hourglass from "@/assets/hourglass.png";
import one from "@/assets/Topper/1.jpg";
import air3 from "@/assets/air3.jpg";
import air6 from "@/assets/air6.jpg";
import air8 from "@/assets/air8.jpg";
import air16 from "@/assets/air16.jpg";
import air19 from "@/assets/air19.jpg";
import air20 from "@/assets/air20.jpg";
import air21 from "@/assets/air21.jpg";
import air22 from "@/assets/air22.jpg";

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
                "I am incredibly grateful to FIITJEE for their unwavering
                support and guidance, which played a pivotal role in my
                achievement of All India Rank 3 in JEE Advanced. Their
                comprehensive study material, expert faculty, and rigorous
                testing system were integral to my success. Thank you, FIITJEE,
                for shaping my future."
              </p>
              <div className="flex gap-5">
                <Image
                  src={air3}
                  className="rounded-full h-[3rem] mt-2 w-[3rem]"
                />
                <div className="flex flex-col mt-3">
                  <h2 className="font-bold">Rishi Kalra</h2>
                  <span className="font-bold text-red text-lg"> Air 3</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <div className="space-y-4 rounded-xl px-5 bg-primary-light py-7   shadow-xl md:w-[456px] md:py-10  w-[30rem] sm:w-[22rem]">
              {" "}
              <p className="  sm:w-[20rem]  p-1 text-[#777C85] md:min-h-[150px] md:text-start">
                "I extend my sincere gratitude to FIITJEE for their invaluable
                support and guidance, which enabled me, Prabhav Khandelwal, to
                secure All India Rank 6 in JEE Advanced. The comprehensive study
                material, exceptional faculty, and rigorous testing system
                provided by FIITJEE played a crucial role in my success. Thank
                you, FIITJEE, for being instrumental in shaping my future."
              </p>
              <div className="flex gap-5">
                <Image
                  src={air6}
                  className="rounded-full h-[3rem] mt-2 w-[3rem]"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Prabhav Khandelwal</h2>
                  <span className="font-bold text-red text-lg"> Air 6</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4   overflow-hidden">
            <div className="space-y-4 rounded-xl px-5 bg-primary-light py-7   shadow-xl md:w-[456px] md:py-10  w-[30rem] sm:w-[22rem]">
              {" "}
              <p className="  sm:w-[20rem]  p-1 text-[#777C85] md:min-h-[150px] md:text-start">
                "I'm immensely grateful to FIITJEE for their transformative
                guidance. Upgrading to Pinnacle Program was a game-changer.
                Rigorous curriculum, excellent faculty, personalized attention
                led to Rank 8. Thank you, FIITJEE, for unlocking my potential
                and paving the way for a successful future."
              </p>
              <div className="flex gap-5">
                <Image
                  src={air8}
                  className="rounded-full h-[3rem] mt-2 w-[3rem]"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Malay Kedia</h2>
                  <span className="font-bold text-red text-lg"> Air 8</span>
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
                  src={air16}
                  className="rounded-full h-[3rem] mt-2 w-[3rem]"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Harshit Kansal</h2>
                  <span className="font-bold text-red text-lg"> Air 16</span>
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
                  src={air19}
                  className="rounded-full h-[3rem] mt-2 w-[3rem]"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Moulik Jindal</h2>
                  <span className="font-bold text-red text-lg"> Air 19</span>
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
                  src={air20}
                  className="rounded-full h-[3rem] mt-2 w-[3rem]"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Sameer Arvind Patil</h2>
                  <span className="font-bold text-red text-lg"> Air 20</span>
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
                  src={air21}
                  className="rounded-full h-[3rem] mt-2 w-[3rem]"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Prakhar Jain</h2>
                  <span className="font-bold text-red text-lg"> Air 21</span>
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
                  src={air22}
                  className="rounded-full h-[3rem] mt-2 w-[3rem]"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Deshank Pratap Singh</h2>
                  <span className="font-bold text-red text-lg"> Air 22</span>
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
