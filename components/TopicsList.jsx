"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiPencil } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    throw error; // Rethrow the error to handle it in the component
  }
};

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const data = await getTopics();
        setTopics(data.topics);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message
  }

  return (
    <div className="">
      <div className="bg-[#F8FAFC]">
        <div className="bggg">
          <h1 className="text-5xl">Notices</h1>
          <span className="font-sm text-yellow">FIITJEE BOKARO </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {topics.reverse().map((t) => (
          <div
            key={t._id}
            className=" p-4 border-2   border-gray rounded-lg my-3 flex justify-between gap-5  sm:flex-col  w-[80%] items-center"
          >
            <div className="">
              <h2 className="font-bold text-3xl text-primary">{t.title}</h2>
            </div>

            <div className="flex gap-3 bg-red p-3 rounded-lg">
              <Link href={`${t.description}`} legacyBehavior>
                <a href={`${t.description}`} target="_blank">
                  <div className="font-bold  text-primary-light">
                    Download Here
                  </div>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
