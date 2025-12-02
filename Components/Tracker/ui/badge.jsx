import { forwardRef } from 'react';
import style from './style.module.css';

const Badge = forwardRef(({ className, color, ...props }, ref) => {
  return <div ref={ref} className={`${style.badge} ${className}`} style={{ backgroundColor: color }} {...props} />;
});

Badge.displayName = 'Badge';

export { Badge };
