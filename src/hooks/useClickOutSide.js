import { useEffect, useRef, useState } from "react";

export const useClickOutSide = (dom = "btn") => {
  const [show, setShow] = useState();
  const nodeRef = useRef();

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !document.querySelector(dom).contains(e.target)
      ) {
        setShow(false);
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
