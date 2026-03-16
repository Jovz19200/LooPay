import type { CSSProperties } from 'react';

interface ProblemCardProps {
  icon: string;
  title: string;
  body: string;
  accentColor: string;
}

export default function ProblemCard({ icon, title, body, accentColor }: ProblemCardProps) {
  const style: CSSProperties = { '--accent-color': accentColor } as CSSProperties;

  return (
    <div className="problem-card fade-up" style={style}>
      <div className="pc-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
