import React from "react";
import styles from "./Notification.module.css";

const Notification = () => {
  return (
    <div className="bg-red text-primary-light overflow-hidden items-center justify-center sticky">
      <div className={`${styles.animate}`}>
        Welcome to FIITJEE Bokaro Center
      </div>
    </div>
  );
};

export default Notification;
