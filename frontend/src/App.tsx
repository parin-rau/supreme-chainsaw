import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPrompt from "./components/auth/LoginPrompt";

export default function App() {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated && user ? (
    <RouterProvider router={router} />
  ) : (
    <LoginPrompt />
  );
}
