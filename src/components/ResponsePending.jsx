import React from "react";
import CustomButton from "../CustomButton";

const ResponsePending = (props) => {
  return (
    <div className=" flex justify-between border border-gray-400 mt-5 p-4 items-center rounded-2xl ">
      <div className="h-auto flex gap-4 ">
        <img src="/images/userlogo.png" alt="" />
        <div>
          <h4>{props.username}</h4>
          <p className="text-sm text-gray-400">{props.bio}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <CustomButton text={"Accept"} />
        <CustomButton text={"Reject"} isOutLine={true} />
      </div>
    </div>
  );
};

export default ResponsePending;
