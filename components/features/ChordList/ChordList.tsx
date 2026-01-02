"use client";

import { useEffect, useState } from "react";
import { Scale, Key } from "tonal";

interface ChordListProps {
  musicKey: string;
  scale: string;
}

export const ChordList = ({ musicKey, scale }: ChordListProps) => {
  const [scales, setScales] = useState<string[]>([]);
  const [triads, setTriads] = useState<string[]>([]);
  const [chords, setChords] = useState<string[]>([]);

  useEffect(() => {
    let scaleData: readonly string[];
    let triadData: readonly string[];
    let chordData: readonly string[];
    if (scale === "major") {
      scaleData = Key.majorKey(musicKey).scale;
      triadData = Key.majorKey(musicKey).triads;
      chordData = Key.majorKey(musicKey).chords;
    } else {
      scaleData = Key.minorKey(musicKey).natural.scale;
      triadData = Key.minorKey(musicKey).natural.triads;
      chordData = Key.minorKey(musicKey).natural.chords;
    }
    setScales([...scaleData]);
    setTriads([...triadData]);
    setChords([...chordData]);
  }, [musicKey, scale]);

  return (
    <>
      <div>scale: {JSON.stringify(scales)}</div>
      <div>triad: {JSON.stringify(triads)}</div>
      <div>chord: {JSON.stringify(chords)}</div>
    </>
  );
};
