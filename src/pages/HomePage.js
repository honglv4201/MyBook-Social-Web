import React from "react";
import Header from "../components/homePage/Header";
import MainPost from "../components/homePage/MainPost";
import MessageTab from "../components/homePage/MessageTab";
import TabBar from "../components/homePage/TabBar";
import UltilsTab from "../components/homePage/UltilsTab";

const HomePage = () => {
  return (
    <div className="bg-primary_bg flex flex-col gap-2">
      <Header />
      <div className="flex gap-4 w-full min-h-[500px] px-4 justify-between">
        <TabBar />
        <MainPost />
        <div className="w-[600px] ">
          <div className=" right-0 top-0  fixed flex gap-4">
            <UltilsTab />
            <MessageTab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
