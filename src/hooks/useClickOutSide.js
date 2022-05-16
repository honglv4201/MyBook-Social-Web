import { useEffect, useRef, useState } from "react";

export const useClickOutSide = (dom = "", dom2 = "") => {
  const [show, setShow] = useState();
  const nodeRef = useRef();

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (dom2 !== "none") {
        if (
          nodeRef.current &&
          !nodeRef.current.contains(e.target) &&
          document.querySelector(dom) &&
          !document.querySelector(dom).contains(e.target) &&
          !document.querySelector(dom2).contains(e.target)
        ) {
          setShow(false);
        }
      } else {
        if (
          nodeRef.current &&
          !nodeRef.current.contains(e.target) &&
          !document.querySelector(dom).contains(e.target)
        ) {
          setShow(false);
          console.log("success");
        }
      }
    };
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
};
