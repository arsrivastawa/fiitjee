import TopicsList from "@/components/TopicsList";
import React from "react";

export const metadata = {
  title: "Notices",

  description: "Generated by create next app",
};

const page = () => {
  return (
    <div>
      {" "}
      <TopicsList />
    </div>
  );
};

export default page;