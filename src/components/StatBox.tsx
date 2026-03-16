import type { CSSProperties } from 'react';

interface StatBoxProps {
  value: string;
  label: string;
  color: string;
  dark?: boolean;
}

export default function StatBox({ value, label, color, dark = false }: StatBoxProps) {
  const boxStyle: CSSProperties = dark
    ? { background: 'rgba(255,255,255,.04)', borderColor: 'rgba(255,255,255,.08)' }
    : {};

  const lblStyle: CSSProperties = dark ? { color: 'rgba(255,255,255,.4)' } : {};

  return (
    <div className="stat-box fade-up" style={boxStyle}>
      <div className="sb-val" style={{ color }}>
        {value}
      </div>
      <div className="sb-lbl" style={lblStyle}>
        {label}
      </div>
    </div>
  );
}
