import React from "react";

import register from "@/assets/register.jpg";
import result from "@/assets/result.jpg";
import mypat from "@/assets/mypat.jpg";

import Image from "next/image";
import Link from "next/link";

const Result = () => {
  return (
    <>
      <div className="bg-red">
        <div className="flex p-5 justify-center items-center overflow-auto flex-col gap-3">
          <h1 className="font-bold text-3xl sm:text-xl text-center text-primary-light">
            FIITJEE RESULTS, UPCOMING TEST SCHEDULE & REGISTRATION
          </h1>
          <h3 className="text-xl font-bold text-primary-light">
            Competitive exams like IITJEE, Olympiads etc. are coveted national
            level competitive examinations.
          </h3>
        </div>
        <div className="p-5 flex  gap-5 flex-wrap">
          <div className="flex gap-5 p-5 w-[45rem] flex-wrap items-center bg-primary-light">
            <Image
              src={register}
              className="h-[15rem] w-[15rem] border-primary "
            />
            <div className="">
              <h1 className="font-bold text-xl">
                REGISTER FOR FIITJEE ADMISSION TEST
              </h1>
              <p className="mt-5 text-left">
                FIITJEE’s Online Services <br /> Management Portal{" "}
                <Link
                  href="https://admissiontest.fiitjee.com/"
                  className="text-blue"
                  target="_blank"
                >
                  Click here
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-5 p-5 w-[45rem] flex-wrap items-center bg-primary-light">
            <Image
              src={result}
              className="h-[15rem] w-[15rem] border-primary "
            />
            <div className="">
              <h1 className="font-bold text-xl">ADMISSION TEST RESULTS</h1>
              <p className="mt-5 text-left">
                FIITJEE Admission Test / Reward Exam / <br /> Other Results{" "}
                <Link
                  href="https://testresults.fiitjee.com/"
                  className="text-blue"
                  target="_blank"
                >
                  Click here
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-5 p-5 w-[45rem] flex-wrap items-center bg-primary-light">
            <Image
              src={mypat}
              className="h-[15rem] w-[15rem] border-primary "
            />
            <div className="">
              <h1 className="font-bold text-xl">MYPAT TEST SERIES</h1>
              <p className="mt-5 text-left">
                for Students of Class VI, VII, VIII, IX, X, <br /> XII & XII
                appeared <br />
                <Link
                  href="https://fiitjee.mypat.in/"
                  className="text-blue"
                  target="_blank"
                >
                  Click here
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
