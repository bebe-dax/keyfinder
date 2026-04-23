"use client";

interface KeySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const KeySelector = ({ value, onChange }: KeySelectorProps) => {
  const keys = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-5 py-3 border border-gray-300 rounded-2xl bg-white text-base font-medium shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors cursor-pointer"
    >
      {keys.map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </select>
  );
};
