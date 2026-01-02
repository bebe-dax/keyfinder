"use client";

interface MajorMinorProps {
  value: string;
  onChange: (value: string) => void;
}

export const MajorMinor = ({ value, onChange }: MajorMinorProps) => {
  const majorminor = ["major", "minor"];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 border rounded"
    >
      {majorminor.map((majorminor) => (
        <option key={majorminor} value={majorminor}>
          {majorminor}
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
  const scale = ["diatonic"];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 border rounded"
    >
      {scale.map((scale) => (
        <option key={scale} value={scale}>
          {scale}
        </option>
      ))}
    </select>
  );
};
