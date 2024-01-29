import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import LoginPrompt from "./components/auth/LoginPrompt";
import LoadingMessage from "./components/loading/LoadingMessage";
import BaseStyles from "./layout/BaseStyles";

const domain = import.meta.env.VITE_AUTH0_ISSUER_BASE_URL;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const MissingParams = () => (
  <p className="text-white">
    Missing Auth0 domain/clientId. Domain: {domain} clientId: {clientId}
  </p>
);

const AppWithAuth = () => {
  const { user, isAuthenticated, isLoading, error } = useAuth0();

  return isAuthenticated && user ? (
    <>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <LoadingMessage />}
      <RouterProvider router={router} />
    </>
  ) : (
    <>
      <LoginPrompt />
    </>
  );
};

export default function App() {
  return (
    <BaseStyles>
      {domain && clientId ? (
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <AppWithAuth />
        </Auth0Provider>
      ) : (
        <MissingParams />
      )}
    </BaseStyles>
  );
}
