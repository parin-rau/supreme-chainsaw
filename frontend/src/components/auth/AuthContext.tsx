import { useState, createContext, useRef, useCallback, useMemo } from "react";

export const AuthContext = createContext<null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const user = useRef<null>(null);
  const [err, setErr] = useState<string | null>(null);

  const signIn = useCallback(async () => {}, []);

  const signOut = useCallback(async () => {}, []);

  const registerUser = useCallback(async () => {}, []);

  const refreshAccessToken = useCallback(async () => {}, []);

  const value = useMemo(
    () => ({
      user,
      registerUser,
      signIn,
      signOut,
      refreshAccessToken,
      err,
      setErr,
    }),
    [err, refreshAccessToken, registerUser, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
