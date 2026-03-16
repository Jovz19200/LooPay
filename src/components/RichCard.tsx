import type { CSSProperties, ReactNode } from 'react';

interface RichCardProps {
  accentColor: string;
  title: string;
  body: string;
  id?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export default function RichCard({ accentColor, title, body, id, style, children }: RichCardProps) {
  const cardStyle: CSSProperties = {
    ...style,
    ['--card-color' as string]: accentColor,
  };

  return (
    <div className="rich-card" id={id} style={cardStyle}>
      <h3>{title}</h3>
      <p>{body}</p>
      {children}
    </div>
  );
}
