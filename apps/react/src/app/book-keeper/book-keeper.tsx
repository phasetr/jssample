import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { WithLeftMenu } from '@jssamples/ui';

export default function BookKeeper() {
  return (
    <WithLeftMenu>
      <h1>Book Keeper</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/book-keeper/invoices">Invoices</Link> |{' '}
        <Link to="/book-keeper/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </WithLeftMenu>
  );
}
