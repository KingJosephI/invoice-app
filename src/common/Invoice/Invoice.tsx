import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

interface IInvoice extends React.HTMLProps<HTMLDivElement> {
  invoiceID?: string;
  dueDate?: string;
  clientName?: string;
  amount?: number;
  status?: string;
  // children?: React.ReactNode;
}

const Invoice = ({
  invoiceID = '',
  dueDate = '',
  clientName = '',
  amount = 0,
  status,
}: IInvoice) => {
  return (
    <Stack direction="row">
      <Typography>{invoiceID}</Typography>
      <Typography>{dueDate}</Typography>
      <Typography>{clientName}</Typography>
      <Typography>{amount}</Typography>
      <Typography>{status}</Typography>
    </Stack>
  );
};

export default Invoice;
