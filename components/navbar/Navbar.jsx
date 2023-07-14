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
import { Dropdown } from "@nextui-org/react";
import { Margin } from "@mui/icons-material";
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
      <div
        id="navList"
        className={`${styles.navbarList} flex justify-center sm:hidden`}
      >
        <Link href="/about" legacyBehavior>
          <a className={styles.navLink}>About FIITJEE</a>
        </Link>

        <Link href="/why" legacyBehavior>
          <a className={styles.navLink}>Why FIITJEE</a>
        </Link>

        <Dropdown>
          <Dropdown.Button
            isDisabled
            style={{ color: "#fff", TextColor: "black" }}
            css={"background: red"}
            light
          >
            {" "}
            <span className="text-primary-light font-bold text-lg sm:hidden">
              Admission
            </span>{" "}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Actions"
            variant="default"
            background="red"
            textColor="white"
            color={"error"}
          >
            <Dropdown.Item key="new" description="Register for the course">
              <Link href="/course" className="font-bold ">
                Course <span className="invisible">Lorem, ipsum </span>
              </Link>
            </Dropdown.Item>

            <Dropdown.Item key="copy">
              {" "}
              <Link
                href="https://www.fiitjee.com/admission"
                className="font-bold "
              >
                Admission Process
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Button
            isDisabled
            style={{ color: "#fff", TextColor: "black" }}
            css={"background: red"}
            light
          >
            {" "}
            <span className="text-primary-light font-bold text-lg">
              Student Corner
            </span>{" "}
          </Dropdown.Button>
          <Dropdown.Menu
            background="red"
            textColor="white"
            color={"error"}
            variant="default"
            aria-label="Actions"
          >
            <Dropdown.Item>
              <Link href="/notice" className="font-bold ">
                Notice
              </Link>
            </Dropdown.Item>

            <Dropdown.Item>
              {" "}
              <Link
                href="https://www.fiitjee.com/admission"
                className="font-bold "
              >
                Previous Year Solution
              </Link>
            </Dropdown.Item>

            <Dropdown.Item>
              {" "}
              <Link
                href="https://www.iitjeetoppers.com/"
                className="font-bold "
              >
                Past Results
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Link
                href="https://www.fiitjee.com/admission"
                className="font-bold "
              >
                FAQ's
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Link href="/gallery" className="font-bold ">
                Gallery
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Button
            isDisabled
            style={{ color: "#fff", TextColor: "black" }}
            css={"background: red"}
            light
          >
            {" "}
            <span className="text-primary-light font-bold text-lg">
              Downloads
            </span>{" "}
          </Dropdown.Button>
          <Dropdown.Menu
            background="red"
            textColor="white"
            color={"error"}
            variant="default"
            aria-label="Actions"
          >
            <Dropdown.Item key="new" description="Register for the course">
              <Link
                href="https://fiitjee.com/downloads/e-brochures"
                className="font-bold "
              >
                E-Brochures
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              key="reg"
              style={{ color: "#fff", TextColor: "black" }}
              description="Register for the course"
            >
              <Link
                href="https://www.fiitjeesouthdelhi.co.in/web-docs/Registration-Form.pdf"
                className="font-bold "
              >
                Registeration Form
              </Link>
            </Dropdown.Item>

            <Dropdown.Item key="ef">
              {" "}
              <Link
                href="https://fiitjee.com/downloads/enrollment-forms"
                className="font-bold "
              >
                Enrollment Form
              </Link>
            </Dropdown.Item>
            <Dropdown.Item key="tf">
              {" "}
              <Link
                href="https://cms.fiitjee.com/Resources/DownloadCentre/Document_Pdf_27.pdf"
                className="font-bold "
              >
                Transfer Form
              </Link>
            </Dropdown.Item>
            <Dropdown.Item key="aff" className="mt-5">
              {" "}
              <Link
                href="https://cms.fiitjee.com/Resources/DownloadCentre/Document_Pdf_21.pdf"
                className="font-bold mt-5 "
              >
                Tuition Fee Waiver Affidavit
              </Link>
            </Dropdown.Item>
            <Dropdown.Item key="sc" className="mt-5">
              {" "}
              <Link
                href="https://cms.fiitjee.com/Resources/DownloadCentre/Document_Pdf_28.pdf"
                className="font-bold mt-5 "
              >
                Format for Claim of Scholarship
              </Link>
            </Dropdown.Item>
            <Dropdown.Item key="fj" className="mt-5 mb-5">
              {" "}
              <Link
                href="https://cms.fiitjee.com/Resources/DownloadCentre/Document_Pdf_19.pdf"
                className="font-bold "
              >
                Application Form for FIITJEE Awards
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Link href="/contact-us" legacyBehavior>
          <a className={styles.navLink}>Contact Us</a>
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
