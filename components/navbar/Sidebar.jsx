"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hamburger.module.css";
import Logo from "../../assets/logo.png";
import { Dropdown } from "@nextui-org/react";
// import Button from "../button/Button";
// import { Dropdown } from "@nextui-org/react";

const SpanStyle = {
  zIndex: 1,
  color: "inherit",
  transition: "all 300ms ease-in-out",
};

function Sidebar({ isMounted, unmount }) {
  const menuItems = [
    { key: "new", name: "New File" },
    { key: "copy", name: "Copy Link" },
    { key: "edit", name: "Edit File" },
    { key: "delete", name: "Delete File" },
  ];
  const [isTransitioning, setIsTransitioning] = useState(false);
  const documentWidthRef = useRef(null);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
      documentWidthRef.current = document.documentElement.clientWidth;
      document.documentElement.classList.add("scroll-lock");

      /*
        After locking the body scroll, the scrollbar is hidden, so we have to compensate for the extra space
        created due to no scrollbar by giving the document an extra right padding according to the extra created space
      */
      if (documentWidthRef.current !== document.documentElement.clientWidth) {
        document.documentElement.style.paddingRight = `${
          document.documentElement.clientWidth - documentWidthRef.current
        }px`;
      }
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
        document.documentElement.classList.remove("scroll-lock");
        document.documentElement.style.paddingRight = 0;
      }, 300);
    }

    return () => {
      clearTimeout(timeoutId);
      if (
        document.documentElement.classList.contains("scroll-lock") &&
        isTransitioning
      ) {
        document.documentElement.classList.remove("scroll-lock");
        document.documentElement.style.paddingRight = 0;
      }
    };
  }, [isMounted, isTransitioning]);

  if (!isMounted && !isTransitioning) return null;

  return createPortal(
    <section
      className={`${isTransitioning && isMounted ? styles.active : ""} ${
        styles.navbarWrapper
      }`.trim()}
    >
      <div className={styles.navbar}>
        <div>
          <Link href="/" legacyBehavior>
            <a className="flex items-center" onClick={unmount}>
              <Image
                src={Logo}
                alt="HnCC"
                height="10px"
                width="60px"
                className="h-[3rem] w-[9rem] items-center "
              />
            </a>
          </Link>
        </div>
        <div onClick={unmount} className="cursor-pointer">
          <CgClose size={32} className={styles.closeIcon} />
        </div>
      </div>

      <div id="navList" className={styles.navItems}>
        <Link href="/about" legacyBehavior>
          <a className={styles.navLink} target="_blank">
            About FIITJEE
          </a>
        </Link>
        <Link href="/why" legacyBehavior>
          <a className={styles.navLink} target="_blank">
            Why FIITJEE
          </a>
        </Link>
        <Dropdown>
          <Dropdown.Button
            isDisabled
            style={{ color: "#000", TextColor: "black" }}
            css={"background: red"}
            light
          >
            {" "}
            <span className="text-primary font-bold text-lg sm:hidden">
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
            style={{ color: "#000", TextColor: "black" }}
            css={"background: red"}
            light
          >
            {" "}
            <span className="text-primary font-bold text-lg">
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
              <Link href="/faq" className="font-bold ">
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
            style={{ color: "#000", TextColor: "black" }}
            css={"background: red"}
            light
          >
            {" "}
            <span className="text-primary font-bold text-lg">
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
          <a className={styles.navLink} target="_blank">
            Contact Us
          </a>
        </Link>
      </div>
    </section>,
    document.getElementById("overlay")
  );
}
export default Sidebar;
