"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { createClient } from "@/lib/supabase/client";

type AuthCtx = {
  isAuth: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

const Ctx = createContext<AuthCtx>({
  isAuth: false,
  login: async () => { },
  logout: async () => { },
});

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getUser().then(({ data }) => {
      setIsAuth(!!data.user);
    });

    // Listen for login/logout
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsAuth(!!session?.user);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${process.env.NEXT_URL}/auth/callback` },
    });
    if (error) console.error(error);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setIsAuth(false);
  };

  return (
    <Ctx.Provider value={{ isAuth, login, logout }}>
      {children}
    </Ctx.Provider>
  );
}

export function useAuth() {
  return useContext(Ctx);
}