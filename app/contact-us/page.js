import Contact from "@/components/Contact";
import React from "react";

export const metadata = {
  title: "Contact US",

  description: "Generated by create next app",
};

const page = () => {
  return (
    <div>
      <div>
        <div className="bg-[#F8FAFC]">
          <div className="bggg">
            <h1 className="text-5xl">Contact US</h1>
            <span className="font-sm text-yellow">FIITJEE BOKARO </span>
          </div>
        </div>
        <div className="mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308.46294125801!2d86.13282259357909!3d23.667678900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f423ad2b7bb373%3A0xa346f731ec4e7cca!2sFIITJEE%20Bokaro!5e0!3m2!1sen!2sin!4v1689350592337!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default page;
