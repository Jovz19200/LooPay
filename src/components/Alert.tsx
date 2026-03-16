import type { CSSProperties, ReactNode } from 'react';

type AlertVariant = 'blue' | 'green' | 'orange';

interface AlertProps {
  variant: AlertVariant;
  icon: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
}

export default function Alert({ variant, icon, children, style }: AlertProps) {
  return (
    <div className={`alert alert-${variant}`} style={style}>
      <span style={{ flexShrink: 0, marginTop: 1 }}>{icon}</span>
      <span>{children}</span>
    </div>
  );
}
