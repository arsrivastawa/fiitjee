"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("https://fiitjee-bokaro.vercel.app/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        // Show toast notification
        toast.success("Topic added successfully");

        // Reset form inputs
        setTitle("");
        setDescription("");

        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="bg-[#F8FAFC]">
        <div className="bggg">
          <h1 className="text-5xl">Add Notices</h1>
          <span className="font-sm text-yellow">FIITJEE BOKARO </span>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[3rem]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[80%]">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border border-slate-500 px-8 py-2 rounded-lg"
            type="text"
            placeholder="Notice Title"
          />

          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="border border-slate-500 px-8 py-2 rounded-lg"
            type="text"
            placeholder="Add Link"
          />

          <button
            type="submit"
            className="bg-blue font-bold text-white py-3 px-6 rounded-lg text-primary-light"
          >
            Add Topic
          </button>
        </form>
      </div>
    </div>
  );
}
