import Image from "next/image";
import React from "react";
import bg from "@/assets/bg.svg";
import chariman from "@/assets/chairman.png";

const Founder = () => {
  return (
    <div className="bg-[#FAC804] founder ">
      <div className="p-4 w-[80%] sm:w-[100%]  ml-[10rem] sm:ml-0">
        <h1 className="font-bold text-5xl sm:text-3xl  p-4 ">
          Meet Our <span className="text-red">Founder </span>
        </h1>
        <div className="h-[1px] w-full bg-red"></div>
        <div className="flex gap-5 sm:gap-0 justify-center sm:flex-wrap ">
          <Image
            src={chariman}
            alt="chariman"
            height={50}
            width={50}
            className="w-[30rem] h-[30rem] p-4 sm:w-[100%] sm:h-[20rem]"
          />
          <div className="flex w-[50%] bg-primary-light rounded-lg mt-5 bg-opacity-70 sm:w-[100%] flex-wrap gap-5 p-4">
            {/* <Image src={aboutUs} alt="about" className="w-[35rem]" /> */}
            <div className="  sm:w-[100%]">
              <p className="  sm:p-0 p-4">
                Every moment in life is a fresh beginning. That brings with it
                the boundless joy of new possibilities. And the pleasure is
                compounded when you know, you are about to realize a lofty goal.{" "}
                <br />
                Since the time we began in 1992, we have constantly strived for
                excellence. Like for the many young minds we have shaped, it’s
                the winning spirit that has been of essence. Even
                quintessential, if you look at it from our perspective. And
                winning is possible only when one has the power to perceive the
                need of the hour. <br /> FIITJEE has always been innovating to
                create excellence. I am sure the varied services that this
                web-site offers our existing and aspiring students will be a
                great boon to students. <br />
                Today FIITJEE, the first ‘corporatized’ institute for IIT-JEE
                and Other Engineering Entrance Exams training, enjoys a track
                record of unparalleled results. <br />
                Needless to say, the endeavor to nurture and even further enrich
                the quality of education will be our constant feature. As for
                the rest, there will always be changes. Undoubtedly, for the
                better. Wishing you the very bes
              </p>
              <div className="p-4">
                <h1 className=" sm:mt-5 text-3xl sm:p-0 sm:text-3lg font-bold text-red ">
                  D.K GOEL
                </h1>
                <span className=" sm:mt-[-2rem] sm:p-0 ">
                  Founder Chairman & Chief Mentor
                </span>
              </div>
              {/* <Link href="/" className="p-4">
              <button className="p-3 text-lg rounded-md text-primary-light bg-red ">
                Read More
              </button>
            </Link> */}
            </div>
          </div>
        </div>
        {/* <div className=" h-[2px]  w-full  bg-primary "></div> */}
      </div>
    </div>
  );
};

export default Founder;
