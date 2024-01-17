import { Outlet } from "react-router-dom";
import { AuthProvider } from "../components/auth/AuthContext";
import PersistLogin from "../components/auth/PersistLogin";

export default function AuthRequired() {
  return (
    <AuthProvider>
      <PersistLogin>
        <Outlet />
      </PersistLogin>
    </AuthProvider>
  );
}
