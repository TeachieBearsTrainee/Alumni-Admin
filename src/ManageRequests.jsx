import React from 'react'
import CustomButton from './CustomButton'
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const ManageRequests = (props) => {
  return (
    <div className=" flex justify-between border border-gray-400 mt-5 p-4 items-center rounded-2xl ">
      <div className="h-auto flex gap-4 ">
        <img src="/images/userlogo.png" alt="" />
        <div>
          <h4>{props.username}</h4>
          <p className="text-sm">{props.bio}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <CustomButton text={"Edit"} icon={FiEdit3}/>
        <CustomButton text={"Delete"} icon={MdDeleteOutline} />
      </div>
    </div>
  )
}

export default ManageRequests
