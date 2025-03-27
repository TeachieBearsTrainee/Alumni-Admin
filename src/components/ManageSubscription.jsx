import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ImFilter } from "react-icons/im";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiResetRightFill } from "react-icons/ri";
import { FaCircle} from "react-icons/fa";


const ManageSubscription = () => {
  const data = [
    {
      amount: 500,
      name: "Amit Kumar",
      date: "12 JAN 2021",
      type: "UPI",
      subscription: "SILVER",
    },
    {
      amount: 750,
      name: "Sneha Sharma",
      date: "23 MAR 2022",
      type: "CARD",
      subscription: "GOLD",
    },
    {
      amount: 600,
      name: "Vikram Singh",
      date: "5 JUL 2020",
      type: "BANK",
      subscription: "PLATINUM",
    },
    {
      amount: 450,
      name: "Neha Verma",
      date: "18 NOV 2023",
      type: "NEFT",
      subscription: "GOLD",
    },
    {
      amount: 900,
      name: "Rahul Mehta",
      date: "29 DEC 2018",
      type: "SCAN",
      subscription: "SILVER",
    },
  ];

  // Custom badge styling
  const subscriptionTemplate = (rowData) => {
    const badgeColors = {
      SILVER:
        "bg-[#D8C9FB] text-gray-700 w-[95px] h-[27px] flex items-center justify-center text-[10px] rounded-lg",
      GOLD: "bg-[#BFF1EF] text-gray-700 w-[95px] h-[27px] flex items-center justify-center text-[10px] rounded-lg",
      PLATINUM:
        "bg-[#BFDEFF] text-gray-700 w-[95px] h-[27px] flex items-center justify-center text-[10px] rounded-lg",
    };

    return (
      <span
        className={`px-3 py-1 rounded-lg text-xs font-semibold uppercase ${
          badgeColors[rowData.subscription] || "bg-gray-100 text-gray-700"
        }`}
      >
        {rowData.subscription}
      </span>
    );
  };

  return (
    <>
      <div className="w-full h-[10%] flex justify-between items-center my-7">
        <div className="flex gap-2 items-center text-xl">
          <IoIosArrowRoundBack className="text-2xl" />
          <p>Good Morning, Admin</p>
        </div>
        <button className=" text-orange-400 px-4 h-10 bg-white  rounded-2xl">
          Subscription
        </button>
      </div>

      <div className="flex gap-5 ">
        <div className="w-[60%] h-auto bg-white p-6 rounded-2xl shadow-md">
          <div className="flex  border-gray-400 border-1  mb-7 rounded-2xl bg-[#F9F9FB] items-center ">
            <div className="w-[10%] flex items-center justify-center">
              <ImFilter />
            </div>
            <div className="flex justify-between gap-2 items-center border-l-1 p-2 border-gray-400 w-[25%]">
              <h3>Subscription</h3>
              <MdOutlineKeyboardArrowDown className="text-2xl" />
            </div>
            <div className="flex justify-between gap-2 items-center border-l-1 p-2 border-gray-400 w-[20%]">
              <h3>Days</h3>
              <MdOutlineKeyboardArrowDown className="text-2xl" />
            </div>
            <div className="flex justify-between gap-2 items-center border-l-1 p-2 border-gray-400 w-[20%]">
              <h3>Status</h3>
              <MdOutlineKeyboardArrowDown className="text-2xl" />
            </div>

            <div className="flex gap-2 items-center text-[#EA0234] border-l-2 p-2 w-[20%]">
              <RiResetRightFill />
              <h3>Reset Filter</h3>
            </div>
          </div>

          <DataTable
            value={data}
            tableStyle={{ minWidth: "40rem" }}
            className="custom-table"
            rowClassName={() => "h-[80px]"}
          >
            <Column
              field="amount"
              header="AMOUNT"
              className="text-gray-800 font-medium"
            />
            <Column field="name" header="NAME" className="text-gray-800" />
            <Column field="date" header="DATE" className="text-gray-800" />
            <Column field="type" header="TYPE" className="text-gray-800" />
            <Column
              field="subscription"
              header="SUBSCRIPTION"
              body={subscriptionTemplate}
            />
          </DataTable>
        </div>

        <div className="w-[40%] h-auto bg-white p-6 rounded-2xl shadow-md">
          <h3>Income</h3>
          <div className=" flex mt-4">
            <img src="/images/demochart.png" alt="" />
            <div className="w-[50%] flex flex-col gap-2 m-7">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                    <FaCircle className="text-xs text-[#883DCF] border-none rounded-full" />
                    <h3>Silver</h3>
                    </div>
                    <h3>Rs 5600</h3>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                    <FaCircle className="text-xs text-[#2BB2FE] border-none rounded-full" />
                    <h3>Gold</h3>
                    </div>
                    <h3>Rs 8900</h3>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                    <FaCircle className="text-xs text-[#F9C80E] border-none rounded-full" />
                    <h3>Premium</h3>
                    </div>
                    <h3>Rs 15600</h3>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                    <FaCircle className="text-xs text-[#F86624] border-none rounded-full" />
                    <h3>Free</h3>
                    </div>
                    <h3>Rs 0</h3>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageSubscription;
