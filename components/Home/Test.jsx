import Link from "next/link";
import React from "react";

const Test = () => {
  return (
    <div className="bg-yellow  pb-10">
      <div className="p-[2rem] ml-[10rem]  sm:p-0 sm:ml-2">
        <div className="herder p-4 text-5xl  sm:text-3xl font-bold sm:p-3 ">
          Admission Test <span className="text-red">Dates</span>
        </div>
      </div>
      <div className="flex flex-wrap  items-center justify-center gap-10">
        <div className="bg-primary-light   space-y-4 rounded-xl px-5 py-7   shadow-xl md:w-[456px] md:py-10  w-[22rem] sm:w-[22rem]">
          <h1 className="items-center font-bold text-xl underline">
            {" "}
            For Class XI & XII Pass Students
          </h1>
          <span className="text-primary mt-10">
            Registration for 16th July Test date is also open for students of
            Class VII & Class IX at Chennai Centres
          </span>
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-xl">16th July 2023</span>
            <Link href="https://admissiontest.fiitjee.com/RegistrationV2.aspx">
              <button className="bg-red p-4 rounded-lg text-primary-light">
                Register Now
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-primary-light space-y-16 rounded-xl px-5 py-7   shadow-xl md:w-[456px] md:py-10  w-[22rem] h-[14rem] sm:w-[22rem]">
          <h1 className="items-center font-bold text-xl underline">
            {" "}
            For Class XI & XII Pass Students
          </h1>
          <div className="flex flex-col justify-center items-center mt-8">
            <span className="font-bold text-xl">30th July 2023</span>
            <Link href="https://admissiontest.fiitjee.com/RegistrationV2.aspx">
              <button className="bg-red p-4 rounded-lg text-primary-light">
                Register Now
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-primary-light space-y-16  rounded-xl px-5 py-7   shadow-xl md:w-[456px] md:py-10  w-[22rem] h-[14rem] sm:w-[22rem]">
          <h1 className="items-center font-bold text-xl underline">
            {" "}
            For Class XI & XII Pass Students
          </h1>
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-xl">6th August 2023</span>
            <Link href="https://admissiontest.fiitjee.com/RegistrationV2.aspx">
              <button className="bg-red p-4 rounded-lg text-primary-light">
                Register Now
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-primary-light space-y-16  rounded-xl px-5 py-7   shadow-xl md:w-[456px] md:py-10  w-[22rem] h-[14rem] sm:w-[22rem]">
          <h1 className="items-center font-bold text-xl underline">
            {" "}
            For Class XI & XII Pass Students
          </h1>
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-xl">20th August 2023</span>
            <Link href="https://admissiontest.fiitjee.com/RegistrationV2.aspx">
              <button className="bg-red p-4 rounded-lg text-primary-light">
                Register Now
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-primary-light space-y-16 rounded-xl px-5 py-7   shadow-xl md:w-[456px] md:py-10  w-[22rem] h-[14rem] sm:w-[22rem]">
          <div className="items-center flex justify-center">
            <h1 className="items-center justify-center font-bold text-xl underline">
              {" "}
              For XII Pass Students
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-xl">3rd September 2023</span>
            <Link href="https://admissiontest.fiitjee.com/RegistrationV2.aspx">
              <button className="bg-red p-4 rounded-lg text-primary-light">
                Register Now
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-primary-light space-y-16 rounded-xl px-5 py-7   shadow-xl md:w-[456px] md:py-10  w-[22rem] h-[14rem] sm:w-[22rem]">
          <div className="items-center flex justify-center">
            <h1 className="items-center font-bold text-xl underline">
              {" "}
              For XII Pass Students
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-xl">10th September 2023</span>
            <Link href="https://admissiontest.fiitjee.com/RegistrationV2.aspx">
              <button className="bg-red p-4 rounded-lg text-primary-light">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
