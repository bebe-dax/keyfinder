"use client";

import { Key } from "tonal";

interface ChordListProps {
  musicKey: string;
  scale: string;
}

export const ChordList = ({ musicKey, scale }: ChordListProps) => {
  const chordData = scale === "major"
    ? Key.majorKey(musicKey).chords
    : Key.minorKey(musicKey).natural.chords;
  const chords = [...chordData];

  const chordInfo = [
    { label: "トニック", color: "bg-green-300", textColor: "text-green-800" },
    { label: "サブドミナント", color: "bg-blue-300", textColor: "text-blue-800" },
    { label: "トニック", color: "bg-green-300", textColor: "text-green-800" },
    { label: "サブドミナント", color: "bg-blue-300", textColor: "text-blue-800" },
    { label: "ドミナント", color: "bg-red-300", textColor: "text-red-800" },
    { label: "トニック", color: "bg-green-300", textColor: "text-green-800" },
    { label: "サブドミナント", color: "bg-blue-300", textColor: "text-blue-800" },
  ];

  return (
    <div className="space-y-4">
      {/* Chord Display */}
      <div className="flex gap-0 items-center justify-center">
        {chords.map((chord, index) => {
          const info = chordInfo[index] ?? { label: "", color: "bg-gray-300", textColor: "text-gray-800" };
          return (
            <div key={index} className="flex flex-col">
              <div className={`${info.color} ${info.textColor} px-8 py-1 text-center text-xs font-semibold border border-b-0 border-gray-400`}>
                {info.label}
              </div>
              <div className={`${info.color} px-8 py-4 text-center font-bold text-xl border border-gray-400`}>
                {chord}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
