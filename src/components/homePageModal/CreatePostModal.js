import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
const avatar = require("../../asset/img/avatar/avatar3.jpg");

const CreatePostModal = ({ setShow, coords }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "auto";
    };
  }, []);
  console.log(coords);
  return ReactDOM.createPortal(
    <Fragment>
      <div className="overlay inset-0 fixed bg-black bg-opacity-30 z-50 cursor-pointer"></div>
      <div
        style={{
          top: coords.top,
          left: coords.left,
        }}
        className="absolute modal top-0 left-0 min-w-[540px] min-h-[200px] text-sm rounded-xl bg-white shadow-lg z-50 pl-6 pr-3 py-4 "
      >
        <div className="flex justify-between gap-2 items-center mb-6">
          <span>Create a post</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-4">
              <span>Visible for</span>
              <div className="flex gap-3 items-center px-4 py-[6px] rounded-lg bg-gray-200 cursor-pointer hover:bg-gray-100">
                <span>Public</span>
                <i class="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <div className="w-10 flex justify-center">
              <div
                onClick={setShow}
                className="w-5 h-5 group hover:w-6 hover:h-6 transition-all duration-200 cursor-pointer rounded-full border-2 border-gray-600 flex items-center justify-center"
              >
                <i class="fa-solid fa-xmark text-sm group-hover:!text-lg duration-200 transition-all "></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-4">
          <div className="avatar w-10 h-10 rounded-full relative">
            <img
              src={avatar}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <textarea
            autoFocus
            type="text"
            placeholder="What's happening?"
            className="px-4 py-3 flex-1 resize-none mr-4 rounded-lg text-sm bg-primary_input border-none outline-none"
            rows={8}
          />
        </div>

        <div className="flex items-center gap-2 text-sm pl-1 pr-4 pb-1">
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
    </Fragment>,
    document.querySelector("body")
  );
};

export default CreatePostModal;
