import LoginButton from "./LoginButton";

export default function LoginPrompt() {
  return (
    <div className="flex flex-col gap-4">
      <h2>Welcome</h2>
      <p>Please sign in to use this app</p>
      <LoginButton />
    </div>
  );
}
