import { Tooltip, tooltipClasses } from '@mui/material';
import { Button } from '../ui/button';
import { CopyIcon } from '../ui/icons';

import style from './style.module.css';
import { useState } from 'react';

export const CopyText = ({ text, className, tooltipClass }) => {
  const [isCopied, setCopied] = useState(false);
  const [timeID, setTimeID] = useState(null);

  const handleCopy = () => {
    clearTimeout(timeID);
    setCopied(true);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setTimeID(
      setTimeout(() => {
        setCopied(false);
      }, 2000)
    );
  };

  return (
    <Tooltip
      arrow
      placement="top"
      classes={{ tooltip: `${tooltipClass} ${style.tooltip}`, arrow: style.arrow }}
      sx={{
        opacity: '1',
        [`& .${tooltipClasses.arrow}`]: {
          color: 'var(--primary-color, #6220ff)',
        },
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: 'var(--primary-color, #6220ff)',
        },
      }}
      title={isCopied ? 'Copied!' : 'Click to Copy'}
    >
      <Button onClick={handleCopy} className={`${style.button} ${className}`}>
        <CopyIcon />
      </Button>
    </Tooltip>
  );
};
