"use client";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

export default function ButtonClose() {
  const [showNav, setShowNav] = useState(false);

  function handleOnClose() {
    setShowNav(false);
  }
  return (
    <button onClick={handleOnClose}>
      <MdClose size={30} />
    </button>
  );
}
