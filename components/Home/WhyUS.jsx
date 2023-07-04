import React from "react";
import { FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import teaching from "@/assets/teaching.png";
import coaching from "@/assets/coaching.png";
import gmp from "@/assets/gmp.png";
import Image from "next/image";

const WhyUS = () => {
  return (
    <div className="bg-[#F7F8FC] flex items-center justify-center p-4">
      <div className=" w-[90%] p-4 sm:w-[100%]">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-red text-3xl items-center font-bold p-4">
            Why FIITJEE?
          </h1>
          <h2 className="text-5xl font-bold sm:text-3xl">
            Empowering Study Efforts with <br /> Simplicity and Convenience
          </h2>
        </div>
        <div className="flex justify-center gap-5 flex-wrap p-4 mt-8">
          {/* <div className="bg-red break-words w-[25rem] sm:w-[40rem] p-4 rounded-md flex  flex-col items-center"> */}
          <div className="bg-[#fff] flex min-h-[330px] max-w-[380px] flex-col items-center gap-y-4 px-4 py-12 rounded-md border-b-[6px]  shadow-md z-20 ">
            <div className="bg-pink rounded-full flex justify-center w-[5rem] h-[5rem] items-center">
              <Image src={coaching} className="w-[3rem] h-[3rem]" />
            </div>
            <h1 className="text-center font-bold text-lg p-4">
              Pattern Proof Teaching
            </h1>
            <p className="p-4 sm:p-0 ">
              FIITJEE has always been preparing Students in a fundamental
              way.FIITJEE has been teaching in a comprehensive manner so that
              Students do well in IIT-JEE (irrespective of the pattern),
              Boards,NTSE, KVPY, Olympiads and Other Engineering Entrance Exams.
            </p>
          </div>
          <div className="bg-[#fff] flex min-h-[330px] max-w-[380px] flex-col items-center gap-y-4 px-4 py-12 rounded-md border-b-[6px]  shadow-md z-20">
            <div className="bg-blue rounded-full flex justify-center w-[5rem] h-[5rem] items-center">
              <Image
                src={teaching}
                alt="teaching"
                className="w-[3rem] h-[3rem]"
              />
            </div>
            <h1 className="text-center font-bold text-lg p-4">
              Presonalized Coaching
            </h1>
            <p className="p-4 sm:p-0 ">
              Individual attention is given to every Student irrespective of
              one’s standing in the merit at any point of time. We never
              increase our batch size beyond a limit, this facilitates proper
              Student-Faculty interaction. Our faculty is always willing to
              clear doubts of Students even individually, if required.
            </p>
          </div>
          <div className="bg-[#fff] flex min-h-[330px] max-w-[380px] flex-col items-center gap-y-4 px-4 py-12 rounded-md border-b-[6px]  shadow-md z-20">
            <div className="bg-yellow rounded-full flex justify-center w-[5rem] h-[5rem] items-center">
              <Image
                src={gmp}
                className="w-[3rem] h-[3rem] items-center  text-red"
              />
            </div>
            <h1 className="text-center font-bold text-lg p-4">
              Study Resources
            </h1>
            <p className="p-4 sm:p-0">
              FIITJEE's study resources have been prepared based on years of
              experience & expertise and it includes best quality practice
              assignment with different types of questions to give students a
              complete exposure to concepts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
``;
