import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ManagePostRequests from "./ManagePostRequests";
import { FaCircle, FaChevronDown } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { Button, DatePicker } from 'antd';
import AddImage from "../AddImage";
import CustomButton from "../CustomButton";

const ManagePosts = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Event Launch");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-[12%] flex justify-between items-center">
        <p className="text-xl">Hello, Admin</p>
        <button className="text-orange-400 px-4 h-10 border-2 border-orange-400 hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E] hover:text-white hover:border-none rounded-2xl">
          Create new Post
        </button>
      </div>

      {/* Tabs */}
      <Tabs>
        <TabList className="flex border-b border-gray-300">
          <Tab className="px-4 py-2 bg-[#F4E3D5] text-orange-400 rounded-t-lg focus:outline-none focus:bg-[#ED8326] focus:text-white cursor-pointer">
            View Post
          </Tab>
          <Tab className="px-4 py-2 bg-[#F4E3D5] text-orange-400 rounded-t-lg focus:outline-none focus:bg-[#ED8326] focus:text-white cursor-pointer">
            Add new Post
          </Tab>
        </TabList>

        {/* View Posts Tab */}
        <TabPanel>
          <ManagePostRequests />
          <ManagePostRequests />
          <ManagePostRequests />
        </TabPanel>

        {/* Add New Post Tab */}
        <TabPanel>
          <div className="w-full h-auto bg-white my-5 rounded-lg shadow-md p-5">
            <h2 className="font-medium text-2xl">Create Post</h2>

            <div className="font-medium flex justify-between items-center mt-4">
              <h2>Sharing</h2>
              <div className="relative">
                <button
                  className="flex items-center gap-2 bg-[#F2F2F2] w-[204px] h-[39px] rounded-2xl justify-center"
                  onClick={toggleDropdown}
                >
                  <FaCircle className="text-xs text-[#F78B2D] border-none rounded-full" />
                  <h3 className="text-[#C05900]">{selectedOption}</h3>
                  <FaChevronDown className="text-[#C05900]" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                    <ul>
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleSelect("Event Launch")}
                      >
                        Event Launch
                      </li>
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleSelect("Product Release")}
                      >
                        Product Release
                      </li>
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleSelect("Company Update")}
                      >
                        Company Update
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="border-2 mt-3 px-3 py-5 h-[50vh] border-[#E47D23] rounded-2xl flex flex-col justify-between">
              <div className="font-medium h-[30%]">
                <p>
                  Transform your social media game with our cutting-edge tool!
                  Our platform uses AI technology to streamline social media
                  management, offering helpful insights and suggestions for your
                  campaigns. Save time and boost efficiency with automated
                  scheduling, analytics, and content creation. Keep your brand
                  ahead of the competition with sentiment analysis and
                  personalized content. Take your social media presence to the
                  next level with our AI-powered management tool. Sign up now!
                  #AI #SocialMedia #ProductLaunch 💪✨
                </p>
              </div>

              <div className="flex gap-4">
                <AddImage />
                <AddImage />
                <AddImage />
              </div>
            </div>

            <div className=" mt-4 flex justify-between px-8 py-2 bg-[#F2F2F2] rounded-2xl">
              <div className="flex gap-3 text-2xl text-[#C05900] ">
                <CiFaceSmile />
                <CiImageOn />
                <IoVideocamOutline />
                <MdAttachFile className="text-[20px]" />
              </div>
              <div>
                
              <DatePicker placeholder="select Event Date" class />

              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button className="flex items-center gap-2 w-[250px] h-[45px] rounded-lg text-l font-medium justify-center bg-[#f78b2d] text-white">Approval</button>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ManagePosts;
