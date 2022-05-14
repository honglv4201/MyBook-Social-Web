import React, { Fragment, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useClickOutSide } from "../../hooks/useClickOutSide";
const avatar = require("../../asset/img/avatar/avatar3.jpg");
const post = require("../../asset/img/post/img3.jpg");

const CreatePostModal = ({ setShow, coords }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "auto";
    };
  }, []);

  const {
    show: showPrivacy,
    setShow: setShowPrivacy,
    nodeRef,
  } = useClickOutSide(".modal-popup");

  const [privacyStatus, setPrivacyStatus] = useState("Public");
  console.log(coords);

  const [privacyCoords, setPrivacyCoords] = useState({});
  const handleOpenPrivacyPop = () => {
    setPrivacyCoords(nodeRef.current.getBoundingClientRect());
  };
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
        <div className="w-full h-fi p-0 ">
          <div className="flex justify-between gap-2 items-center mb-6">
            <span>Create a post</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-4">
                <span>Visible for</span>
                <div
                  ref={nodeRef}
                  onClick={() => {
                    setShowPrivacy(true);
                    handleOpenPrivacyPop();
                  }}
                  className="flex relative gap-3 items-center px-4 py-[6px] rounded-lg bg-gray-200 cursor-pointer hover:bg-gray-100"
                >
                  <span className="text-primary_btn">{privacyStatus}</span>
                  <i class="fa-solid fa-angle-down"></i>
                  {showPrivacy && (
                    <PrivacyPopUp
                      setPrivacyStatus={setPrivacyStatus}
                      setShowPrivacy={setShowPrivacy}
                      privacyStatus={privacyStatus}
                      privacyCoords={privacyCoords}
                    ></PrivacyPopUp>
                  )}
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
          <CreatePostModalWithImage />

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
      </div>
    </Fragment>,
    document.querySelector("body")
  );
};

const CreatePostModalNonImage = () => {
  return (
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
  );
};
const CreatePostModalWithImage = () => {
  const [scrollHeight, setScrollHeight] = useState("10px");
  const [parentHeight, setParentHeight] = useState("auto");
  const [text, setText] = useState("");
  const handleOnChangeText = (e) => {
    if (e.target.value === "") setScrollHeight("auto");

    setText(e.target.value);
    setParentHeight("auto");
  };

  const scrollRef = useRef();
  useEffect(() => {
    setScrollHeight(`${scrollRef?.current?.scrollHeight}px`);
    setParentHeight(`${scrollRef?.current?.scrollHeight}px`);
    console.log(`${scrollRef?.current?.scrollHeight + 19}px`);
  }, [text]);
  return (
    <Fragment>
      <div
        style={{ height: parentHeight }}
        className="flex items-start gap-4 mb-4"
      >
        <div className="avatar w-10 h-10 rounded-full relative ">
          <img
            src={avatar}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <textarea
          value={text}
          onChange={handleOnChangeText}
          ref={scrollRef}
          style={{
            height: scrollHeight,
          }}
          autoFocus
          type="text"
          placeholder="What's happening?"
          className="px-4 overflow-hidden py-3 flex-1 resize-none mr-4 rounded-lg text-sm  border-none outline-none"
          rows={2}
        />
      </div>

      <div className="max-w-[540px] max-h-[200px] h-[200px] my-4 px-2 ">
        <img
          src={post}
          alt=""
          className="w-full h-full object-cover  rounded-lg  "
        />
      </div>
    </Fragment>
  );
};

export default CreatePostModal;

const PrivacyPopUp = ({
  setPrivacyStatus,
  setShowPrivacy,
  privacyStatus,
  privacyCoords,
}) => {
  const handleOnChangeRadio = (e) => {
    setPrivacyStatus(e.target.value);
    setTimeout(() => {
      setShowPrivacy(false);
    }, 1);
  };
  console.log(privacyCoords);
  return ReactDOM.createPortal(
    <div
      style={{
        top: privacyCoords.top + privacyCoords.height + window.scrollY,
        left: privacyCoords.left,
      }}
      className="absolute max-w-[200px] z-50 modal-popup mt-1 overflow-hidden rounded-md bg-red-200 shadow-lg min-h-20"
    >
      <div className="px-3 py-4 gap-3 flex flex-col items-start text-sm w-30 bg-white ">
        <label
          htmlFor="privacyID"
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            value="Friends"
            type="radio"
            name="privacy"
            id="privacyID"
            defaultChecked={privacyStatus === "Friends" ? true : false}
            onChange={handleOnChangeRadio}
          />
          <div className="mr-4">Friends</div>
        </label>

        <label
          htmlFor="privacyID2"
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            value="Public"
            type="radio"
            name="privacy"
            defaultChecked={privacyStatus === "Public" ? true : false}
            id="privacyID2"
            onChange={handleOnChangeRadio}
          />
          <div className="">Public</div>
        </label>

        <label
          htmlFor="privacyID3"
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            value="Only me"
            type="radio"
            name="privacy"
            id="privacyID3"
            defaultChecked={privacyStatus === "Only me" ? true : false}
            onChange={handleOnChangeRadio}
          />
          <div className="">Only me</div>
        </label>
      </div>
    </div>,
    document.querySelector("body")
  );
};
