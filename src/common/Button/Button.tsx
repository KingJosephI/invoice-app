import React from 'react';
import { Button, Typography } from '@mui/material';
import buttonStyles from './Button.module.scss';
// import { bgcolor } from '@mui/system';

interface IButton extends React.BaseHTMLAttributes<HTMLButtonElement> {
  text?: string;
  startIcon?: string;
  bgcolor?: string;
  children?: React.ReactNode;
}

const MyButton = ({
  text = '',
  startIcon = '',
  bgcolor = '#333',
  children,
  ...props
}: IButton) => {
  return (
    <Button
      variant="contained"
      disableElevation
      className={buttonStyles.button}
      sx={{ bgcolor: bgcolor }}
      startIcon={startIcon}
      {...props}
    >
      <Typography>{children}</Typography>
    </Button>
  );
};

export default MyButton;
