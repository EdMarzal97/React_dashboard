import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthKitProvider } from '@workos-inc/authkit-react';

import App from './app';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AuthKitProvider
          clientId={import.meta.env.VITE_CLIENT_ID!}
          redirectUri={import.meta.env.VITE_REDIRECT_URI}
          apiHostname="api.workos.com"
        >
          <Suspense>
            <App />
          </Suspense>
        </AuthKitProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
