"use client";

interface MajorMinorProps {
  value: string;
  onChange: (value: string) => void;
}

export const MajorMinor = ({ value, onChange }: MajorMinorProps) => {
  const majorminor = [
    { value: "major", label: "メジャー" },
    { value: "minor", label: "マイナー" },
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-6 py-3 border-2 border-gray-300 rounded-lg bg-white text-lg font-medium hover:border-blue-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors cursor-pointer"
    >
      {majorminor.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

interface ScaleProps {
  value: string;
  onChange: (value: string) => void;
}

export const Scale = ({ value, onChange }: ScaleProps) => {
  const scale = [{ value: "diatonic", label: "ダイアトニック" }];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-6 py-3 border-2 border-gray-300 rounded-lg bg-white text-lg font-medium hover:border-blue-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors cursor-pointer flex-1"
    >
      {scale.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
