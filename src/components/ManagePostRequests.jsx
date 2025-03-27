import React from "react";
import CustomButton from "../CustomButton";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { FaCircle } from "react-icons/fa";

const ManagePostRequests = () => {
  return (
    <div className=" w-[full] h-auto bg-white my-[2%] rounded-lg shadow-md p-5 flex items-center gap-4">
      <img src="/images/postimage.png" alt="postimage" />
      <div className="w-1/3">
        <h2 className="text-xl font-medium">
          Want to save time and increase your productivity?
        </h2>
        <p>To save time, increase productivity, and contribute to...</p>
      </div>
      <button className="flex border-2 items-center gap-2 border-gray-300 px-5 py-2 rounded-2xl">
        <span>
          <FaCircle className="text-xs text-[#F78B2D] border-none rounded-full" />
        </span>
        <h3>Event Launch</h3>
      </button>
      <div className="flex  items-center gap-2 ml-9">
        <h4>18/08 TUE 10:15</h4>
        <CustomButton text={"Edit"} icon={FiEdit3} />
        <CustomButton text={"Delete"} icon={MdDeleteOutline} />
      </div>
    </div>
  );
};

export default ManagePostRequests;
