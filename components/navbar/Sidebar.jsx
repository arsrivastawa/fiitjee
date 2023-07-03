"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hamburger.module.css";
import Logo from "../../assets/logo.png";
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
        <Link href="https://fiitjeedhanbad.com/about.html" legacyBehavior>
          <a className={styles.navLink} target="_blank">
            Why FIITJEE
          </a>
        </Link>
        <Link href="https://fiitjeedhanbad.com/contact.html" legacyBehavior>
          <a className={styles.navLink} target="_blank">
            Admission
          </a>
        </Link>
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
    </section>,
    document.getElementById("overlay")
  );
}
export default Sidebar;
