import { InvoiceDatum } from 'components/book-keeper/data';
import { Box, Button } from '@mui/material';
import React from 'react';

type InvoiceComponent = {
  invoiceDatum: InvoiceDatum;
  handleDelete: (e: React.MouseEvent<HTMLInputElement>) => void;
};
export default function Invoice({
  invoiceDatum,
  handleDelete,
}: InvoiceComponent) {
  return (
    <Box component="section" sx={{ padding: '1rem' }}>
      {invoiceDatum === undefined ? (
        <></>
      ) : (
        <>
          <Box component="h2">Total Due: {invoiceDatum.amount}</Box>
          <Box component="p">
            {invoiceDatum.name}: {invoiceDatum.number}
          </Box>
          <Box component="p">Due Date: {invoiceDatum.due}</Box>
          <Box component="p">
            <Button value={invoiceDatum.number} onClick={handleDelete}>
              Delete
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
