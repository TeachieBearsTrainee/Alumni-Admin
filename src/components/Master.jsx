import React from "react";
import ResponsePending from "./ResponsePending";
import { LuUserRoundSearch } from "react-icons/lu";

const Master = () => {
  return (
    <div className=" w-full h-screen ">
      <div className="w-full h-[12%] flex justify-between items-center">
        <p className=" text-xl">Hello, Admin</p>
        <button className=" text-orange-400 px-4 h-10 border-2 border-orange-400 hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E] hover:text-white hover:border-none rounded-2xl">
          Create new City
        </button>
      </div>
      <div>
        <button className=" bg-[#F4E3D5] text-orange-400 rounded-l-lg px-3 py-1 border-r-2 border-r-white">
          View City
        </button>
        <button className=" bg-[#ED8326] text-white  px-3 py-1 border-r-2 border-r-white">
          View State
        </button>
        <button className=" bg-[#ED8326] text-white rounded-r-lg px-3 py-1">
          View Country
        </button>
      </div>
      <div className=" w-[full] h-[70%] bg-white my-[2%] rounded-lg shadow-md p-5 overflow-auto">
        <h3 className="text-black font-medium">CITY'S</h3>
        <div className="relative w-full flex h-12 mt-3 border-gray-300 border-2 rounded-[1rem]">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl text-gray-400">
            <LuUserRoundSearch />
          </span>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            required
            className="pl-12 bg-transparent text-black w-full py-2 px-3 rounded-[1rem]"
          />
        </div>
        <ResponsePending username ={"MUMBAI"} bio={"Maharashtra India"}/>
        <ResponsePending username ={"HYDERABAD"} bio={"Telangana India"}/>
        <ResponsePending username ={"BENGALURU"} bio={"Karnataka India"}/>
        <ResponsePending username ={"MUMBAI"} bio={"Maharashtra India"}/>
        <ResponsePending username ={"HYDERABAD"} bio={"Telangana India"}/>
        <ResponsePending username ={"BENGALURU"} bio={"Karnataka India"}/>
        <ResponsePending username ={"MUMBAI"} bio={"Maharashtra India"}/>
        <ResponsePending username ={"HYDERABAD"} bio={"Telangana India"}/>
        <ResponsePending username ={"BENGALURU"} bio={"Karnataka India"}/>
        
        
      </div>
    </div>
  );
};

export default Master;
