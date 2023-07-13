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
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className=" p-4 border-2 border-gray my-3 flex justify-between gap-5 items-start"
        >
          <div className="">
            <h2 className="font-bold text-3xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-3">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencil
                size={20}
                className="text-gray-500 hover:text-gray-700"
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
