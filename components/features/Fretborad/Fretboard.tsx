"use client";

import React from "react";
import Guitar from "react-guitar";
import { getChordPosition } from "./chordPositions";

interface FretboardProps {
  chord?: string;
}

export const Fretboard = ({ chord }: FretboardProps) => {
  const strings = chord ? getChordPosition(chord) : [-1, -1, -1, -1, -1, -1];
  return (
    <div>
      <Guitar strings={strings} />
    </div>
  );
};
