import { createContext, useMemo, useState, type ReactNode } from "react";
import type { AuthContextType } from "../types";

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => console.warn("no auth provider"),
  logout: () => console.warn("no auth provider"),
});

function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const authContextValue = useMemo(() => {
    return { isAuthenticated, login, logout };
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
