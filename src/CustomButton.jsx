import React from "react";

const CustomButton = ({ icon: Icon, iconSize = 16, text, onClick }) => {
  console.log(text);

  return (
    <>
      {text.toLowerCase() === "accept" && (
        <button
          className="flex items-center gap-2 py-2 px-6 rounded-lg text-sm font-medium  bg-[#f78b2d] text-white "
          onClick={onClick}
        >
          {text}
          {Icon && <Icon size={iconSize} />}
        </button>
      )}
      {text.toLowerCase() === "reject" && (
        <button
          className="flex items-center gap-2 py-2 px-6 rounded-lg text-sm font-medium border-[#F32800] border text-[#F32800]"
          onClick={onClick}
        >
          {text}
          {Icon && <Icon size={iconSize} />}
        </button>
      )}
      {text.toLowerCase() === "edit" && (
        <button
          className="flex items-center gap-2 py-2 px-6 rounded-lg text-sm font-medium  bg-[#f78b2d] text-white "
          onClick={onClick}
        >
          {text}
          {Icon && <Icon size={iconSize} />}
        </button>
      )}
      {text.toLowerCase() === "delete" && (
        <button
          className="flex items-center gap-1 py-2 px-4 rounded-lg text-sm font-medium border-[#F32800] border text-[#F32800]"
          onClick={onClick}
        >
          {text}
          {Icon && <Icon size={iconSize} />}
        </button>
      )}
    </>
  );
};

export default CustomButton;
