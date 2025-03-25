import React from "react";
import ResponsePending from "./ResponsePending";
import CustomButton from "../CustomButton";

function ManageAlumini() {
  return (
    <div className=" w-full h-screen py-[3%]">
      <div className="w-full h-[10%] flex justify-between items-center">
        <p className=" text-xl">Hello, Admin</p>
        <button className=" text-orange-400 px-4 h-10 border-2 border-orange-400 hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E] hover:text-white hover:border-none rounded-2xl">
          Create new Student
        </button>
      </div>
      <div className="w-full h-[25%] flex  justify-between items-center">
        <div className=" shadow-md hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E] hover:text-white rounded-xl bg-white h-[74%] w-[23%] flex flex-col items-center justify-center gap-4">
          <p className=" ">Total</p>
          <h1 className=" text-5xl">60</h1>
        </div>
        <div className="shadow-md hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E]  hover:text-white rounded-xl bg-white h-[74%] w-[23%] flex flex-col items-center justify-center text-green-800 gap-4">
          <p className="  ">Response Verified</p>
          <h1 className="  text-5xl">42</h1>
        </div>
        <div className="shadow-md hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E] text-yellow-500 hover:text-white rounded-xl bg-white h-[74%] w-[23%] flex flex-col items-center justify-center gap-4">
          <p className=" ">Response Pending</p>
          <h1 className="  text-5xl">12</h1>
        </div>
        <div className="shadow-md hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E] text-red-700 hover:text-white rounded-xl bg-white h-[74%] w-[23%] flex flex-col items-center justify-center gap-4">
          <p className="">Response Rejected</p>
          <h1 className="  text-5xl">06</h1>
        </div>
      </div>
      <div className="w-full flex gap-5">
        <div className="shadow-md rounded-2xl bg-white w-[64%] p-6 h-[52vh] mt-3.5 overflow-auto">
          <div className=" flex justify-between ">
            <h1>Response Pending</h1>
            <button className=" text-orange-400 h-fit">View all</button>
          </div>
        
          <ResponsePending username = {"Rajnish Manda"} bio ={"Design All the screen"} />
          <ResponsePending username = {"Tarun Alle"} bio ={"Design All the screen"} />
          <ResponsePending username = {"Vignesh Gaddam"} bio ={"Design All the screen"} />
          <ResponsePending username = {"Rajnish Manda"} bio ={"Design All the screen"} />
          <ResponsePending username = {"Tarun Alle"} bio ={"Design All the screen"} />
          <ResponsePending username = {"Vignesh Gaddam"} bio ={"Design All the screen"} />
          
          
        </div>
        <div className="shadow-md rounded-2xl bg-white w-[36%] p-6 h-auto mt-3.5">
          <img src="/images/gaugesample.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ManageAlumini;
