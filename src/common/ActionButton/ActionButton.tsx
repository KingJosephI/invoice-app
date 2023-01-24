import React from 'react';
import { Button, Typography } from '@mui/material';
import buttonStyles from './ActionButton.module.scss';

interface IButton extends React.HTMLProps<HTMLButtonElement> {
  text?: string;
  startIcon?: string | React.ReactNode;
  bgcolor?: string;
  children?: React.ReactNode;
}

const ActionButton = ({
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

export default ActionButton;
