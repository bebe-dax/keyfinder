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
    { label: "トニック", color: "bg-green-100", textColor: "text-green-700", borderColor: "border-green-300" },
    { label: "サブドミナント", color: "bg-blue-100", textColor: "text-blue-700", borderColor: "border-blue-300" },
    { label: "トニック", color: "bg-green-100", textColor: "text-green-700", borderColor: "border-green-300" },
    { label: "サブドミナント", color: "bg-blue-100", textColor: "text-blue-700", borderColor: "border-blue-300" },
    { label: "ドミナント", color: "bg-rose-100", textColor: "text-rose-700", borderColor: "border-rose-300" },
    { label: "トニック", color: "bg-green-100", textColor: "text-green-700", borderColor: "border-green-300" },
    { label: "サブドミナント", color: "bg-blue-100", textColor: "text-blue-700", borderColor: "border-blue-300" },
  ];

  return (
    <div className="space-y-4">
      {/* Chord Display */}
      <div className="flex gap-3 items-center justify-center flex-wrap">
        {chords.map((chord, index) => {
          const info = chordInfo[index] ?? { label: "", color: "bg-gray-100", textColor: "text-gray-600", borderColor: "border-gray-300" };
          return (
            <div key={index} className={`${info.color} ${info.borderColor} rounded-2xl px-6 py-4 flex flex-col items-center gap-1 shadow-sm min-w-[80px] border`}>
              <span className={`${info.textColor} text-xs font-medium opacity-80`}>
                {info.label}
              </span>
              <span className={`${info.textColor} font-bold text-xl`}>
                {chord}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
