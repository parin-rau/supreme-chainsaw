import { useAuth0 } from "@auth0/auth0-react";
import StyledButton from "../ui/StyledButton";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return <StyledButton onClick={() => loginWithRedirect()} text="Log In" />;
}
