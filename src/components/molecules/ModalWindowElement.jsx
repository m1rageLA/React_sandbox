import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { ModalBox } from "../atoms";

const ModalWindow = () => {
  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const modalStyles = {
    margin: "15% auto",
    backgroundColor: "#11edc8",
    color: "black",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#10c4a6",
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModalWin = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  return (
    <div style={container}>
      <Button style={modalStyles} variant="contained" onClick={openModalWin}>
        Open Modal
      </Button>
    {isOpen && <ModalBox onClose={openModalWin}/>}

    </div>
  );
};

export default ModalWindow;
