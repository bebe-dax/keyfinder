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

  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };

  return (
    <div className="App">
      <div style={style}>
        <KeySelector value={selectedKey} onChange={setSelectedKey} />
        <MajorMinor value={majorMinor} onChange={setMajorMinor} />
        <Scale value={scaleType} onChange={setScaleType} />
        <ChordList musicKey={selectedKey} scale={majorMinor} />
        <Fretboard />
      </div>
    </div>
  );
}

export default App;
