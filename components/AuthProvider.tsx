"use client";
import { createContext, useContext, useState } from "react";

type AuthCtx = { isAuth: boolean; toggleLogin: () => void };
const Ctx = createContext<AuthCtx>({ isAuth: false, toggleLogin: () => {} });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);
  const toggleLogin = () => setIsAuth((v) => !v);
  return <Ctx.Provider value={{ isAuth, toggleLogin }}>{children}</Ctx.Provider>;
}

export function useAuth() {
  return useContext(Ctx);
}
