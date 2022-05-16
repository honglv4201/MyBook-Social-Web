import React from "react";

const Button = ({ children, className, onClick, color = "primary" }) => {
  let colorClassName = "";
  switch (color) {
    case "primary": {
      colorClassName = "bg-primary_btn  text-white hover:bg-opacity-80 ";
      break;
    }
    case "secondary": {
      colorClassName = "bg-white opacity-80 hover:bg-gray-200";
      break;
    }
    default:
      break;
  }
  return (
    <div
      onClick={onClick}
      className={`text-center px-4 py-2 min-w-[80px] cursor-pointer  rounded-md ${colorClassName} ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
