"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { KeySelector } from "@/components/features/KeySelector";
import { MajorMinor, Scale } from "@/components/features/ScaleSelector";
import { ChordList } from "@/components/features/ChordList";

const Fretboard = dynamic(
  () => import("@/components/features/Fretborad").then((m) => m.Fretboard),
  { ssr: false },
);

function App() {
  const [selectedKey, setSelectedKey] = useState("C");
  const [majorMinor, setMajorMinor] = useState("major");
  const [scaleType, setScaleType] = useState("diatonic");
  const [selectedChord, setSelectedChord] = useState<string | undefined>(undefined);

  const handleKeyChange = (key: string) => {
    setSelectedKey(key);
    setSelectedChord(undefined);
  };

  const handleScaleChange = (scale: string) => {
    setMajorMinor(scale);
    setSelectedChord(undefined);
  };

  const handleScaleTypeChange = (type: string) => {
    setScaleType(type);
    setSelectedChord(undefined);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Selector Section */}
        <div className="flex gap-4 mb-8">
          <KeySelector value={selectedKey} onChange={handleKeyChange} />
          <Scale value={scaleType} onChange={handleScaleTypeChange} />
          <MajorMinor value={majorMinor} onChange={handleScaleChange} />
        </div>

        {/* Chord List Section */}
        <div className="mb-8">
          <ChordList
            musicKey={selectedKey}
            scale={majorMinor}
            theoryMode={scaleType}
            selectedChord={selectedChord}
            onChordSelect={setSelectedChord}
          />
        </div>

        {/* Fretboard Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <Fretboard chord={selectedChord} />
        </div>
      </div>
    </div>
  );
}

export default App;
