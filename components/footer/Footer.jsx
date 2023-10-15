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
  <div className="bg-[#212324] ">
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col    `}>
      <div
        className={`${styles.flexStart} flex flex-row md:flex-row  mb-8 w-full`}
      >
        <div className="flex-[1] flex flex-col justify-start mt-16 mr-15 ">
          <Link href="/" legacyBehavior>
            <a className="flex  flex-col">
              <Image
                src={Logo}
                alt="FiitJee"
                className="w-[166px] h-[92.14px] object-contain ml-5"
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
            <a href="https://www.facebook.com/FiitjeeBokaro/" target="_blank">
              <Image className="h-[1.5rem] w-[1.5rem]" src={facebook}></Image>
            </a>
            <a href="https://www.instagram.com/fiitjeebokaro/" target="_blank">
              <Image className="h-[1.5rem] w-[1.5rem]" src={instagram}></Image>
            </a>
            <a href="https://www.youtube.com/@fiitjee" target="_blank">
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
                <Link href="/about" legacyBehavior>
                  <a className="text-white hover:text-red">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/course" legacyBehavior>
                  <a className="text-white hover:text-red">Programs</a>
                </Link>
              </li>
              <li>
                <Link href="/course" legacyBehavior>
                  <a className="text-white hover:text-red">FAQ's</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.fiitjee.com/admission" legacyBehavior>
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
              Student Corner
            </h4>
            <ul className="list-none ">
              <li
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
              >
                <Link href="/notice" legacyBehavior>
                  <a className="text-white hover:text-red" target="_blank">
                    Notice
                  </a>
                </Link>
              </li>
              <li
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
              >
                <Link
                  href="https://www.fiitjee.com/downloads/jee-main-solutions-(earlier-aieee)"
                  legacyBehavior
                >
                  <a className="text-white hover:text-red" target="_blank">
                    Previous Year Solution
                  </a>
                </Link>
              </li>
              <li
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
              >
                <Link href="https://www.iitjeetoppers.com/" legacyBehavior>
                  <a className="text-white hover:text-red" target="_blank">
                    Past Results
                  </a>
                </Link>
              </li>
              <li
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
              >
                <Link href="/contact-us" legacyBehavior>
                  <a className="text-white hover:text-red" target="_blank">
                    Contact Us
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
              City Centre, B-1, Second Floor, <br /> Sector 4, Bokaro Steel
              City, <br />
              Jharkhand 827004
            </span>
            <div className="flex gap-3 mt-2">
              <a href="tel:+919835525520" target="_blank">
                <Image className="h-[1.5rem] w-[1.5rem]" src={call}></Image>
              </a>
              {/* <a href="https://wa.me/7280005056" target="_blank">
                <Image className="h-[1.5rem] w-[1.5rem]" src={whatsapp}></Image>
              </a> */}
              <a href="mailto:info.bokaro@fiitjee.com" target="_blank">
                <Image className="h-[1.5rem] w-[1.5rem]" src={gmail}></Image>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-col flex-col pt-6 border-t-[1px] border-t-[#3F3E45] mb-0">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-[#808080] ">
          Copyright Ⓒ 2023 FIITJEE. All Rights Reserved.
        </p>
        <Link
          href="https://pratik-srivastava.vercel.app/"
          className="mt-5"
          target="_blank"
        >
          <p className="text-primary-light font-bold">Developer Contact</p>
        </Link>
      </div>
    </section>
  </div>
);

export default Footer;
