"use client";

import Guitar from "react-guitar";
import { Note } from "tonal";
import { getChordPosition } from "./chordPositions";

// Standard tuning: E2 A2 D3 G3 B3 E4 (MIDI numbers, low to high)
const STANDARD_TUNING = [40, 45, 50, 55, 59, 64];

function renderFinger(stringIndex: number, fret: number) {
  const midi = STANDARD_TUNING[stringIndex] + fret;
  const note = Note.fromMidi(midi);
  const { letter, acc } = Note.get(note);
  return <span>{letter}{acc}</span>;
}

interface FretboardProps {
  chord?: string;
}

export const Fretboard = ({ chord }: FretboardProps) => {
  const strings = chord ? getChordPosition(chord) : [-1, -1, -1, -1, -1, -1];
  return (
    <div>
      <Guitar strings={strings} renderFinger={renderFinger} />
    </div>
  );
};
