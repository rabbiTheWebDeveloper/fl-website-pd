import { forwardRef } from 'react';

const MapIcon = forwardRef(({ strokeWidth = 2, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  );
});

const CopyIcon = forwardRef(({ strokeWidth = 2, ...props }, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M4.5 6.30769H10.3333C10.9777 6.30769 11.5 6.95057 11.5 7.74359V14.9231C11.5 15.7161 10.9777 16.359 10.3333 16.359H4.5C3.85567 16.359 3.33333 15.7161 3.33333 14.9231V7.74359C3.33333 6.95057 3.85567 6.30769 4.5 6.30769Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.8333 12.0513C14.475 12.0513 15 11.4051 15 10.6154V3.4359C15 2.64615 14.475 2 13.8333 2H8C7.35833 2 6.83333 2.64615 6.83333 3.4359"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

const ExternalIcon = forwardRef(({ strokeWidth = 2, ...props }, ref) => {
  return (
    <svg ref={ref} {...props} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M11.6666 2.33333L2.33325 11.6667" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.44434 2.33333H11.6666V8.55556" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});

export { MapIcon, CopyIcon, ExternalIcon };
