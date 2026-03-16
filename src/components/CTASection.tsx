import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTAButton {
  to: string;
  label: string;
  variant: 'primary' | 'ghost';
}

interface CTASectionProps {
  heading: string;
  sub: string;
  buttons: CTAButton[];
}

export default function CTASection({ heading, sub, buttons }: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>{heading}</h2>
            <p>{sub}</p>
          </div>
          <div className="cta-buttons">
            {buttons.map(({ to, label, variant }) => (
              <Link
                key={to + label}
                to={to}
                className={`btn btn-${variant} btn-lg`}
                style={{ gap: 8 }}
              >
                {label}
                {variant === 'primary' && <ArrowRight size={16} />}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
