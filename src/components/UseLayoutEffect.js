import React, { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const button = useRef();
  const popup = useRef();

  //not working as i expected, want to know
  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    button.current.style.backgroundColor = show === true ? "yellow" : "red";
  }, [show]);
  return (
    <div style={{ margin: "20px" }}>
      UseLayoutEffect
      <div>
        <button ref={button} onClick={() => setShow(!show)}>
          Toggle Popup
        </button>
        {show && (
          <div
            style={{
              position: "absolute",
              backgroundColor: "white",
              color: "black",
              width: "400px",
              height: "100px",
            }}
            ref={popup}
          >
            I am Popup
          </div>
        )}
      </div>
    </div>
  );
};

export default UseLayoutEffect;
