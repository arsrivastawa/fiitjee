import Image from "next/image";
import Link from "next/link";
import React from "react";
import language from "@/assets/language.png";
import time from "@/assets/time.png";
import location from "@/assets/location.png";

import littlegine from "@/assets/course/4.png";
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
import assesment from "@/assets/assesment.png";
import twentyfour from "@/assets/24.png";
import nurturing from "@/assets/nurturing.png";

import Contact from "@/components/Contact";

export const metadata = {
  title: "FIITJEE Bokaro || Class 9 Offline Course",

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
              <Link href="/course"> Class 9 Offline Course </Link>
              <span> / </span>
              <Link href="/course/Udaya-8"> Ascent-9</Link>
            </div>
            <div className="flex flex-col justify-between  p-2">
              <h1 className="text-5xl font-bold sm:text-3xl ml-10 sm:ml-0 mt-5 sm:mt-0">
                Ascent
              </h1>
              <div className="flex sm:flex-wrap">
                <div className=" w-[60%] sm:w-[100%]">
                  <p className="ml-10 sm:ml-0  mt-5   ">
                    Our program is specifically designed for students who are
                    presently in Class VIII and will be transitioning to Class
                    IX in the year 2023. We aim to provide comprehensive
                    preparation to help these students excel not only in their
                    school board examinations but also in all scholastic and
                    competitive exams at the city, state, and national levels.
                    <span className="sm:hidden">
                      {" "}
                      Our curriculum is carefully crafted to cover all the
                      necessary subjects and topics, ensuring that students have
                      a strong foundation and the required knowledge to perform
                      well in these exams. We understand the significance of
                      exams like NTSE, NSEJS/IJSO, and RMO, and our program is
                      tailored to prepare students for these specific exams as
                      well. By providing a structured and focused approach, we
                      aim to empower students with the skills, knowledge, and
                      confidence to achieve success in their academic journey.
                    </span>
                    <span className=""> </span>
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
                      <span className="flex justify-center">500 hrs </span>
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
                        Eight-phase course coverage.
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
                        500 + hours of classroom teaching.
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
                This program comprehensively prepares you for school, boards and
                all scholastic & competitive exams at city, state & national
                level, including NTSE, NSEJS / IJSO, Pre-RMO & RMO by raising IQ
                of the students i.e. sharpen analytical skills & mental ability
                and evolve students’ thinking process making them capable of
                solving complex problems
              </p>
            </li>

            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              <p className=" flex gap-5 font-bold">
                <Image
                  src={guide}
                  alt="success"
                  className="h-[3rem] w-[3rem] "
                />
                This program lays a strong foundation for competitive exams like
                NEET, JEE Main & JEE Advanced etc. and helps students to easily
                adapt to the exponential increase in the level of academics in
                Class XI & XII vis-a-vis those who wait till Class XI to join a
                coaching institute. Along with Physics, Chemistry & Mathematics,
                Social studies & Biology are also taught in this program. Mental
                ability is exhaustively taken up.
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
                <span className="font-bold">8 phases.</span>
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
              <div className=" flex gap-5">
                <Image src={exam} alt="steps" className="h-[3rem] w-[3rem] " />{" "}
                <p>
                  <span className="font-bold">
                    All India Open Test Series for Target NTSE:
                  </span>
                  You can check your current level of preparedness for
                  Competitive exams and compete with Top students currently
                  studying in class X through this Open Test Series, at the
                  National Level which will also check the Fundamentals
                  Preparation for IIT-JEE on the topics of class IX / X.
                </p>
              </div>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className=" flex gap-5">
                <Image
                  src={assesment}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                <p>
                  <span className="font-bold">
                    Mock Board Test Series, Mock NTSE Test series across the
                    country for all FIITJEE students.
                  </span>
                </p>
              </div>
            </li>
            <li className="mt-2 flex gap-5 items-center bg-primary-light shadow-lg rounded-lg p-4">
              {" "}
              <div className=" flex gap-5">
                <Image
                  src={twentyfour}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                <p>
                  <span className="font-bold">
                    24/7 accessible Online Test Series for JEE Advanced with
                    deep analytics & insights
                  </span>
                </p>
              </div>
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
                <Image
                  src={nurturing}
                  alt="steps"
                  className="h-[3rem] w-[3rem] "
                />{" "}
                <p>
                  Special support /Additional coverage of syllabus for NSEJS
                  (Jr. Science Olympiad Stage-1) qualified students in class 9 &
                  10 for IJSO, as this Level demands topics from higher classes.
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
