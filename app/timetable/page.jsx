import TopicsList from "@/components/TopicsList";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link href="/addTopic">Add Topic</Link>
      <TopicsList />
    </div>
  );
};

export default page;
