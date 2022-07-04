import {
  deleteInvoiceDatum,
  getInvoiceData,
  getInvoiceDatum,
} from 'components/book-keeper/data';
import { useEffect, useState } from 'react';
import { Box, Button, Input, List, ListItem } from '@mui/material';
import Invoice from './invoice';

export default function Invoices() {
  const [invoiceDatum, setInvoiceDatum] = useState(undefined);
  const [invoiceData, setInvoiceData] = useState([]);
  const [searchParams, setSearchParams] = useState('');
  useEffect(() => {
    setInvoiceData(getInvoiceData());
  }, []);
  const handleListItemClick = (e) => {
    const id = Number(e.currentTarget.value);
    setInvoiceDatum(getInvoiceDatum(id));
  };
  const handleDelete = (e) => {
    const number = Number(e.currentTarget.value);
    const retInvoiceData = deleteInvoiceDatum(number, invoiceData);
    setInvoiceData(retInvoiceData);
    setInvoiceDatum(undefined);
  };
  return (
    <Box style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <Input
          placeholder="Input a search string!"
          value={searchParams}
          onChange={(event) => {
            const filter = event.target.value;
            if (filter) {
              setSearchParams(filter);
            } else {
              setSearchParams('');
            }
          }}
        />
        <List>
          {invoiceData
            .filter((invoice) => {
              const filter = searchParams;
              if (!filter) {
                return true;
              }
              const name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((invoice) => (
              <ListItem key={invoice.name}>
                <Button
                  sx={{ textTransform: 'none' }}
                  onClick={handleListItemClick}
                  value={invoice.number}
                >
                  {invoice.name}
                </Button>
              </ListItem>
            ))}
        </List>
      </nav>
      <Box component="section">
        <Invoice invoiceDatum={invoiceDatum} handleDelete={handleDelete} />
      </Box>
    </Box>
  );
}
