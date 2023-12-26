import React from "react";

const ModalBox = ({ onClose }) => {

  const modalBlockStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "200px",
    height: "200px",
    backgroundColor: "#242728",
  };

  const closeModalBlock = {
    position: "relative",
    left: "100%",
    transform: "translate(-100%, -0%)",
    width: "40px",
    height: "40px",
    backgroundColor: "red",
  };

  return (
    <div style={modalBlockStyles}>
      <div onClick={onClose} style={closeModalBlock}></div>
    </div>
  );
};

export default ModalBox;
