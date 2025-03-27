import React from "react";
import { RxCross2 } from "react-icons/rx";

const AddImage = () => {
  return (
    
      <div className="flex flex-col items-center">
        {/* Top section containing the icon aligned to the right */}
        <div className="w-full flex justify-end ">
          <RxCross2 className="cursor-pointer" />
        </div>

        <div className="relative">
          <img src="/images/createimage.png" alt="" className="w-full" />

          {/* Gradient overlay */}
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent opacity-80"></div>
        </div>
      </div>
    
  );
};

export default AddImage;
