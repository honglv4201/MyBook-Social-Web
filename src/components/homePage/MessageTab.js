import React from "react";
const RandomTextGenerator = require("random-text-generator");
const avatar1 = require("../../asset/img/avatar/avatar1.jpg");
const avatar2 = require("../../asset/img/avatar/avatar2.jpg");
const avatar3 = require("../../asset/img/avatar/avatar3.jpg");
const avatar4 = require("../../asset/img/avatar/avatar4.jpg");

const MessageTab = () => {
  return (
    <div className="tabbar w-[320px] bg-white rounded-lg px-6 py-4">
      <div className="flex flex-col items-start gap-6">
        <div className="search-message gap-2 flex items-center border border-gray-300 rounded-lg px-4 py-0 w-full">
          <i class="fa-solid fa-magnifying-glass text-sm opacity-50"></i>
          <input
            type="text"
            placeholder="Search Friends!"
            className="w-full rounded-lg bg-transparent outline-none border-none px-2 py-3 text-sm"
          />
        </div>

        <div className="grid grid-cols-4 gap-6  text-[12px]">
          <div className="flex flex-col gap-2 items-center">
            <div className="item w-11 h-11 rounded-full border border-primary_btn">
              <img
                src={avatar1}
                className="w-full h-full rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="name">Slase</div>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="item w-11 h-11 rounded-full border border-primary_btn">
              <img
                src={avatar2}
                className="w-full h-full rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="name">StevenJob</div>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="item w-11 h-11 rounded-full border border-primary_btn">
              <img
                src={avatar3}
                className="w-full h-full rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="name">HongHansl</div>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="item w-11 h-11 rounded-full border border-primary_btn">
              <img
                src={avatar4}
                className="w-full h-full rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="name">LySlins</div>
          </div>
        </div>

        <div className="flex items-center w-full gap-2 px-1  justify-between">
          <div className="">Friends</div>
          <i class="fa-solid fa-ellipsis"></i>
        </div>

        <div className="list-friend flex flex-col gap-6 items-start w-full ">
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
        </div>
      </div>
    </div>
  );
};

export default MessageTab;

const FriendItem = () => {
  let randomTextGenerator = new RandomTextGenerator();
  let usernames = [
    "StinkyPoop",
    "Alextron234",
    "BattleDash",
    "berkey10",
    "Ezblox23",
    "robiko858",
    "zakizakowski",
    "MrArtur1337",
    "AzisDeus",
    "AustrianPainter1889",
    "pomidorek2pl",
    "JoeMamma",
    "MafiaBoss75",
    "SciManDan",
    "siuras_ogoras986",
    "jacob.flix",
    "malario",
    "BenDrowned",
    "pickupthefox",
    "okboomer",
    "GHPL",
    "Firstbober",
  ];

  // Pass every username to the generator.
  for (let username of usernames) randomTextGenerator.learn(username);
  return (
    <div className="friend-item flex items-center gap-4 w-full px-1">
      <div className="avatar-item-friend w-8 h-8 rounded-full overflow-hidden">
        <img src={avatar3} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="name">{randomTextGenerator.generate()}</div>
      <div className="w-2 h-2 ml-auto rounded-full bg-green-500"></div>
    </div>
  );
};
