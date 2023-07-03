"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
// import Button from "../button/Button";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import Sidebar from "./Sidebar";
// import { Dropdown } from "@nextui-org/react";

const SpanStyle = {
  zIndex: 1,
  color: "inherit",
  transition: "all 300ms ease-in-out",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Creating a dynamic parent div for the sidebar to act as portal's root
    const div = document.createElement("div");
    div.setAttribute("id", "overlay");
    document.querySelector("body").appendChild(div);
    return () => div.remove();
  }, []);

  useEffect(() => {
    let prevScroll = window.pageYOffset;
    const handleScroll = () => {
      const navList = document.getElementById("navList");
      const navbar = document.getElementById("navbar");
      const title = document.getElementById("hnccTitle");
      const height = navbar.offsetHeight;

      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > height + 60) {
        navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.2)";
      } else {
        navbar.style.border = "none";
      }

      if (prevScroll < currentScrollPos) {
        // navList.classList.add('fade-up');
        // title.classList.add('fade-up');
        navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.2)";
      } else {
        navList.classList.remove("fade-up");
        // title.classList.remove("fade-up");
      }

      prevScroll = currentScrollPos;
    };
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { key: "new", name: "New File" },
    { key: "copy", name: "Copy Link" },
    { key: "edit", name: "Edit File" },
    { key: "delete", name: "Delete File" },
  ];
  const [selectedColor, setSelectedColor] = React.useState("default");
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === "option1") {
      window.location.href = "/course";
    } else if (selectedOption === "option2") {
      window.location.href = "https://www.fiitjee.com/admission";
    } else if (selectedOption === "option3") {
      window.location.href = "https://www.example3.com";
    }
  };

  return (
    <section id="navbar" className={`${styles.navbar}`}>
      <div className="">
        <Link href="/" legacyBehavior>
          <a className="flex items-center flex-col">
            <Image
              src={Logo}
              alt="FIITJEE Dhanbad Logo"
              className="h-[3rem] w-[8rem] mt-[1rem] hidden sm:block"
            />
            {/* <span>Dhanbad Center</span> */}
          </a>
        </Link>
      </div>
      <div id="navList" className={`${styles.navbarList} flex justify-center`}>
        <Link href="https://fiitjeedhanbad.com/about.html" legacyBehavior>
          <a className={styles.navLink} target="_blank">
            About FIITJEE
          </a>
        </Link>

        <Link href="https://fiitjeedhanbad.com/contact.html" legacyBehavior>
          <a className={styles.navLink} target="_blank">
            Why FIITJEE
          </a>
        </Link>

        <select
          value={selectedValue}
          onChange={handleSelect}
          // className="bg-primary font-bold border-none hover:bg-yellow hover:text-primary hover:p-2 rounded-md selection:bg-yellow"
          className={`${styles.navLink} bg-primary `}
        >
          <option value="hi" className="bg-primary text-primary-light">
            Admissions
          </option>
          <option
            value="option1"
            className=" bg-primary hover:bg-yellow cursor-pointer text-primary-light p-[3rem]"
          >
            Course
          </option>

          <option
            value="option2"
            className="hover:p-5 bg-primary text-primary-light p-[2rem]"
          >
            Admission Process
          </option>
        </select>
        <Link href="https://fiitjeedhanbad.com/contact.html" legacyBehavior>
          <a className={styles.navLink} target="_blank">
            Student Corner
          </a>
        </Link>
        <Link href="https://fiitjeedhanbad.com/contact.html" legacyBehavior>
          <a className={styles.navLink} target="_blank">
            Gallery
          </a>
        </Link>
        <Link href="https://fiitjeedhanbad.com/contact.html" legacyBehavior>
          <a className={styles.navLink} target="_blank">
            Contact Us
          </a>
        </Link>
      </div>

      <div
        id="hamburger"
        onClick={() => setIsOpen(true)}
        className={styles.humburgerMenu}
      >
        <HiMenu size={32} className="block" />
      </div>
      <Sidebar isMounted={isOpen} unmount={() => setIsOpen(false)} />
    </section>
  );
};

export default Navbar;
