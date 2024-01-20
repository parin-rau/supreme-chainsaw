import { useAuth0 } from "@auth0/auth0-react";
import StyledButton from "../ui/StyledButton";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  return (
    <StyledButton
      onClick={() => {
        logout({ logoutParams: { returnTo: window.location.origin } });
        navigate("/");
      }}
      text="Logout"
    />
  );
}
