"use client";

import { useState } from "react";
import { KeySelector } from "@/components/features/KeySelector";
import { MajorMinor, Scale } from "@/components/features/ScaleSelector";
import { Fretboard } from "@/components/features/Fretborad";
import { ChordList } from "@/components/features/ChordList";
import "./globals.css";

function App() {
  const [selectedKey, setSelectedKey] = useState("C");
  const [majorMinor, setMajorMinor] = useState("major");
  const [scaleType, setScaleType] = useState("diatonic");

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Selector Section */}
        <div className="flex gap-4 mb-8">
          <KeySelector value={selectedKey} onChange={setSelectedKey} />
          <Scale value={scaleType} onChange={setScaleType} />
          <MajorMinor value={majorMinor} onChange={setMajorMinor} />
        </div>

        {/* Chord List Section */}
        <div className="mb-8">
          <ChordList musicKey={selectedKey} scale={majorMinor} />
        </div>

        {/* Fretboard Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <Fretboard />
        </div>
      </div>
    </div>
  );
}

export default App;
