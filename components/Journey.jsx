import Image from "next/image";
import React from "react";
import journey from "@/assets/journey.jpg";
import success from "@/assets/success.jpg";
import mission from "@/assets/mission.jpg";
import vision from "@/assets/vision.jpg";
import working from "@/assets/working.png";
import perfect from "@/assets/perfect.png";
import analyse from "@/assets/analyse.png";
import ethics from "@/assets/ethics.png";
import technology from "@/assets/technology.png";
import partnership from "@/assets/partnership.png";

const Journey = () => {
  return (
    <>
      <div className="flex justify-center p-4 sm:p-0  bg-[#F7F8FC]">
        <div className=" w-[80%] sm:w-[100%] p-4 justify-center items-center">
          <h1 className="text-5xl sm:text-3xl font-bold p-4">
            Our <span className="text-red">Journey</span>{" "}
          </h1>
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap  bg-primary-light shadow-2xl rounded-lg p-2 mt-5 sm:mt-0">
              <Image
                src={journey}
                alt="journey"
                className="w-[35%] h-[35%] sm:w-[100%]"
              />
              <p className=" w-[65%]  mt-10 sm:mt-0 sm:w-[100%] p-4 sm:p-3">
                <h1 className="text-red font-bold text-3xl sm:text-xl sm:mb-0 mb-8">
                  The Beginning
                </h1>
                FIITJEE was created in 1992 by the vision and toil of{" "}
                <span className="font-bold text-lg"> Mr. D. K. Goel,</span> a
                Mechanical Engineering Graduate from{" "}
                <span className="font-bold ">IIT Delhi.</span> We had a very
                humble beginning as a forum for IIT-JEE, with a vision to
                provide an ideal launch pad for serious JEE aspirants.Along the
                way to realization of this vision, we went beyond merely
                coaching for IIT-JEE. We actually started to make a difference
                in the way Students think and approach problems. We started to
                develop ways to enhance Students’ IQ. We started to leave an
                indelible mark on the Students who have undergone FIITJEE
                training.We started changing lives. And all this was not a sheer
                coincidence. It was the urge, the compelling desire, to always
                aspire for perfection and in the process,continuously keep on
                setting newer benchmarks of excellence, which enabled us and our
                Students to achieve what we have achieved.
              </p>
            </div>
            <div className="flex flex-wrap  bg-primary-light rounded-lg shadow-2xl p-2 mt-5 sm:mt-0">
              <p className=" w-[65%]  mt-10 sm:mt-0 sm:w-[100%] p-4 sm:p-3">
                <h1 className="text-red font-bold text-3xl sm:text-xl sm:mb-0 mb-8">
                  Our Success
                </h1>
                The Success of our Students was inspiring and so was their faith
                in FIITJEE. It was this faith that was a catalyst for our
                venturing into areas beyond IIT-JEE.It was this faith that
                prompted us to embark on a mission to provide Wholesome School
                Education to Students through FIITJEE Integrated School Programs
                like UDAYA Plus,SUPREME&PINNACLE, in a way so that there was no
                need for any type of coaching outside of the School System. In
                addition to the launch of FIITJEE Junior Colleges in
                Bhubaneswar,Hyderabad, Vijayawada & Visakhapatnam many
                like-minded Schools across the Country joined hands with us in
                this Student centric endeavor to create Ideal School Education
                platform for Students to get admission in IITs & US Universities
                without stress & tension along with huge success in Olympiads,
                SAT-I & SAT-II. And it was this faith only that again enabled us
                to create landmark success in NTSE.
              </p>
              <Image
                src={success}
                alt="success"
                className="w-[35%] h-[35%] sm:w-[100%]"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex justify-center flex-col items-center p-4 sm:p-0  ">
        <div className=" w-[80%] sm:w-[100%] p-4 justify-center flex flex-col items-center">
          <h1 className="text-red font-bold text-5xl sm:text-3xl">
            Our Mission
          </h1>
          <p className="mt-[3rem] sm:mt-2 text-2xl sm:text-lg">
            To create World's Best Institution that serves the society for
            thousands of years -may be perennially. To Make India Global Leader
            In Education, both In Not For Profit as well as For Profit Ventures.{" "}
          </p>
          <Image
            src={mission}
            alt="mission"
            className="w-[70%] h-[70%] sm:w-[100%]"
          />
        </div>
        <div className=" w-[80%] sm:w-[100%] p-4 justify-center flex flex-col items-center">
          <h1 className="text-red font-bold text-5xl sm:text-3xl">
            Our Vision
          </h1>
          <p className="mt-[3rem] sm:mt-2 text-2xl sm:text-lg">
            Keeping our mission in mind. we will establish a transformational
            leadership position in each of our projects across the globe. We
            will become a Comprehensive Global Leader In Education by 2030.
          </p>
          <Image
            src={vision}
            alt="mission"
            className="w-[70%] h-[70%] sm:w-[100%]"
          />
        </div>
      </div>
      <div className="flex justify-center p-4 sm:p-0  bg-[#F7F8FC]">
        <div className=" w-[80%] sm:w-[100%] p-4 justify-center items-center">
          <h1 className="text-5xl sm:text-3xl font-bold p-4">
            Our <span className="text-red">Guiding Principles</span>{" "}
          </h1>
          <div className="flex flex-col gap-5 p-5">
            <div className="flex justify-between">
              <Image
                src={working}
                alt="guiding principle"
                className="h-[4rem] w-[4rem] rounded-full"
              />
              <p className="items-center flex ml-5 ">
                Consciously work_ every moment of the day, to ensure that every
                student fully unravels his / her multidimensional talent 8,
                potential.{" "}
              </p>
            </div>
            <div className="flex ">
              <Image
                src={perfect}
                alt="guiding principle"
                className="h-[4rem] w-[4rem] rounded-full"
              />
              <p className="items-center flex ml-14 sm:ml-5 ">
                Be perfect in everything that we do. Perfection Is making the
                best efforts within the constraints of space. time 8, resources.{" "}
              </p>
            </div>
            <div className="flex ">
              <Image
                src={analyse}
                alt="guiding principle"
                className="h-[4rem] w-[4rem] rounded-full"
              />
              <p className="items-center flex ml-14 sm:ml-5 ">
                Analyse every task with fundamentals and accept existing
                practices If perfect otherwise innovate to move foward to
                achieve our Mission in consonance with our vision
              </p>
            </div>

            <div className="flex ">
              <Image
                src={ethics}
                alt="guiding principle"
                className="h-[4rem] w-[4rem] rounded-lg"
              />
              <p className="items-center flex ml-14 sm:ml-5 ">
                Work ethically to inspire everyone who comes in our contact.
              </p>
            </div>
            <div className="flex ">
              <Image
                src={technology}
                alt="guiding principle"
                className="h-[4rem] w-[4rem] rounded-full"
              />
              <p className="items-center flex ml-14 sm:ml-5 ">
                Utilise technology to connect students. parents. teachers,
                administrators. bureaucrats & the government for a collaborative
                efforts to transform global society. Facilitate information flow
                to all those who matter to humanity.
              </p>
            </div>
            <div className="flex ">
              <Image
                src={partnership}
                alt="guiding principle"
                className="h-[4rem] w-[4rem] rounded-full"
              />
              <p className="items-center flex ml-14 sm:ml-5 ">
                Establish Joint ventures & partnerships with compatible &
                synergistic individuals. associations, companies and governments
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
