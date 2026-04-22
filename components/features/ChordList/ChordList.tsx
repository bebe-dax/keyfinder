"use client";

import { Key } from "tonal";

interface ChordListProps {
  musicKey: string;
  scale: string;
  theoryMode: string;
  selectedChord?: string;
  onChordSelect?: (chord: string) => void;
}

const DIATONIC_INFO_MAJOR = [
  { label: "トニック", color: "bg-green-100", textColor: "text-green-700", borderColor: "border-green-300" },
  { label: "サブドミナント", color: "bg-blue-100", textColor: "text-blue-700", borderColor: "border-blue-300" },
  { label: "トニック", color: "bg-green-100", textColor: "text-green-700", borderColor: "border-green-300" },
  { label: "サブドミナント", color: "bg-blue-100", textColor: "text-blue-700", borderColor: "border-blue-300" },
  { label: "ドミナント", color: "bg-rose-100", textColor: "text-rose-700", borderColor: "border-rose-300" },
  { label: "トニック", color: "bg-green-100", textColor: "text-green-700", borderColor: "border-green-300" },
  { label: "サブドミナント", color: "bg-blue-100", textColor: "text-blue-700", borderColor: "border-blue-300" },
];

const DIATONIC_INFO_MINOR = [
  { label: "トニック", color: "bg-green-100", textColor: "text-green-700", borderColor: "border-green-300" },
  { label: "サブドミナント", color: "bg-blue-100", textColor: "text-blue-700", borderColor: "border-blue-300" },
  { label: "トニック", color: "bg-green-100", textColor: "text-green-700", borderColor: "border-green-300" },
  { label: "サブドミナント", color: "bg-blue-100", textColor: "text-blue-700", borderColor: "border-blue-300" },
  { label: "ドミナント", color: "bg-rose-100", textColor: "text-rose-700", borderColor: "border-rose-300" },
  { label: "サブドミナント", color: "bg-blue-100", textColor: "text-blue-700", borderColor: "border-blue-300" },
  { label: "サブドミナント", color: "bg-blue-100", textColor: "text-blue-700", borderColor: "border-blue-300" },
];

const FALLBACK_INFO = { label: "", color: "bg-gray-100", textColor: "text-gray-600", borderColor: "border-gray-300" };

function chordCardClass(base: string, border: string, selected: boolean) {
  return `${base} ${border} rounded-2xl px-5 py-3 flex flex-col items-center gap-1 shadow-sm min-w-[80px] border cursor-pointer transition-all ${
    selected ? "ring-2 ring-offset-1 ring-gray-500 scale-105" : "hover:scale-105"
  }`;
}

export const ChordList = ({ musicKey, scale, theoryMode, selectedChord, onChordSelect }: ChordListProps) => {
  const keyData = scale === "major" ? Key.majorKey(musicKey) : Key.minorKey(musicKey).natural;
  const diatonicChords = [...keyData.chords];
  const secondaryDominants = [...keyData.secondaryDominants];
  const diatonicInfo = scale === "major" ? DIATONIC_INFO_MAJOR : DIATONIC_INFO_MINOR;

  if (theoryMode === "secondary") {
    return (
      <div className="flex gap-3 items-center justify-center flex-wrap">
        {diatonicChords.map((diatonic, index) => {
          const secondary = secondaryDominants[index];
          const info = diatonicInfo[index] ?? FALLBACK_INFO;
          return (
            <div key={index} className="flex flex-col items-center gap-1">
              {secondary ? (
                <div
                  onClick={() => onChordSelect?.(secondary)}
                  className={chordCardClass("bg-amber-100", "border-amber-300", selectedChord === secondary)}
                >
                  <span className="text-amber-700 text-xs font-medium opacity-80">V7/{index + 1}</span>
                  <span className="text-amber-700 font-bold text-xl">{secondary}</span>
                </div>
              ) : (
                <div className="rounded-2xl px-5 py-3 min-w-[80px] h-[72px]" />
              )}
              <div className="text-gray-400 text-xs">↓</div>
              <div
                onClick={() => onChordSelect?.(diatonic)}
                className={chordCardClass(info.color, info.borderColor, selectedChord === diatonic)}
              >
                <span className={`${info.textColor} text-xs font-medium opacity-80`}>{info.label}</span>
                <span className={`${info.textColor} font-bold text-xl`}>{diatonic}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex gap-3 items-center justify-center flex-wrap">
      {diatonicChords.map((chord, index) => {
        const info = diatonicInfo[index] ?? FALLBACK_INFO;
        return (
          <div
            key={index}
            onClick={() => onChordSelect?.(chord)}
            className={chordCardClass(info.color, info.borderColor, selectedChord === chord)}
          >
            <span className={`${info.textColor} text-xs font-medium opacity-80`}>{info.label}</span>
            <span className={`${info.textColor} font-bold text-xl`}>{chord}</span>
          </div>
        );
      })}
    </div>
  );
};
