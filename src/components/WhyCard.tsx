import type { ReactNode } from 'react';

interface WhyCardProps {
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  body: string;
}

export default function WhyCard({ icon, iconBg, iconColor, title, body }: WhyCardProps) {
  return (
    <div className="why-card fade-up">
      <div className="why-icon" style={{ background: iconBg, color: iconColor }}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
