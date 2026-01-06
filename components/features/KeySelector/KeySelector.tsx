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
      className="px-6 py-3 border-2 border-gray-300 rounded-lg bg-white text-lg font-medium hover:border-blue-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors cursor-pointer"
    >
      {keys.map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </select>
  );
};
