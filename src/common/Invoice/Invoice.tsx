import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

interface IInvoice extends React.HTMLProps<HTMLDivElement> {
  invoiceID?: string;
  paymentDue?: string;
  clientName?: string;
  total?: number;
  status?: string;
  // children?: React.ReactNode;
}

const Invoice = ({
  invoiceID = '',
  paymentDue = '',
  clientName = '',
  total = 0,
  status,
}: IInvoice) => {
  return (
    <Stack direction="row">
      <Typography>{invoiceID}</Typography>
      <Typography>{paymentDue}</Typography>
      <Typography>{clientName}</Typography>
      <Typography>{total}</Typography>
      <Typography>{status}</Typography>
    </Stack>
  );
};

export default Invoice;
