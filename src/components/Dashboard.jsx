import React, { useState } from 'react'
import ManageAlumini from './ManageAlumini'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiSealCheck } from "react-icons/pi";
import { MdManageAccounts } from "react-icons/md";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ManageCR from './ManageCR';
import ManagePosts from './ManagePosts';
import ManageSubscription from './ManageSubscription';
import Master from './Master';

const Dashboard = () => {

  const [isActive, setIsActive] = useState()

  const arr = [
    {
      isa: "manageAlumini",
      logo: <PiSealCheck />,
      name: "Manage Alumini",
    },
    {
      isa: "manageCR",
      logo: <MdManageAccounts />,
      name: "Manage CR",
    },
    {
      isa: "managePosts",
      logo: <BsFillPostcardHeartFill />,
      name: "Manage posts",
    },
    {
      isa: "manageSub",
      logo: <MdOutlineSubscriptions />,
      name: "Manage Subscription",
    },
    {
      isa: "master",
      logo: <IoGlobeOutline />,
      name: "Master",
    },
  ]

  return (
    <Tabs className=' flex bg-[#ededed] '>
      <div className=' w-[20%] h-dvh bg-[#262D34] flex flex-col text-white justify-between  py-[4%] '>
        <TabList className=' mt-[15%] flex flex-col  text-xl font-light cursor-pointer  '>
          <div className=' flex items-center self-center gap-7 pb-4.5 '>
            <h1>Dashboard</h1>
            <MdOutlineDashboardCustomize />
          </div>

          {arr.map((newArr, key) => (
            <Tab key={key} onClick={() => setIsActive(newArr.isa)} className={`py-[6%] pl-[15%] flex  items-center gap-3 border-b-1  border-b-white ${isActive == (newArr.isa) ? "text-[#F88C2E]  bg-gradient-to-r from-[#262D34] from-40% to-[#4f4843] border-r-orange-500 border-r-6" : ""} `}>
              {newArr.logo}
              <h1>{newArr.name}</h1>
            </Tab>
          ))}

        </TabList>
        <div className=' flex items-center  gap-3 self-center'>
          <IoLogOutSharp className=' text-orange-400 rounded-[50%] bg-[#b7b5b53d] p-4 w-[120%] h-[120%]' />
          <h1>Logout</h1>
        </div>
      </div>
      <div className='w-[85%]  p-[2%] '>
        <h1 className=' text-3xl'>Welcome</h1>
        <TabPanel><ManageAlumini /></TabPanel>
        <TabPanel><ManageCR /></TabPanel>
        <TabPanel><ManagePosts /></TabPanel>
        <TabPanel><ManageSubscription /></TabPanel>
        <TabPanel><Master /></TabPanel>
      </div>

    </Tabs>
  )
}

export default Dashboard