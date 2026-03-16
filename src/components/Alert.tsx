import type { CSSProperties, ReactNode } from 'react';

type AlertVariant = 'blue' | 'green' | 'orange';

interface AlertProps {
  variant: AlertVariant;
  icon: string;
  children: ReactNode;
  style?: CSSProperties;
}

export default function Alert({ variant, icon, children, style }: AlertProps) {
  return (
    <div className={`alert alert-${variant}`} style={style}>
      <span>{icon}</span>
      <span>{children}</span>
    </div>
  );
}
