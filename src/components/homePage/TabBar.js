import React, { Children } from "react";

const TabBar = () => {
  return (
    <div className="tabbar w-[220px] bg-white rounded-lg j">
      <div className="tabbar w-[220px] bg-white rounded-lg fixed">
        <div className="flex flex-col gap-4 items-start p-4 ">
          <TabItem icon="fa-solid fa-table-columns" active>
            Feed
          </TabItem>
          <TabItem icon="fa-solid fa-user-group">My Community</TabItem>
          <TabItem icon="fa-regular fa-message">Message</TabItem>
          <TabItem icon="fa-regular fa-bell">Notification</TabItem>
          <TabItem icon="fa-regular fa-paper-plane">Explore</TabItem>
          <TabItem icon="fa-regular fa-user">Profile</TabItem>
          <TabItem icon="fa-solid fa-sliders">Setting</TabItem>
          <TabItem icon="fa-solid fa-right-from-bracket">Logout</TabItem>
        </div>
      </div>
    </div>
  );
};

export default TabBar;

const TabItem = ({ icon, active, children }) => {
  let bgClass = "bg-transparent hover:bg-gray-200 ";
  if (active) bgClass = "bg-[#4D5C78] text-white hover:bg-opacity-90 ";
  return (
    <div
      className={`item flex gap-6 items-center px-5 py-4 cursor-pointer  rounded-lg  w-full ${bgClass}`}
    >
      <i class={`${icon}`}></i>
      <div className="text-sm">{children}</div>
    </div>
  );
};
