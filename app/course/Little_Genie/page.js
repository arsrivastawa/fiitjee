import Image from "next/image";
import Link from "next/link";
import React from "react";
import language from "@/assets/language.png";
import time from "@/assets/time.png";
import location from "@/assets/location.png";

import littlegine from "@/assets/course/1.png";
import point from "@/assets/point.png";
import classroom from "@/assets/classroom.png";
import success from "@/assets/success.png";
import guide from "@/assets/guide.png";
import steps from "@/assets/steps.png";
import book from "@/assets/book.png";
import material from "@/assets/material.png";
import homework from "@/assets/homework.png";
import exam from "@/assets/exam.png";
import practice from "@/assets/practice.png";
import performance from "@/assets/performance.png";
import learining from "@/assets/learining.png";
import quiz from "@/assets/quiz.png";
import competition from "@/assets/competition.png";
import Contact from "@/components/Contact";

export const metadata = {
  title: "FIITJEE Bokaro || Little Genie",

  description: "Generated by create next app",
};

const page = () => {
  return (
    <>
      <div className="bg-[#F7F8FC]">
        <div className="course ">
          <div className="">
            <div className="flex gap-3 p-2 flex-wrap sm:gap-0">
              <Link href="/">Home </Link>
              <span> / </span>
              <Link href="/course"> Class 6 Offline Course </Link>
              <span> / </span>
              <Link href="/course/Little_Genie"> Little Genie</Link>
            </div>
            <div className="flex flex-col justify-between  p-2">
              <h1 className="text-5xl font-bold sm:text-3xl ml-10 sm:ml-0 mt-5 sm:mt-0">
                Little Genie
              </h1>
              <div className="flex sm:flex-wrap">
                <div className=" w-[60%] sm:w-[100%]">
                  <p className="ml-10 sm:ml-0  mt-5   ">
                    This program comprehensively prepares you for school and all
                    scholastic & competitive exams at city, state & national
                    level for your class, and lay a strong foundation for higher
                    level scholastic & competitive exams like NTSE, NSEJS /
                    IJSO, Pre-RMO, RMO & Green Olympiad by raising IQ of the
                    students i.e. sharpen analytical skills & mental ability and
                    evolve students thinking process making them capable of
                    solving complex problems.
                    <span className="sm:hidden">
                      {" "}
                      This program lays a strong foundation for competitive
                      exams like NEET, JEE Main & JEE Advanced etc. Along with
                      Physics, Chemistry & Mathematics, Biology is also taught
                      in these programs. Mental ability is exhaustively taken
                      up.
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-5">
                    <div className="flex ml-10 sm:ml-0  items-center gap-5 sm:gap-3 mt-3">
                      <Image
                        src={language}
                        alt="lang"
                        className="h-[2rem] w-[2rem]"
                      />{" "}
                      <span className="flex justify-center">
                        Hindi / English
                      </span>
                    </div>
                    <div className="flex ml-10 sm:ml-0  items-center sm:gap-3 gap-5 mt-3">
                      <Image
                        src={time}
                        alt="lang"
                        className="h-[2rem] w-[2rem]"
                      />{" "}
                      <span className="flex justify-center">175 hrs</span>
                    </div>
                  </div>
                  <div className="flex ml-10 sm:ml-0  items-center gap-5 sm:gap-3 mt-3">
                    <Image
                      src={location}
                      alt="lang"
                      className="h-[2rem] w-[2rem]"
                    />{" "}
                    <span className="flex justify-center">Offline Bokaro</span>
                  </div>
                </div>
                <div className=" w-[30%] ml-10 sm:ml-0 sm:mt-10 rounded-lg bg-primary-light  bg-opacity-40 sm:opacity-100  shadow-2xl text-primary sm:w-[100%] p-4 sm:p-2">
                  <Image
                    src={littlegine}
                    alt="littlegine"
                    className="rounded-lg"
                  />
                  <h1 className="mt-4 font-bold text-3xl sm:text-xl">
                    This Course Includes
                  </h1>
                  <ul>
                    <li className="mt-2 flex gap-5">
                      {" "}
                      <Image
                        src={point}
                        alt="point"
                        className="h-[2rem] w-[2rem]"
                      />
                      <span className="font-bold">
                        Four-phase course coverage.
                      </span>
                    </li>
                    <li className="mt-2 flex gap-5">
                      {" "}
                      <Image
                        src={point}
                        alt="point"
                        className="h-[2rem] w-[2rem]"
                      />
                      <span className="font-bold">
                        175 + hours of classroom teaching.
                      </span>
                    </li>
                    <li className="mt-2 flex gap-5">
                      {" "}
                      <Image
                        src={point}
                        alt="point"
                        className="h-[2rem] w-[2rem]"
                      />
                      <span className="font-bold">
                        Subjects: Science (Physics, Chemistry, Biology),
                        Mathematics, Mental Ability.
                      </span>
                    </li>
                    <li className="mt-2 flex gap-5">
                      {" "}
                      <Image
                        src={point}
                        alt="point"
                        className="h-[2rem] w-[2rem]"
                      />
                      <span className="font-bold">
                        Single comprehensive study material (by Megacosm
                        Cognitions).
                      </span>
                    </li>
                    <li className="mt-2 flex gap-5">
                      {" "}
                      <Image
                        src={point}
                        alt="point"
                        className="h-[2rem] w-[2rem]"
                      />
                      <span className="font-bold">
                        Chapter Practice Problems (CPP) for strong concept
                        knowledge.
                      </span>
                    </li>
                    <li className="mt-2 flex gap-5">
                      {" "}
                      <Image
                        src={point}
                        alt="point"
                        className="h-[2rem] w-[2rem]"
                      />
                      <span className="font-bold">
                        Common Phase Tests and exam practice.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[#F7F8FC]  mt-10 sm:mt-[43rem] ml-10 sm:ml-0 p-4 ">
          <h1 className="font-bold text-3xl sm:text-xl">
            PROGRAM <span className="text-red"> FOCUS & OBJECTIVE :</span>
          </h1>
          <ul className="p-4 flex sm:flex-wrap flex-col w-[60%] sm:w-[100%] overflow-auto gap-5">
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              <p className="flex gap-5">
                <Image
                  src={success}
                  alt="success"
                  className="h-[3rem] w-[3rem] "
                />
                Success is never defined in absolute sense. It is very much a
                subject of relative performance. Children need to imbibe the
                spirit of competitiveness from an early age and start
                preparation for major milestone achievements, well in advance so
                as to avoid stress and anxiety at a later stage.
              </p>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              <p className=" flex gap-5">
                <Image
                  src={classroom}
                  alt="success"
                  className="h-[3rem] w-[3rem] "
                />
                The Program Trains a Student for Overall Logical Thinking and
                Scientific Aptitude at an early age thereby transforming the
                Academic Life of Students. This is the time while a student
                Encounters Change in Academic Methodology from a text based
                Academics in Class V to a Matured Academic Life in Class VI and
                beyond.
              </p>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              <p className=" flex gap-5">
                <Image
                  src={guide}
                  alt="success"
                  className="h-[3rem] w-[3rem] "
                />
                This program will also guide the students to approach Science &
                Mathematics in an objective manner to solve complex numerical
                problems. Biology will also be an integral part of this Program.
                Parents will be able to notice substantial difference in the
                analytical skills and IQ of their little ones with this program.
              </p>
            </li>
          </ul>
          <h1 className="font-bold text-3xl mt-10 p-4 sm:mt-5 sm:text-xl">
            Course <span className="text-red">Structure :</span>
          </h1>
          <ul className="p-4 ">
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <Image
                src={steps}
                alt="steps"
                className="h-[3rem] w-[3rem] "
              />{" "}
              <p>
                Entire course will be covered in{" "}
                <span className="font-bold">4 phases.</span>
              </p>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <Image
                src={book}
                alt="steps"
                className="h-[3rem] w-[3rem] "
              />{" "}
              <p>
                Subjects covered will be{" "}
                <span className="font-bold">
                  {" "}
                  Science (Physics, Chemistry & Biology), Mathematics and Mental
                  Ability.
                </span>
              </p>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <p className=" flex gap-5">
                <Image
                  src={material}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                Single comprehensive study material (by Megacosm Cognitions):
                Additional problems will be supplemented wherever necessary
                students should not require any additional books etc.
              </p>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <Image
                src={homework}
                alt="steps"
                className="h-[3rem] w-[3rem] "
              />{" "}
              <p>Work Books for Home Assignment.</p>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <Image
                src={exam}
                alt="steps"
                className="h-[3rem] w-[3rem] "
              />{" "}
              <p className="font-bold">
                Common Phase Tests across the country.
              </p>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className=" flex gap-5">
                <Image
                  src={practice}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                <p>
                  <span className="font-bold text-xl sm:text-lg">
                    Chapter Practice Problems (CPP):
                  </span>{" "}
                  On each chapter Students will be given Chapter Practice
                  Problems which they have to attempt and submit before the
                  beginning of the next chapter. These solutions will be checked
                  by the faculty and will be returned to the Students with
                  remarks and suggestions. Thus helping every Student to have a
                  very strong command over fundamental concept knowledge very
                  crucial for getting Top ranks.
                </p>
              </div>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className=" flex gap-5">
                <Image
                  src={learining}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                <p>
                  <span className="font-bold text-xl sm:text-lg">
                    Class Learning Improvement Program (CLIP):
                  </span>{" "}
                  Icing on the cake of every class will be done through Class
                  Learning Improvement Program for those who have completed all
                  assignments to further help them get a higher Rank in
                  Competitive Exams.
                </p>
              </div>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className=" flex gap-5">
                <Image
                  src={performance}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                <p>
                  <span className="font-bold text-xl sm:text-lg">
                    Success Potential Index (SPI):
                  </span>{" "}
                  We are the only institute in India having the capability to
                  predict Success Potential Index (SPI) of a student. We
                  constantly encourage our students to emulate their Success
                  Potential Index (SPI)
                </p>
              </div>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className=" flex gap-5">
                <Image src={quiz} alt="steps" className="h-[3rem] w-[3rem] " />{" "}
                <p>
                  Students also gain important exam practice through quizzes,
                  phase tests, & mock tests (conducted in a simulated
                  environment giving the students a ‘feel’ of the real exam)
                  that can help them improve their examination temperament a
                  necessary element for success in any competitive exam
                </p>
              </div>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className=" flex gap-5">
                <Image
                  src={competition}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                <p>
                  <span className="font-bold text-xl sm:text-lg">
                    Relevant Competitive Examination:
                  </span>{" "}
                  This program comprehensively prepares you for school and all
                  scholastic & competitive exams at city, state & national level
                  for your class, and lay a strong foundation for higher level
                  scholastic & competitive exams like NTSE, NSEJS / IJSO,
                  Pre-RMO, RMO & Green Olympiad by raising IQ of the students
                  i.e. sharpen analytical skills & mental ability and evolve
                  students thinking process making them capable of solving
                  complex problems. This program lays a strong foundation for
                  competitive exams like NEET, JEE Main & JEE Advanced etc.
                  Along with Physics, Chemistry & Mathematics, Biology is also
                  taught in these programs. Mental ability is exhaustively taken
                  up.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>{" "}
      <Contact />
    </>
  );
};

export default page;
