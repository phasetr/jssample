import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './app/app';
import ResponsiveAppBarWithDrawerSample from './app/app-bar/responsive-app-bar-with-drawer-sample';
import BottomAppBar from './app/app-bar/bottom-app-bar';
import NxWelcome from './app/nx-welcome';
import MyLink from './app/my-link/my-link';
import BookKeeper from './app/book-keeper/book-keeper';
import Expenses from './app/book-keeper/expenses';
import Invoices from './app/book-keeper/invoices';
import Invoice from './app/book-keeper/invoice';
import ReactDiv from './app/div/react-div';
import ReactHeaders from './app/h/react-headers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="test" element={<p>TEST</p>} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route
          path="/responsive-app-bar-with-drawer"
          element={<ResponsiveAppBarWithDrawerSample />}
        />
        <Route path="/bottom-app-bar" element={<BottomAppBar />} />
        <Route path="book-keeper" element={<BookKeeper />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path={':invoiceId'} element={<Invoice />} />
          </Route>
        </Route>
        <Route path="/nx-welcome" element={<NxWelcome title="jssample" />} />
        <Route path="/my-link" element={<MyLink />} />
        <Route path="/div" element={<ReactDiv />} />
        <Route path="/h" element={<ReactHeaders />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
