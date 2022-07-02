import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './app/app';
import { Link as MyLink } from './app/link/link';
import NxWelcome from './app/nx-welcome';
import AppBar from './app/app-bar/app-bar';
import ResponsiveAppBarWithDrawerSample from './app/app-bar/responsive-app-bar-with-drawer-sample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app-bar" element={<AppBar />} />
        <Route
          path="/responsive-app-bar-with-drawer"
          element={<ResponsiveAppBarWithDrawerSample />}
        />
        <Route path="/nx-welcome" element={<NxWelcome title="jssample" />} />
        <Route path="/link" element={<MyLink />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
