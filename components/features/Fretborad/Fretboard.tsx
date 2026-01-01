"use client";

import React from "react";
import Guitar from "react-guitar";

const Fretboard = () => {
  return (
    <div>
      <Guitar strings={[0, 1, 2, 2, 0, -1]} />
    </div>
  );
};

export default Fretboard;
