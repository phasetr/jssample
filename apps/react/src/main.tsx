import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './app/app';
import AppBar from './app/app-bar/app-bar';
import ResponsiveAppBarWithDrawerSample from './app/app-bar/responsive-app-bar-with-drawer-sample';
import BottomAppBar from './app/app-bar/bottom-app-bar';
import NxWelcome from './app/nx-welcome';
import MyLink from './app/my-link/my-link';

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
        <Route path="/app-bar" element={<AppBar />} />
        <Route
          path="/responsive-app-bar-with-drawer"
          element={<ResponsiveAppBarWithDrawerSample />}
        />
        <Route path="/bottom-app-bar" element={<BottomAppBar />} />
        <Route path="/nx-welcome" element={<NxWelcome title="jssample" />} />
        <Route path="/my-link" element={<MyLink />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
