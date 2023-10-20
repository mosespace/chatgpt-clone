"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function ButtonMenu() {
  const [showNav, setShowNav] = useState(false);

  function handleOnClick() {
    setShowNav(true);
    // console.log(setShowNav);
  }

  return (
    <button onClick={handleOnClick}>
      <FiMenu size={25} />
    </button>
  );
}
