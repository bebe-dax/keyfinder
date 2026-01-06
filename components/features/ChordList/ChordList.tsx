"use client";

import { useEffect, useState } from "react";
import { Scale, Key } from "tonal";

interface ChordListProps {
  musicKey: string;
  scale: string;
}

export const ChordList = ({ musicKey, scale }: ChordListProps) => {
  const [chords, setChords] = useState<string[]>([]);

  useEffect(() => {
    let chordData: readonly string[];
    if (scale === "major") {
      chordData = Key.majorKey(musicKey).chords;
    } else {
      chordData = Key.minorKey(musicKey).natural.chords;
    }
    setChords([...chordData]);
  }, [musicKey, scale]);

  // コードの色分け（ダイアトニックコード）
  const getChordColor = (index: number) => {
    const colors = [
      "bg-green-300", // I (トニック)
      "bg-blue-300",  // II (サブドミナント)
      "bg-green-300", // III (トニック)
      "bg-blue-300",  // IV (サブドミナント)
      "bg-red-300",   // V (ドミナント)
      "bg-green-300", // VI (トニック)
      "bg-blue-300",  // VII (サブドミナント/ディミニッシュ)
    ];
    return colors[index] || "bg-gray-300";
  };

  return (
    <div className="space-y-4">
      {/* Chord Display */}
      <div className="flex gap-0 items-center justify-center">
        {chords.map((chord, index) => (
          <div
            key={index}
            className={`${getChordColor(index)} px-8 py-4 text-center font-bold text-xl border border-gray-400`}
          >
            {chord}
          </div>
        ))}
      </div>
    </div>
  );
};
