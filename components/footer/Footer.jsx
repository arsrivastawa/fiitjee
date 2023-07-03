import styles from "./style.js";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link.js";
import call from "@/assets/call.png";
import gmail from "@/assets/gmail.png";
import whatsapp from "@/assets/whatsapp.png";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import youtube from "@/assets/youtube.png";

const Footer = () => (
  <div className="bg-[#212324] mb-0">
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col m-10 `}
    >
      <div
        className={`${styles.flexStart} flex flex-row md:flex-row  mb-8 w-full`}
      >
        <div className="flex-[1] flex flex-col justify-start mt-16 mr-10">
          <Link href="/" legacyBehavior>
            <a className="flex  flex-col">
              <Image
                src={Logo}
                alt="FiitJee"
                className="w-[166px] h-[92.14px] object-contain"
              />
              {/* <span className="ml-2">Dhanbad Center</span> */}
            </a>
          </Link>
          <p
            className={`${styles.paragraph} text-3xl ml-5 mt-4 max-w-[312px] text-primary-light sm:text-xs`}
          >
            Where success is a Habit!
          </p>
          <div className="flex ml-5 mt-2 gap-3">
            <a href="https://www.facebook.com/fiitjeedhanbad/" target="_blank">
              <Image className="h-[1.5rem] w-[1.5rem]" src={facebook}></Image>
            </a>
            <a href="https://www.instagram.com/fiitjeedhanbad/" target="_blank">
              <Image className="h-[1.5rem] w-[1.5rem]" src={instagram}></Image>
            </a>
            <a
              href="https://www.youtube.com/channel/UC0PViQRw5PdjiP6y1CE0X-g"
              target="_blank"
            >
              <Image className="h-[1.5rem] w-[1.5rem]" src={youtube}></Image>
            </a>
          </div>
        </div>
        <div className="flex-[1.5]  flex flex-row justify-between flex-wrap md:mt-0 mt-10 text-red sm:text-sm">
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px] text-primary-light sm:text-sm">
            <h4
              className={`flex flex-col text-2xl ss:my-0 my-4 min-w-[150px] text-yellow sm:text-sm`}
            >
              Useful Links
            </h4>
            <ul className="list-none ">
              <li
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
              >
                <Link
                  href="https://fiitjeedhanbad.com/about.html"
                  legacyBehavior
                >
                  <a className="text-white hover:text-red" target="_blank">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://fiitjeedhanbad.com/program.html"
                  legacyBehavior
                >
                  <a className="text-white hover:text-red" target="_blank">
                    Programs
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://fiitjeedhanbad.com/faqs.html"
                  legacyBehavior
                >
                  <a className="text-white hover:text-red">FAQ's</a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://fiitjeedhanbad.com/admissions.html"
                  legacyBehavior
                >
                  <a className="text-white hover:text-red" target="_blank">
                    Admissions
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px] text-primary-light sm:text-sm">
            <h4
              className={`flex flex-col text-2xl ss:my-0 my-4 min-w-[150px] text-yellow sm:text-sm`}
            >
              Competitive Exams
            </h4>
            <ul className="list-none ">
              <li
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
              >
                <Link
                  href="https://fiitjeedhanbad.com/competitive/jeeadvanced.html"
                  legacyBehavior
                >
                  <a className="text-white hover:text-red" target="_blank">
                    JEE Advanced
                  </a>
                </Link>
              </li>
              <li
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
              >
                <Link
                  href="https://fiitjeedhanbad.com/competitive/jeemains.html"
                  legacyBehavior
                >
                  <a className="text-white hover:text-red" target="_blank">
                    JEE Mains
                  </a>
                </Link>
              </li>
              <li
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
              >
                <Link
                  href="https://fiitjeedhanbad.com/competitive/ntse.html"
                  legacyBehavior
                >
                  <a className="text-white hover:text-red" target="_blank">
                    NTES
                  </a>
                </Link>
              </li>
              <li
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
              >
                <Link
                  href="https://fiitjeedhanbad.com/competitive/olympiads.html"
                  legacyBehavior
                >
                  <a className="text-white hover:text-red" target="_blank">
                    Olympiads
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px] text-primary-light sm:text-sm">
            <h4
              className={`flex flex-col text-2xl ss:my-0 my-4 min-w-[150px] text-yellow sm:text-sm`}
            >
              Address
            </h4>
            <span className={`overflow-auto`}>
              Tara Apartment, Plot No. 2311-2313, <br /> Mouza saraidhela,{" "}
              <br /> Dhanbad, Jharkhand, 828127
            </span>
            <div className="flex gap-3 mt-2">
              <a href="tel:+917280005056" target="_blank">
                <Image className="h-[1.5rem] w-[1.5rem]" src={call}></Image>
              </a>
              <a href="https://wa.me/7280005056" target="_blank">
                <Image className="h-[1.5rem] w-[1.5rem]" src={whatsapp}></Image>
              </a>
              <a href="mailto:info.fiitjeedhanbad@gmail.com" target="_blank">
                <Image className="h-[1.5rem] w-[1.5rem]" src={gmail}></Image>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] mb-0">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-[#808080] ">
          Copyright Ⓒ 2023 FIITJEE. All Rights Reserved.
        </p>
      </div>
    </section>
  </div>
);

export default Footer;
