import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = () => {
  return (
    <button className="text-red">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
