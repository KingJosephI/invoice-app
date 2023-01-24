import { Stack } from '@mui/system';
import React from 'react';
import Invoice from '../Invoice/Invoice';

interface IInvoicesList {
  data?: Array<any>;
}

const InvoicesList = ({ data }: IInvoicesList) => {
  return (
    <Stack>
      {data?.map(({ id, total, paymentDue, clientName, status }, key) => (
        <Invoice
          key={key}
          invoiceID={id}
          total={total}
          paymentDue={paymentDue}
          clientName={clientName}
          status={status}
        />
      ))}
    </Stack>
  );
};

export default InvoicesList;
