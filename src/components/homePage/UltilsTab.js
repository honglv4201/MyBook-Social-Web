import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import CustomModal from "../homePageModal/CreatePostModal";
const avatar = require("../../asset/img/avatar/avatar1.jpg");
const avatar2 = require("../../asset/img/avatar/avatar4.jpg");
const avatar3 = require("../../asset/img/avatar/avatar3.jpg");
const avatar4 = require("../../asset/img/avatar/avatar2.jpg");

const UltilsTab = () => {
  return (
    <Fragment>
      <div className="tabbar left-0 top-0 mt-20 h-screen w-[260px]  rounded-lg overflow-y-scroll  no-scrollbar">
        <TemplateItem title="You Might Like">
          <FamousPeopleItem />
        </TemplateItem>

        <TemplateItem title="You Might Like" more>
          <EventItemList />
        </TemplateItem>
        <TemplateItem title="You Might Like">
          <FamousPeopleItem />
        </TemplateItem>

        <TemplateItem title="You Might Like">
          <FamousPeopleItem />
        </TemplateItem>

        <TemplateItem title="You Might Like" more>
          <EventItemList />
        </TemplateItem>
        <TemplateItem title="You Might Like">
          <FamousPeopleItem />
        </TemplateItem>
      </div>{" "}
    </Fragment>
  );
};

export default UltilsTab;

const TemplateItem = ({ title, more, children }) => {
  return (
    <div className="rounded-lg bg-white min-h-[140px] px-4 py-6 text-primary_text mb-4">
      <div className="mb-1 pt-1 pb-3 px-1 flex items-center justify-between gap-2 border-b border-b-gray-200">
        <span className="">{title}</span>
        {!more && (
          <Link to="#" className="text-sm text-primary_btn">
            See All
          </Link>
        )}

        {more && <i class="fa-solid fa-ellipsis"></i>}
      </div>
      {children}
    </div>
  );
};

const EventItem = ({ seenCount, icon, colorIcon, children }) => {
  return (
    <div className="mt-3 flex flex-col gap-1 text-sm bg-primary_bg p-3 rounded-lg">
      <div className="flex gap-4 items-start border-b-2  border-b-gray-100 pb-3">
        <div className="flex-1 mt-1 ">
          <div
            className={`w-10 h-10 rounded-lg  flex items-center relative justify-center ${colorIcon} `}
          >
            <i
              class={`${icon} absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2`}
            ></i>
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-start">
          <span>{children}</span>
          <span className="text-[12px] opacity-80">
            Lorem ipsum dolor sit amet consectetur elit...
          </span>
        </div>
      </div>
      <div className="py-1 px-1 flex items-center justify-between">
        <div className="p-1">{seenCount} seen</div>
        <div className="relative ">
          <div className="absolute z-50 -top-[10px] -left-4 w-5 h-5 rounded-full overflow-hidden border-gray-200">
            <div className="w-full h-full flex items-center justify-center bg-gray-700 text-white text-[10px] text-center">
              +9
            </div>
          </div>
          <div className="absolute z-40 -top-[10px] -left-8 w-5 h-5 rounded-full overflow-hidden border-gray-200">
            <img src={avatar4} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute z-30 -top-[10px] -left-12 w-5 h-5 rounded-full overflow-hidden">
            <img src={avatar3} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute z-20 -top-[10px] -left-16 w-5 h-5 rounded-full overflow-hidden border-gray-200">
            <img src={avatar} alt="" className=" w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

const EventItemList = () => {
  return (
    <div className="flex flex-col gap-2">
      <EventItem
        seenCount={124}
        icon="fa-solid fa-book"
        colorIcon="bg-green-200 text-green-500"
      >
        Graduation Ceremony
      </EventItem>
      <EventItem
        seenCount={32}
        icon="fa-solid fa-camera"
        colorIcon="bg-red-200 text-red-500"
      >
        Photograyphy Ideas
      </EventItem>
    </div>
  );
};

const FamousPeopleItem = () => {
  const { show, setShow, nodeRef } = useClickOutSide(".modal");
  const [coords, setCoords] = useState({});
  const handleOpenModal = () => {
    setShow(true);
    setCoords(nodeRef.current.getBoundingClientRect());
  };
  return (
    <div className="mt-3">
      <div className="flex items-center gap-3 mb-4">
        <div className="avatar w-10 h-10 rounded-full overflow-hidden ">
          <img src={avatar} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-start gap-1 text-sm ">
          <div className="">Rodovand Homng</div>
          <div className="opacity-50 text-[12px]">Founder & CEO at Tropy</div>
        </div>
      </div>

      <div className="social-list flex items-center justify-center gap-3 mb-6">
        <i class="fa-solid fa-globe"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>

      <div className="flex items-center x-2 pt-2 py-0 gap-4 justify-around">
        <div className="btn px-8  py-[6px] cursor-pointer hover:bg-gray-100 text-sm rounded-lg bg-white border border-gray-400 text-center">
          Ignore
        </div>
        <div
          ref={nodeRef}
          onClick={handleOpenModal}
          className="btn px-8  py-[6px] cursor-pointer hover:bg-opacity-80 text-sm rounded-lg bg-primary_btn text-white border border-transparent text-center"
        >
          Follow
        </div>
        {show && (
          <CustomModal
            coords={coords}
            setClose={() => {
              setShow(false);
            }}
            type="unfollow"
          >
            UnFollow
          </CustomModal>
        )}
      </div>
    </div>
  );
};
