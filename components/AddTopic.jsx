import React from "react";

const AddTopic = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="flex flex-col gap-3 mt-8 w-[70%]">
        <input
          type="text"
          className="border border-gray px-8 py-2"
          placeholder="Topic Title"
        />
        <input
          type="text"
          className="border border-gray px-8 py-2"
          placeholder="Topic description"
        />

        <button className="bg-blue text-primary-light px-8 py-2">
          Add Topic
        </button>
      </form>
    </div>
  );
};

export default AddTopic;
