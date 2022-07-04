import * as React from 'react';
import { useState } from 'react';
import { Link as MuiLink } from '@mui/material';
import Expenses from './expenses';
import Invoices from "./invoices";

export default function Root() {
  const [target, setTarget] = useState(<></>);
  const handleInvoicesClick = () => {
    setTarget(<Invoices/>);
  };
  const handleExpensesClick = () => {
    setTarget(<Expenses />);
  };
  return (
    <>
      <h1>BookKeeper</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <MuiLink onClick={handleInvoicesClick}>Invoices</MuiLink> |{' '}
        <MuiLink onClick={handleExpensesClick}>Expenses</MuiLink>
      </nav>
      <div id="target">{target}</div>
    </>
  );
}
