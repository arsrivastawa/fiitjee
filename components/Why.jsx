import Image from "next/image";
import React from "react";
import teaching from "@/assets/teaching.jpg";
import coaching from "@/assets/coaching.jpg";
import study from "@/assets/study.jpg";

const Why = () => {
  return (
    <div>
      <div className="bg-[#F7F8FC] founder ">
        <div className="p-4 w-[80%] sm:w-[100%]  ml-[10rem] sm:ml-0">
          <h1 className="font-bold text-5xl sm:text-3xl  p-4 ">
            Our Pattern Proof Teaching
          </h1>

          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap  bg-primary-light shadow-2xl rounded-lg p-4 mt-5 sm:mt-0">
              <Image
                src={teaching}
                alt="journey"
                className="w-[25%] h-[25%] sm:w-[100%]"
              />
              <p className=" w-[65%]   sm:mt-0 sm:w-[100%] p-4 sm:p-3">
                FIITJEE has always been preparing Students in a fundamental
                way.FIITJEE has been teaching in a comprehensive manner so that
                Students do well in IIT-JEE (irrespective of the pattern),
                Boards,NTSE, KVPY, Olympiads and Other Engineering Entrance
                Exams. For many years, our Students have been securing
                admissions in the top 10 US Universities where admission is
                based on the performance of School + Last Board Exam and SAT-I,
                SAT-II, AP Exams & TOEFL.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 w-[80%] sm:w-[100%]  ml-[10rem] sm:ml-0">
          <h1 className="font-bold text-5xl sm:text-3xl  p-4 ">
            Our Personalized Coaching
          </h1>

          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap  bg-primary-light shadow-2xl rounded-lg p-4 mt-5 sm:mt-0">
              <p className=" w-[65%]   sm:mt-0 sm:w-[100%] p-4 sm:p-3">
                Individual attention is given to every Student irrespective of
                one’s standing in the merit at any point of time. We never
                increase our batch size beyond a limit, this facilitates proper
                Student-Faculty interaction. Our faculty is always willing to
                clear doubts of Students even individually, if required. Our
                focus is better results through conceptual clarity and constant
                support instead of increasing the batch size.
              </p>
              <Image
                src={coaching}
                alt="journey"
                className="w-[20%] h-[20%] mt-[-1rem] ml-[5rem] sm:ml-0 sm:w-[100%]"
              />
            </div>
          </div>
        </div>
        <div className="p-4 w-[80%] sm:w-[100%]  ml-[10rem] sm:ml-0">
          <h1 className="font-bold text-5xl sm:text-3xl  p-4 ">
            Our Study Resources
          </h1>

          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap  bg-primary-light shadow-2xl rounded-lg p-4 mt-5 sm:mt-0">
              <Image
                src={study}
                alt="journey"
                className="w-[25%] h-[25%] sm:w-[100%]"
              />
              <p className=" w-[65%]   sm:mt-0 sm:w-[100%] p-4 sm:p-3">
                FIITJEE's study resources are meticulously designed, drawing
                upon years of experience and expertise. These resources offer
                students a comprehensive learning experience by incorporating
                high-quality practice assignments that cover a wide range of
                question types. By providing students with diverse question
                formats, FIITJEE ensures that they gain a thorough understanding
                of key concepts. The practice assignments consist of carefully
                crafted questions that challenge students to apply their
                knowledge and think critically. This approach helps students
                develop a strong foundation and equips them with the necessary
                skills to excel in their academic pursuits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
