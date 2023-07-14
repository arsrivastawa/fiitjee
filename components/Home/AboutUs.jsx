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
          <div className=" w-[45%] sm:w-[100%] ">
            <p className="   p-4 ">
              FIITJEE (Forum for Indian Institute of Technology and Joint
              Entrance Examination) is a renowned coaching institute in India.
              Established in 1992, FIITJEE specializes in preparing students for
              competitive exams like the Joint Entrance Examination (JEE). It
              has experienced faculty and comprehensive study materials to
              enhance problem-solving abilities and critical thinking skills.
            </p>
            <p className="  p-4">
              FIITJEE offers various programs for students at different levels.
              These include classroom coaching, integrated school programs,
              distance learning programs, and online test series. FIITJEE also
              conducts mock tests for self-assessment. It prepares students not
              only for JEE but also for exams like NTSE and KVPY. With a
              consistent track record of producing top-ranking students, FIITJEE
              is a trusted name in engineering entrance exam preparation.
            </p>
            <Link href="/about" className="p-4">
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
