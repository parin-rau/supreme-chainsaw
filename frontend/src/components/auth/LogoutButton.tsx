import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import SidebarButton from "../nav/SidebarButton";

export default function LogoutButton() {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  return (
    <SidebarButton
      onClick={() => {
        logout({ logoutParams: { returnTo: window.location.origin } });
        navigate("/");
      }}
      text="Logout"
    />
  );
}
