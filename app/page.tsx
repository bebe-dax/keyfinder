import React from "react";
import Fretbard from "@/components/features/Fretborad/Fretboard";
import "./globals.css";

function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };
  return (
    <div className="App">
      <div style={style}>
        <Fretbard />
      </div>
    </div>
  );
}

export default App;
