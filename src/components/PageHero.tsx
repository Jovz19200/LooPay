import type { CSSProperties, ReactNode } from 'react';

interface PageHeroProps {
  label: string;
  labelColor: string;
  title: ReactNode;
  sub: string;
}

export default function PageHero({ label, labelColor, title, sub }: PageHeroProps) {
  const labelStyle: CSSProperties = { color: labelColor };

  return (
    <section className="page-hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="page-hero-content container">
        <div className="section-label" style={labelStyle}>
          {label}
        </div>
        <h1 className="section-title" style={{ marginBottom: 16 }}>
          {title}
        </h1>
        <p className="section-sub">{sub}</p>
      </div>
    </section>
  );
}
