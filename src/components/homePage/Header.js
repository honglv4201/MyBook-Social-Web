import React from "react";
const logoImg = require("../../asset/img/logo.jpg");
const avatar1 = require("../../asset/img/avatar/avatar1.jpg");

const Header = () => {
  return (
    <div className="mb-20">
      <div className="flex gap-4 items-center justify-between pl-4 pr-10 fixed top-0 left-0 right-0 bg-primary_bg z-50">
        <div className="flex items-center">
          <div className="logo flex gap-1 items-center ">
            <div className="logo_img w-20 h-20 overflow-hidden">
              <img
                src={logoImg}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-bold text-lg">VieSocial</div>
          </div>

          <div className="search border ml-20 w-[400px] rounded-md border-gray-300 flex items-center gap-2 px-4 py-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for something here..."
              className="flex-1 bg-transparent border-none outline-none text-sm "
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-base">Selhel LamsH</div>
          <div className="avatar w-10 h-10 border-l-gray-50 rounded-lg overflow-hidden">
            <img src={avatar1} alt="avatar" className="w-full h-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
