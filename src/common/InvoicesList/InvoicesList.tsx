import { Stack } from '@mui/system';
import React from 'react';
import Invoice from '../Invoice/Invoice';

interface IInvoicesList {
  data?: Array<any>;
}

const InvoicesList = ({ data }: IInvoicesList) => {
  return (
    <Stack>
      {data?.map(({ invoiceID, amount, dueDate, clientName, status }, key) => (
        <Invoice
          key={key}
          invoiceID={invoiceID}
          amount={amount}
          dueDate={dueDate}
          clientName={clientName}
          status={status}
        />
      ))}
    </Stack>
  );
};

export default InvoicesList;
