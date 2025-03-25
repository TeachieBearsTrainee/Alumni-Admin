import React from "react";
import ManageRequests from "../ManageRequests";
import { useForm } from "react-hook-form";
import { LuUserRoundSearch } from "react-icons/lu";
import { MdOutlineMailOutline, MdPhone } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";

const ManageCR = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-full h-screen p-5 bg-gray-100">
      {/* Header */}
      <div className="w-full h-[12%] flex justify-between items-center">
        <p className="text-xl font-semibold">Hello, Admin</p>
        <button className="text-orange-400 px-4 h-10 border-2 border-orange-400 hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E] hover:text-white hover:border-none rounded-2xl">
          Create new CR
        </button>
      </div>

      {/* Main Content */}
      <div className="flex h-[70%] w-full justify-between gap-5 ">
        {/* Left Section */}
        <div className="shadow-md bg-white w-[58%] rounded-2xl p-4 overflow-auto">
          <h4 className="font-medium">Manage CR</h4>
          <ManageRequests
            username={"Rajnish Manda"}
            bio={"Design All the screen"}
          />
          <ManageRequests
            username={"Rajnish Manda"}
            bio={"Design All the screen"}
          />
          <ManageRequests
            username={"Rajnish Manda"}
            bio={"Design All the screen"}
          />
          <ManageRequests
            username={"Rajnish Manda"}
            bio={"Design All the screen"}
          />
          <ManageRequests
            username={"Rajnish Manda"}
            bio={"Design All the screen"}
          />
          <ManageRequests
            username={"Rajnish Manda"}
            bio={"Design All the screen"}
          />
        </div>

        {/* Right Section */}
        <div className="shadow-md bg-white w-[40%] rounded-2xl p-5 overflow-auto">
          <form>
            <div className="relative w-full flex h-12 mt-3 border-gray-300 border-2 rounded-[1rem]">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl text-gray-400">
                <LuUserRoundSearch />
              </span>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search Student for add details"
                required
                className="pl-12 bg-transparent text-black w-full py-2 px-3 rounded-[1rem]"
              />
            </div>

            <div className="relative flex flex-col gap-2 mt-4">
              <span className="absolute left-3 top-[70%] -translate-y-1/2 text-xl text-gray-400">
                <LuUserRoundSearch />
              </span>
              <label>Full Name:</label>
              <input
                {...register("Full Name")}
                placeholder="Enter Name"
                className="h-[45px] pl-12 rounded-[1rem] bg-[#F2F2F2]"
              />
            </div>
            {/* Email ID */}
            <div className="relative flex flex-col gap-2 mt-4">
              <span className="absolute left-3 top-[70%] -translate-y-1/2 text-xl text-gray-400">
                <MdOutlineMailOutline />
              </span>
              <label>Email ID:</label>
              <input
                {...register("email")}
                placeholder="Enter Email ID"
                type="email"
                className="h-[45px] pl-12 rounded-[1rem] bg-[#F2F2F2]"
              />
            </div>

            {/* Phone Number */}
            <div className="relative flex flex-col gap-2 mt-4">
              <span className="absolute left-3 top-[70%] -translate-y-1/2 text-xl text-gray-400">
                <MdPhone />
              </span>
              <label>Phone No:</label>
              <input
                {...register("phone")}
                placeholder="Enter Phone No"
                type="tel"
                className="h-[45px] pl-12 rounded-[1rem] bg-[#F2F2F2]"
              />
            </div>

            {/* Date of Birth */}
            <div className="relative flex flex-col gap-2 mt-4">
              <span className="absolute left-3 top-[70%] -translate-y-1/2 text-xl text-gray-400">
                <BsCalendar2Date />
              </span>
              <label>Date of Birth:</label>
              <input
                {...register("dob")}
                type="date"
                className="h-[45px] pl-12 rounded-[1rem] bg-[#F2F2F2]"
              />
            </div>

            {/* College Name */}
            <div className="relative flex flex-col gap-2 mt-4">
              <span className="absolute left-3 top-[70%] -translate-y-1/2 text-xl text-gray-400">
                <FaRegUser />
              </span>
              <label>College Name:</label>
              <input
                {...register("college")}
                placeholder="Enter College Name"
                className="h-[45px] pl-12 rounded-[1rem] bg-[#F2F2F2]"
              />
            </div>

            {/* Course Name */}
            <div className="relative flex flex-col gap-2 mt-4">
              <span className="absolute left-3 top-[70%] -translate-y-1/2 text-xl text-gray-400">
                <GiTeacher />
              </span>
              <label>Course Name:</label>
              <input
                {...register("course")}
                placeholder="Enter Course Name"
                className="h-[45px] pl-12 rounded-[1rem] bg-[#F2F2F2]"
              />
            </div>

            {/* Department */}
            <div className="relative flex flex-col gap-2 mt-4">
              <span className="absolute left-3 top-[70%] -translate-y-1/2 text-xl text-gray-400">
                <GiTeacher />
              </span>
              <label>Department:</label>
              <input
                {...register("department")}
                placeholder="Enter Department"
                className="h-[45px] pl-12 rounded-[1rem] bg-[#F2F2F2]"
              />
            </div>

            {/* Year of Admission */}
            <div className="relative flex flex-col gap-2 mt-4">
              <span className="absolute left-3 top-[70%] -translate-y-1/2 text-xl text-gray-400">
                <IoCalendarOutline />
              </span>
              <label>Year of Admission:</label>
              <input
                {...register("yearOfAdmission")}
                type="number"
                placeholder="Enter Year"
                className="h-[45px] pl-12 rounded-[1rem] bg-[#F2F2F2]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageCR;
