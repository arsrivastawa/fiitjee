"use client";
import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = () => {
    setIsClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyV4y5s8yckHHuGyI3axiZJz0UGCRLn9s0EsiT0MWg3nFUaeTtBzdG3to9KkdqaeXM/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Form submitted successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });

    alert("Form submitted successfully");
    window.location.reload();
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  useEffect(() => {
    // Scroll to the top of the screen on component mount
    window.scrollTo(0, 0);
  }, [handleSubmit]);

  return (
    <div className="p-4 mt-5 sm:mt-0">
      <div className="flex justify-center flex-col items-center">
        <h1 className="font-bold text-5xl sm:text-3xl">
          Get in <span className="text-red">Touch</span>{" "}
        </h1>
        <span>Fill the form to get instant call back form US</span>
      </div>

      <div className="mt-5 sm:mt-0">
        <div className="flex bg-rd justify-center">
          <div className="w-[60%] sm:w-[100%] items-center">
            <form
              className="flex flex-col sm:item-center gap-4 p-4"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-between gap-6 flex-wrap">
                <div className="text-black text-base leading-6 font-normal tracking-tight border-box cursor-text inline-flex items-center relative font-rubik">
                  <input
                    placeholder="Your Name"
                    name="Name"
                    type="text"
                    required
                    className="text-base leading-6 bg-opacity-0 border-b-golden border-b border-primary border-solid w-[25rem] sm:w-[18rem] h-6 p-1 box-border outline-none appearance-none"
                  />
                </div>
                <div className="text-black text-base leading-6 font-normal tracking-tight border-box cursor-text inline-flex items-center relative font-rubik">
                  <input
                    placeholder="Your Email"
                    name="Email"
                    type="text"
                    required
                    className="text-base leading-6 bg-opacity-0 border-b-golden border-b border-primary border-solid w-[25rem] sm:w-[18rem] h-6 p-1 box-border outline-none appearance-none"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-6 flex-wrap">
                <input
                  placeholder="Your Mobile Number"
                  name="Number"
                  type="tel"
                  required
                  className="text-base leading-6 bg-opacity-0 border-b-golden border-b border-primary border-solid w-[25rem] sm:w-[18rem] h-6 p-1 box-border outline-none appearance-none"
                />
                <div className="relative">
                  <select
                    name="Class"
                    required
                    className="text-base leading-6 bg-opacity-0 border-b-golden border-b bg-primary-light border-primary border-solid w-[25rem] sm:w-[18rem] h-6  pl-2 pr-8 box-border outline-none appearance-none text-[#A7ADB8]"
                  >
                    <option
                      value=""
                      className="text-base leading-6 text-primary"
                    >
                      Select Your Class
                    </option>
                    <option value="6" className="text-primary">
                      Class 6
                    </option>
                    <option value="7" className="text-primary">
                      Class 7
                    </option>
                    <option value="8" className="text-primary">
                      Class 8
                    </option>
                    <option value="9" className="text-primary">
                      Class 9
                    </option>
                    <option value="10" className="text-primary">
                      Class 10
                    </option>
                    <option value="11" className="text-primary">
                      Class 11
                    </option>
                    <option value="12" className="text-primary">
                      Class 12
                    </option>
                    <option value="13" className="text-primary">
                      Class 13
                    </option>
                  </select>
                  <div
                    className="absolute right-2 top-2 cursor-pointer"
                    onClick={handleClick}
                  >
                    {isOpen ? (
                      <FiChevronUp className="text-gray-500" />
                    ) : (
                      <FiChevronDown className="text-gray-500" />
                    )}
                  </div>
                </div>
              </div>
              <input
                placeholder="Your Message"
                name="Message"
                type="text"
                required
                className="w-full h-[5rem] text-base leading-6 bg-opacity-0 border-b-golden border-b border-primary border-solid sm:w-[18rem] p-1 box-border outline-none appearance-none animate-pulse"
              />
              <div className="bg-red p-4 w-[10rem] flex rounded-lg justify-center">
                <input
                  name="Name"
                  type="submit"
                  value="Submit"
                  className="cursor-pointer font-bold text-primary-light text-base leading-6 tracking-tight border-box inline-flex items-center relative font-rubik"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
