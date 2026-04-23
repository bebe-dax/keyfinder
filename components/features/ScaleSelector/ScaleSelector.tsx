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
      className="px-5 py-3 border border-gray-300 rounded-2xl bg-white text-base font-medium shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors cursor-pointer"
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
  const scale = [
    { value: "diatonic", label: "ダイアトニック" },
    { value: "secondary", label: "セカンダリードミナント" },
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-5 py-3 border border-gray-300 rounded-2xl bg-white text-base font-medium shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors cursor-pointer flex-1"
    >
      {scale.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
