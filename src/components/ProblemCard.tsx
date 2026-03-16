import type { CSSProperties, ReactNode } from 'react';

interface ProblemCardProps {
  icon: ReactNode;
  title: string;
  body: string;
  accentColor: string;
}

export default function ProblemCard({ icon, title, body, accentColor }: ProblemCardProps) {
  const cardStyle: CSSProperties = { '--accent-color': accentColor } as CSSProperties;
  const iconBoxStyle: CSSProperties = {
    width: 44, height: 44, borderRadius: 12,
    background: accentColor + '18',
    color: accentColor,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 16, flexShrink: 0,
  };

  return (
    <div className="problem-card fade-up" style={cardStyle}>
      <div style={iconBoxStyle}>{icon}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
