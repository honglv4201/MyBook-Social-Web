import React, { useState } from "react";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import CreatePostModal from "../homePageModal/CreatePostModal";
const avatar = require("../../asset/img/avatar/avatar1.jpg");
const avatar2 = require("../../asset/img/avatar/avatar4.jpg");
const avatar3 = require("../../asset/img/avatar/avatar3.jpg");
const avatar4 = require("../../asset/img/avatar/avatar2.jpg");
const post1 = require("../../asset/img/post/img1.jpg");
const post2 = require("../../asset/img/post/img2.jpg");
const post3 = require("../../asset/img/post/img3.jpg");

const MainPost = () => {
  const { show, setShow, nodeRef } = useClickOutSide(".modal");

  const [coords, setCoords] = useState({});

  const handleOpenModal = () => {
    setShow(true);
    setCoords(nodeRef.current.getBoundingClientRect());
  };
  return (
    <div className="tabbar min-w-[300px] flex-1 rounded-lg mb-20">
      <CreatePost
        show={show}
        setShow={setShow}
        nodeRef={nodeRef}
        handleOpenModal={handleOpenModal}
        coords={coords}
      />
      {new Array(100).fill(0).map((item) => {
        return <PostItem />;
      })}
    </div>
  );
};

export default MainPost;

const CreatePost = ({ show, setShow, nodeRef, handleOpenModal, coords }) => {
  return (
    <div className="w-full bg-white rounded-lg px-8 py-6 mb-4">
      <div className="flex items-center gap-2 mb-6">
        <div className="avatar w-10 h-10 rounded-full relative">
          {show && (
            <CreatePostModal
              coords={coords}
              setShow={() => {
                setShow(false);
              }}
            />
          )}
          <img
            src={avatar}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <input
          ref={nodeRef}
          onClick={handleOpenModal}
          type="text"
          placeholder="What's happening?"
          className="px-4 py-3 flex-1 rounded-lg text-sm bg-primary_input border-none outline-none"
        />
      </div>

      <div className="flex items-center gap-2 text-sm">
        <div className="item flex gap-2 items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md">
          <i class="fa-solid fa-camera-retro"></i>
          <span className="hongxx">Live Video</span>
        </div>

        <div className="item flex gap-2 items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md">
          <i class="fa-solid fa-images"></i>
          <span>Photo/video</span>
        </div>

        <div className="item flex gap-2 items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md">
          <i class="fa-regular fa-face-kiss-wink-heart"></i>
          <span>Feeling</span>
        </div>

        <div className="post-btn text-center text-white px-4 py-2 ml-auto min-w-[80px] cursor-pointer hover:bg-opacity-80 bg-primary_btn rounded-md">
          Post
        </div>
      </div>
    </div>
  );
};

const PostItem = () => {
  return (
    <div className="w-full flex flex-col items-start gap-y-5 min-h-[250px] rounded-lg bg-white px-6 pt-4 pb-6">
      <div className="flex w-full items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="avatar_post w-12 h-12 rounded-full">
            <img
              src={avatar2}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col gap-1 items-start">
            <div className="name">Sepanrul hong</div>
            <div className="times text-[12px] opacity-60">15h. Public</div>
          </div>
        </div>

        <div className="btn_more">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>

      <div className="post-image w-full h-[340px] rounded-xl overflow-hidden">
        <img src={post2} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex gap-2 w-full justify-between items-center">
        <div className="relative ">
          <div className="absolute -top-4 left-0 w-6 h-6 rounded-full overflow-hidden border-gray-200">
            <img src={avatar} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-4 left-4 w-6 h-6 rounded-full overflow-hidden border-gray-200">
            <img src={avatar3} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-4 left-8 w-6 h-6 rounded-full overflow-hidden border-gray-200">
            <img src={avatar4} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-4 left-12 w-6 h-6 rounded-full overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gray-700 text-white text-[10px] text-center">
              +9
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <div className="comment">3 Comments</div>
          <div className="comment">17 Share</div>
        </div>
      </div>
      <div className="flex justify-between text-sm items-center py-1 w-full border-t border-t-gray-200 border-b border-b-gray-200">
        <div className="item flex items-center gap-2 px-5 py-2 cursor-pointer rounded-lg hover:bg-gray-100">
          <i class="fa-regular fa-heart"></i>
          Love
        </div>
        <div className="item flex items-center gap-2 px-5 py-2 cursor-pointer rounded-lg hover:bg-gray-100">
          <i class="fa-regular fa-comment"></i>
          Comment
        </div>
        <div className="item flex items-center gap-2 px-5 py-2 cursor-pointer rounded-lg hover:bg-gray-100">
          <i class="fa-solid fa-share"></i>
          Share
        </div>
      </div>

      <div className="flex items-center w-full gap-3">
        <div className="avatar_comment w-8 h-8 rounded-full overflow-hidden">
          <img src={avatar} alt="" className="w-full h-full object-cover " />
        </div>

        <div className="input  flex-1 px-4 py-2 rounded-lg bg-primary_input text-sm flex items-center">
          <input
            type="text"
            placeholder="Write a comment..."
            className="flex-1 outline-none border-none bg-transparent "
          />
          <div className="flex items-center gap-2">
            <i class="fa-solid fa-file"></i>
            <i class="fa-solid fa-image"></i>
            <i class="fa-solid fa-face-laugh-wink"></i>
          </div>
        </div>
        <div className="btn_sent text-center py-[6px] cursor-pointer hover:bg-primary_btn hover:text-white px-3 rounded-lg bg-primary_input text-primary_btn">
          <i class="fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};
